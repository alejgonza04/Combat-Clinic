import React, { createContext, useState, useEffect, useContext } from 'react';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:8080/sessions', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch sessions');
                }
                const data = await response.json();
                setSessions(data);
            } catch (error) {
                console.error('Fetch sessions error:', error.message);
            }
        };
    
        fetchSessions();
    }, []);

    const addSession = (session) => {
        setSessions((prevSessions) => [...prevSessions, session]);
    }

    return (
        <SessionContext.Provider value={{ sessions, addSession }}>
            {children}
        </SessionContext.Provider>
    )
}
