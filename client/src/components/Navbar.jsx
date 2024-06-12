import React from 'react';
import styled from 'styled-components';
import { Link as LinkR, NavLink } from "react-router-dom";
import LogoImage from "../utils/images/mmaicon.png";
import LogoImage2 from "../utils/images/mmaicon2.png";
import Contact from '../pages/Contact';


const Nav = styled.div`
background-color: ${({ theme }) => theme.bg};
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.05));
`;

const NavContainer = styled.div`
width: 100%;
max-width: 1400px;
display: flex;
padding: 0 30px;
align-items: center;
gap: 14px;
justify-content: space-between;
font-size: 1rem;
@media screen and (max-width: 768px) {
    align-items: flex-start;
    padding: 0 15px;
  }
`;

const NavItems = styled.ul`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
padding: 40px;
list-style: none;
@media screen and (max-width: 768px) {
    align-items: center;
    gap: 12px;
    padding: 25px;
  }
  @media screen and (max-width: 450px) {
    align-items: center;
    gap: 12px;
    padding: 25px 0px 0px 0px;
    flex-direction: column;
  }
`;

const Navlink = styled(NavLink)`
display: flex;
align-items: center;
color: ${({ theme }) => theme.white};
font-weight: 500;
cursor: pointer;
transition: all 0.3s ease;
padding: 6px;
transition: all 1s slide-in;
text-decoration: none;
&:hover {
    color: ${({ theme }) => theme.red};
}
&.active {
    color: ${({ theme }) => theme.red};
    border-bottom: 1.8px solid ${({ theme }) => theme.red};
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 450px) {
    padding: 0px;
    font-size: 12px;
  }
`;

const NavName = styled(LinkR)`
width: 100%;
display: flex;
align-items: center;
font-weight: 600;
text-align: center;
font-size: 18px;
text-decoration: none;
justify-content: start;
color: ${({ theme }) => theme.red};
@media screen and (max-width: 768px) {
  padding: 40px 0px 0px;
  font-size: 16px;
}
@media screen and (max-width: 450px) {
  padding: 40px 0px 0px;
  font-size: 12px;
}
`;

const Logo = styled.img`
height: 42px;
@media screen and (max-width: 450px) {
  padding: 0;
  height: 30px;
}
`;

const UserContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: end;
gap: 16px;
`;

const TextButton = styled.div`
color: ${({ theme }) => theme.white};
font-weight: 600;
justify-content: center;
cursor: pointer;
font-size: 16px;
transition: all 0.3s ease;
font weight: 600;
&:hover {
    color: ${({ theme }) => theme.red};
}
&.active {
    color: ${({ theme }) => theme.red};
    border-bottom: 1.8px solid ${({ theme }) => theme.red};
}
@media screen and (max-width: 768px) {
  padding: 40px 15px 0px;
}
@media screen and (max-width: 450px) {
  padding: 40px 25px 0px;
  font-size: 17px;
}
`;

const Navbar = ({ handleLogout }) => {
  return (
  <Nav>
  <NavContainer> 
      <NavName to="/">
          <Logo src={LogoImage}/>
          Combat Clinic
          <Logo src={LogoImage2}/>
      </NavName>
      <NavItems>
          <Navlink to='/'>Dashboard</Navlink>
          <Navlink to='/sessions'>Sessions</Navlink>
          <Navlink to='/techniques'>Techniques</Navlink>
          <Navlink to='/contact'>Contact</Navlink>
      </NavItems>
      <UserContainer>
      <TextButton onClick={handleLogout}>Logout
      </TextButton>
      </UserContainer>
  </NavContainer>
  </Nav>
);
};

export default Navbar;
