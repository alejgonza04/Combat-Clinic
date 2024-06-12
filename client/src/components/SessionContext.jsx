import React, { createContext, useState, useEffect, useContext } from 'react';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const token = localStorage.getItem('token');
                const userEmail = localStorage.getItem('email'); // Retrieve the user's email from local storage
                const response = await fetch(`http://localhost:8080/sessions/${userEmail}`, { // Pass the user's email in the URL
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
