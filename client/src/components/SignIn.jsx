import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';
import PropTypes from 'prop-types';


const Container = styled.div`
width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
gap: 36px;
`;

const Title = styled.div`
font-size: 48px;
font-weight: 800;
color: ${({ theme }) => theme.red};
@media (max-width: 450px) {
  font-size: 30px;
}
`;

const Span = styled.div`
font-size: 20px;
font-weight: 400;
color: ${({ theme }) => theme.red + 90};
@media (max-width: 450px) {
  font-size: 14px;
}
`;

const TextAlign = styled.div`
text-align: left;
`;

const ErrorText = styled.div`
font-size: 20px;
text-align: center;
color: ${({ theme }) => theme.red};
@media (max-width: 450px) {
  font-size: 14px;
}
`;

async function loginUser(credentials) {
  return fetch('http://localhost:8080/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json());
}

const SignIn = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
      if (e) {
        e.preventDefault();
      }

      try {
      const credentials = { email, password };      
      const response = await loginUser(credentials);
      
      if (!response.token){
        throw new Error(response.message || 'Sign Failed');
      }
      const token = response.token;
      const userEmail = response.result.email; // Extract the user's email from the response
      localStorage.setItem('token', token);
      localStorage.setItem('email', userEmail); // Store the user's email in local storage
      setToken(token);
      console.log(userEmail);
      } catch (error) {
        setError(error.message);
      }
    }
  
  return <Container>
      <div>
        <Title>Welcome to</Title>
        <Title>Combat Clinic</Title>
        <Span>Please enter sign in info</Span>
      </div>
      <div style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}>
        <TextAlign>
        <TextInput label="Email Address" placeholder="Enter your email address"
        handleChange={(e) => setEmail(e.target.value)}
        />
        </TextAlign>
        <TextAlign>
        <TextInput label="Password" placeholder="Enter your password"
        handleChange={(e) => setPassword(e.target.value)}
        />
        </TextAlign>
        <Button text="Sign In" onClick={(e) => handleSubmit(e)}
        />
         </div>
         {error && <ErrorText>{error}</ErrorText>}
    </Container>

}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default SignIn
