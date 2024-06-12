import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import LogoImage from "../utils/images/mmaicon.png";
import LogoImage2 from "../utils/images/mmaicon2.png";
import AuthImage from "../utils/images/mma.jpg";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
flex: 1;
position: relative;
display: flex;
flex-direction: column;
padding: 40px;
align-items: center;
justify-content: center;
height: 100%;
display: flex;
overflow: auto;
@media (max-width: 700px) {
  flex-direction: column;
}
`;

const Logo = styled.img`
position: absolute;
width: 80px;
right: 460px;
top: ${({ login }) => (login ? '10px' : '70px')}; //115px
z-index: 10;
@media (max-width: 450px) {
  width: 45px;
  right: 280px;
  top: ${({ login }) => (login ? '20px' : '55px')}; //80px
}
`;

const Logo2 = styled.img`
position: absolute;
left: 460px;
width: 80px;
top: ${({ login }) => (login ? '10px' : '70px')};
z-index: 10;
@media (max-width: 450px) {
  width: 45px;
  left: 280px;
  top: ${({ login }) => (login ? '20px' : '55px')};
}
`;

const Image = styled.div` //making it a div gives us more control over the image
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-image: url(${AuthImage});
background-size: cover;
background-position: center;
z-index: -1;
`;

const AuthenticationCard = styled.div`
font-size: 20px;
text-align: center;
color: ${({ theme }) => theme.text_secondary};
margin-top: 20px;
@media (max-width: 450px) {
  font-size: 14px;
  min-height: auto;
}
`;

const Text = styled.div`
font-size: 20px;
text-align: center;
color: ${({ theme }) => theme.white};
margin-top: 20px;
@media (max-width: 450px) {
  font-size: 14px;
}
`;

const TextButton = styled.div`
color: ${({ theme }) => theme.red};
cursor: pointer;
`;

const Card = styled.div`
position: absolute;
flex: 1;
width: 500px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.text_primary + 20};
border-radius: 14px;
background: ${({ theme }) => theme.bg};
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
display: flex;
flex-direction: column;
gap: 6px;
@media (max-width: 450px) {
  padding: 16px;
  width: 300px;
}
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
`;

const Authentication = ({ setToken, setIsLoginOpen }) => {
  const [noLogin, setNoLogin] = useState(false);
  return (
    <Container>
      <Image src={AuthImage}/>
      <Card>
      <Logo src={LogoImage}/>
      <Logo2 src={LogoImage2}/>
      <AuthenticationCard>
       {!noLogin ? (
        <> 
        <SignIn setToken={setToken}/>
          <Text>Don't have an account?{" "}
          <TextButton onClick={() => setNoLogin(true)}>Sign Up</TextButton>
          </Text>
      </>
      ) : (
        <>
        <SignUp setToken={setToken}/>
          <Text>Already have an account?<TextButton onClick={() => setNoLogin(false)}>Sign In</TextButton>

          </Text>
        </>
      )}
      </AuthenticationCard>
      </Card>
    </Container>
  )
}

export default Authentication;
