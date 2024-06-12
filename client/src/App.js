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
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

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
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isWelcomePageOpen, setIsWelcomePageOpen] = useState(true);
  const [email, setEmail] = useState(''); // State variable to store user's email
  const [isLoginOpen, setIsLoginOpen] = useState(!token);

  /*useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get('/user/email', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    }
    });*/

    const handleSetToken = (userToken) => {
      localStorage.setItem('token', userToken);
      setToken(userToken);
    };
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      setToken(null);
    };

  return (
  <ThemeProvider theme={lightTheme}>
  <BrowserRouter>
    {token ? (
      <Image>
      <BackgroundCard>
      {/*<Navbar setToken={setToken}/>*/}
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
      {isWelcomePageOpen ? (
        <Welcome setIsWelcomePageOpen={setIsWelcomePageOpen}/>
      ) : (
        //<Authentication {/*setToken={setToken} setEmail={setEmail}*/} />
        <Authentication  setToken={handleSetToken} />
      )}
    </Container>
    )}
  </BrowserRouter>
  </ThemeProvider>
  );
}

/*const App = () => {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState();
  if (!token) {
    return <Authentication setToken={setToken} />
  }
  return (
  <ThemeProvider theme={lightTheme}>
  <BrowserRouter>
      <Container>
      <Navbar>
      <Routes>
        <Route path="/" exact element={<Dashboard />}/>
      </Routes>
      </Navbar>
  </Container>
  </BrowserRouter>
  </ThemeProvider>
  );
}*/

export default App


