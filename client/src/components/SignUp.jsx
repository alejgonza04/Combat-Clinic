import React, {useState} from 'react';
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

async function registerUser(credentials) {
  return fetch('https://combat-clinic.onrender.com/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json());
}

const SignUp = ({ setToken }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const credentials = { name, email, password };      
      const response = await registerUser(credentials);
      
      if (!response.token){
        throw new Error(response.message || 'Sign Up Failed');
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      handleSubmit();
    }
  }

  return <Container>
      <div>
        <Title>Welcome to Combat Clinic</Title>
        <Span>Please enter details to sign up</Span>
      </div>
      <div style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}>
        <TextAlign>
        <TextInput  label="Full Name" placeholder="Enter your full name"
        value={name}
        handleChange={(e) => setName(e.target.value)}
        />
        </TextAlign>
        <TextAlign>
        <TextInput label="Email Address" placeholder="Enter your email address"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        />
        </TextAlign>
        <TextAlign>
        <TextInput label="Password" placeholder="Enter your password"
        handleChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyPress}
        />
        </TextAlign>
        <Button text="Sign Up" onClick={(e) => handleSubmit(e)}
        />
      </div>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>

}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default SignUp

