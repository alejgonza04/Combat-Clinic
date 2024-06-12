import express from 'express';
import mongoose from 'mongoose';

import SessionMessage from '../models/sessionMessage.js';

export const addSession = async (req, res) => {
    const { sessionType, sessionLength, sparringTime, techniques, date } = req.body;
    const userEmail = req.user.email; 

    const newSessionMessage = new SessionMessage({ sessionType, sessionLength, sparringTime, techniques, date, userEmail });

    try {
        await newSessionMessage.save();
        res.status(201).json(newSessionMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSessions = async (req, res) => { 
    const userEmail = req.user.email; 
    try {
        const sessionMessages = await SessionMessage.find({ userEmail });
        res.status(200).json(sessionMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
