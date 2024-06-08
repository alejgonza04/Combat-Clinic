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

async function signUpUser(credentials) {
  return fetch('https://combat-clinic.onrender.com/auth/signup', { // Update the endpoint here
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

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const token = await signUpUser({
      name,
      email,
      password
    });
    setToken(token);
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
        />
        </TextAlign>
        <Button text="Sign Up" onClick={(e) => handleSubmit(e)}
        />
      </div>
    </Container>

}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default SignUp
