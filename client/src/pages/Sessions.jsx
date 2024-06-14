import React from 'react';
import styled from "styled-components";
import { useSession } from '../components/SessionContext.jsx';
import bjjImage from "../utils/images/jiujitsu.png";
import thaiImage from "../utils/images/muaythai.png";
import boxingImage from "../utils/images/boxing.png";
import wrestlingImage from "../utils/images/wrestling.png";

const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 22px 0px;
overflow-y: scroll;
`;

const Wrapper = styled.div`
flex: 1;
max-width: 1400px;
display: flex;
justify-content: center;
align-items: center;
gap: 22px;
flex-direction: column;
@media (max-width: 600px){
    gap: 12px;
    padding: 0px 0px 150px 0px;
}
`;

const Text = styled.div`
font-weight: 800;
color: white;
font-size: 24px;
padding: 25px;
@media (max-width: 768px) {
  font-size: 22px; 
}
@media (max-width: 450px) {
  font-size: 13px; 
}
`;

const Text2 = styled.div`
font-weight: 800;
color: white;
font-size: 60px;
padding: 10px;
@media (max-width: 768px) {
  font-size: 35px; 
}
@media (max-width: 450px) {
  font-size: 25px;
  text-align: center;
}
`;

const Text3 = styled.div`
font-weight: 800;
color: ${({ theme }) => theme.red};
font-size: 25px;
padding: 25px;
@media (max-width: 450px) {
  padding: 10px;
  text-align: center;
}
`;

const Card = styled.div`
height: auto;
width: 700px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column;
margin-top: 1;
@media (max-width: 768px) {
  padding: 16px;
  width: 650px;
  border-radius: 20px;
}
@media (max-width: 450px) {
  padding: 16px;
  width: 320px;
  border-radius: 20px;
  height: auto;
  text-align: center;
}
`;

const CardWrapper = styled.div`
flex-direction: column;
display: flex;
align-items: center;
`;

const CardWrapper2 = styled.div`
display: flex;
justify-content: center; 
`;

const CardWrapper3 = styled.div`
display: flex;
align-items: center; 
justify-content: center; 
`;

const Image = styled.img`
width: 100px;
padding: 10px;
@media (max-width: 450px) {
  width: 80px;
}
`;

const ImageText = styled.div`
font-weight: 800;
color: white;
font-size: 15px;
justify-content: start;
display: flex;
`;

const Sessions = () => {
    const { sessions } = useSession();
    
    const getImage = (sessionType) => {
      switch(sessionType) {
        case "BJJ":
          return bjjImage;
        case "Muay Thai":
          return thaiImage;
        case "Boxing":
          return boxingImage;
        case "Wrestling":
          return wrestlingImage;
        default:
          return null;
      }
    };
  
    return (
      <Container>
        <Wrapper>
          {sessions.length > 0 ? (
            sessions.map((session, index) => (
              <Card key={index}>
                <CardWrapper2>
                <CardWrapper>
                <Text> Session Type: </Text>
                  <ImageText>{session.sessionType}</ImageText>
                  <Image src={getImage(session.sessionType)}/>
                </CardWrapper>

                <CardWrapper>
                <Text>Session Length: </Text>
                <Text3>{session.sessionLength}</Text3>
                </CardWrapper>
                
                <CardWrapper>
                <Text>Sparring Time: </Text>
                <Text3>{session.sparringTime}</Text3>
                </CardWrapper>
                </CardWrapper2>

                <CardWrapper3>
                <CardWrapper>
                <Text>Techniques: </Text>
                <Text3>{session.techniques}</Text3>
                </CardWrapper>

                <CardWrapper>
                  <Text>Date: </Text>
                  <Text3>{new Date(session.date).toLocaleDateString()}</Text3>
                </CardWrapper>
                </CardWrapper3>


                
                
              </Card>
            ))
          ) : (
            <Text2>You Currently Have No Sessions</Text2>
          )}
        </Wrapper>
      </Container>
    );
  }

export default Sessions
