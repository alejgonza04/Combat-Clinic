import React, { useState, useEffect } from 'react';
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes.js";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard.jsx';
import Contact from './pages/Contact.jsx';
import Techniques from './pages/Techniques.jsx';
import Bjj from './pages/Bjj.jsx';
import MuayThai from './pages/MuayThai.jsx';
import Boxing from './pages/Boxing.jsx';
import Wrestling from './pages/Wrestling.jsx';
import AddSession from './pages/AddSession.jsx';
import useToken from './components/useToken.js';
import cageImage from "./utils/images/cage.jpg";
import myImage from "./utils/images/photo.JPG";
import Sessions from './pages/Sessions.jsx';
import Progress from './pages/Progress.jsx';
import Welcome from './pages/Welcome.jsx';
import { SessionProvider, useSession } from './components/SessionContext';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y: hidden;
transition: all 0.2s ease;
`;


const BackgroundCard = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y: hidden;
transition: all 0.2s ease;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
`;

const Image = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-image: url(${cageImage});
background-size: cover;
background-position: center;
z-index: -1;
`;

const Image2 = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-image: url(${myImage});
background-size: cover;
background-position: center;
z-index: -1;
`;

const App = () => {
 // Initialize token from localStorage
const { setToken, setEmail } = useSession();
const [localToken, setLocalToken] = useState(localStorage.getItem('token') || null);
const [isWelcomePageOpen, setIsWelcomePageOpen] = useState(localStorage.getItem('isWelcomePageOpen') !== 'false');
const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setToken(localToken);
    setEmail(localStorage.getItem('email'));
  }, [localToken]);

  useEffect(() => {
    // Check if 'isWelcomePageOpen' is null (first-time user)
    if (localStorage.getItem('isWelcomePageOpen') === null) {
      setIsWelcomePageOpen(true);  
    }
  }, []);

  useEffect(() => {
    setIsAuthenticated(localToken !== null);
  }, [localToken]);

  useEffect(() => {
    // Event listener to handle logout on beforeunload
    const handleBeforeUnload = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('isWelcomePageOpen');
      setLocalToken(null);
      setToken(null); // Clear token in context
      setEmail(null); // Clear email in context
      setIsWelcomePageOpen(true);
      setIsAuthenticated(false); 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [setToken, setEmail]);

  const handleSetToken = (userToken) => {
    localStorage.setItem('token', userToken);
    setLocalToken(userToken);
    setToken(userToken);

    const fetchUserEmail = async (userToken) => {
      try {
        const response = await fetch('https://combat-clinic.onrender.com/user/email', {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Error fetching user email');
        }

        const data = await response.json();
        const userEmail = data.email;
        localStorage.setItem('email', userEmail);
        setEmail(userEmail); // Update email in context
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserEmail(userToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('isWelcomePageOpen');
    setLocalToken(null);
    setToken(null);
    setEmail(null); 
    setIsWelcomePageOpen(true);
    setIsAuthenticated(false); 
  };

  const handleCloseWelcomePage = () => {
    localStorage.setItem('isWelcomePageOpen', 'false');
    setIsWelcomePageOpen(false);
  };

  return (
  <ThemeProvider theme={lightTheme}>
  <BrowserRouter>
    { isAuthenticated ? (
      <Image>
      <BackgroundCard>
      <Navbar handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="techniques" element={<Techniques />}/>
        <Route path="sessions" element={<Sessions />}/>
        <Route path="techniques/bjj" element={<Bjj />}/>
        <Route path="techniques/muaythai" element={<MuayThai />}/>
        <Route path="techniques/boxing" element={<Boxing />}/>
        <Route path="techniques/Wrestling" element={<Wrestling />}/>
        <Route path="addsession" element={<AddSession />}/>
        <Route path="session" element={<AddSession />}/>
        <Route path="progress" element={<Progress />}/>
      </Routes>
      </BackgroundCard>
      </Image>

  ) : (
    <Container>
      { isWelcomePageOpen ? (
        <Welcome  setIsWelcomePageOpen={setIsWelcomePageOpen} handleCloseWelcomePage={handleCloseWelcomePage} />
      ) : (
        <Authentication  setToken={handleSetToken} />
      )}
    </Container>
    )}
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App

