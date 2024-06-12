import React, { createContext, useState, useEffect, useContext } from 'react';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [sessions, setSessions] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [email, setEmail] = useState(localStorage.getItem('email'));

    useEffect(() => {
        const fetchSessions = async () => {
            if (!token || !email) return; // Avoid fetching if token or email is not available

            try {
                const response = await fetch(`https://combat-clinic.onrender.com/sessions/${email}`, {
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
    }, [token, email]); // Re-fetch sessions when token or email changes

    const addSession = (session) => {
        setSessions((prevSessions) => [...prevSessions, session]);
    };

    return (
        <SessionContext.Provider value={{ sessions, addSession, setToken, setEmail }}>
            {children}
        </SessionContext.Provider>
    );
};

