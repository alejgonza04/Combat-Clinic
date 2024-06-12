import React, { useEffect, useState } from "react";
import styled,  { ThemeProvider } from "styled-components";
import newPage from "../utils/images/new-page.png";
import yourPage from "../utils/images/your-page.png";
import progress from "../utils/images/progress.png";
import Cards from "../components/DashboardComp";
import Card from "../components/DashboardCard";



const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
padding: 22px 0px;
align-items: flex-start;
overflow-y: scroll;
`;

const Wrapper = styled.div`
flex: 1;
max-width: 1400px;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
flex-direction: column;
@media (max-width: 600px){
    gap: 12px;
}
@media (max-width: 450px){
  gap: 20px;
}
`;

const Card2 = styled.div`
height: 400px;
width: 700px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
align-items: center;
@media (max-width: 768px) {
  padding: 16px;
  border-radius: 10px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
}
`;

const TechLink = styled.div`
font-weight: 800;
color: ${({ isHovered, theme }) => (isHovered ? theme.red : theme.white)};
font-size: 31px; 
padding: 10px 0px;
transition: all 0.3s ease;
cursor: pointer;
transition: all 1s slide-in;
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.red};
}
@media (max-width: 768px) {
  font-size: 21px; 
}
`;


const Image = styled.img`
width: 130px;
height: 130px;
padding: 10px;
cursor: pointer;
@media (max-width: 768px) {
  width: 80px;
  height: 80px;
}
`;


const Dashboard = ({ email }) => {
  const [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    if (email) {
      const fetchSessionData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/sessions?email=${email}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });

          if (!response.ok) {
            throw new Error('Error fetching session data');
          }

          const data = await response.json();
          setSessionData(data);
        } catch (error) {
          console.error('Error fetching session data:', error);
        }
      };

      fetchSessionData();
    }
  }, [email]);
  return (
    <Container>
      <Wrapper>

      <Cards email={email} />

      <Card email={email} sessions={sessionData} />


      

      </Wrapper>
    </Container>
  )
}

export default Dashboard

