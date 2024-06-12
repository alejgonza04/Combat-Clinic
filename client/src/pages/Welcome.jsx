import React, { useState } from "react";
import styled from "styled-components";
import welcomeBackground from "../utils/images/welcomebackground.jpg";
import round from "../utils/images/round.png";
import progress from "../utils/images/progressB.png";
import progress2 from "../utils/images/progress.png";
import session from "../utils/images/new-pageB.png";
import video from "../utils/images/video.png";
import videoW from "../utils/images/videoW.png";
import addsession from "../utils/images/new-page.png";


const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
overflow-y: scroll;
overflow-x: hidden;
width: 100%;
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const CardWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 140px 20px; // Add side padding for smaller screens
gap: 30px;
box-sizing: border-box;
`;

const CardWrapper2 = styled.div`
flex-direction: column;
align-items: center;
display: flex;
padding: 10px;
`;

const FeaturesCardWrapper = styled.div`
align-items: center;
flex-wrap: wrap;
display: flex;
gap: 60px;
padding: 30px 20px; // Add side padding for smaller screens
flex-direction: column;
box-sizing: border-box;
`;

const Card = styled.div`
height: 200px;
width: 100%;
padding: 24px;
align-items: center;
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.60));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column;
@media (max-width: 830px) {
  height: 100px;
}
`;

const Button = styled.div`
height: 10px;
width: 100%;
max-width: 300px;
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${({ theme }) => theme.red};
border-radius: 20px;
cursor: pointer;
background: ${({ isHovered, theme }) => (isHovered ? theme.red : theme.black)};
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
transition: background 0.3s ease;
@media (max-width: 830px) {
  border-radius: 20px;
  width: 200px;
  height: 3px;
}
`;

const ButtonText = styled.div`
font-weight: 500;
color: white;
font-size: 25px;
@media (max-width: 830px) {
  font-size: 20px;
}
`;

const OuterCard2 = styled.div`
height: auto;
width: 100%;
border-radius: 20px;
background-color: ${({ theme }) => theme.red};
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
@media (max-width: 1000px) {
  height: auto;
}
`;

const InnerCard2 = styled.div`
height: 100%;
width: 100%;
border-radius: 20px;
background: linear-gradient(to bottom, ${({ theme }) => theme.black}, ${({ theme }) => theme.red});
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
padding: 25px;
justify-content: center;
@media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
}
`;

const Card3 = styled.div`
height: auto;
width: 100%;
max-width: 100vw;
padding: 50px;
box-sizing: border-box;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 768px) {
  height: 1400px;
}
`;

const FeaturesCard = styled.div`
height: auto;
width: 100%;
max-width: 700px;
padding: 24px;
border: 5px solid ${({ theme }) => theme.red};
border-radius: 30px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;  
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
@media (max-width: 768px) {
  border-radius: 20px;
  width: 250px;
  height: 250px;
}
`;

const FeaturesText = styled.div`
font-weight: 800;
color: ${({ theme }) => theme.white};
font-size: 60px;
@media (max-width: 768px) {
  font-size: 40px;
}
`;

const Text = styled.div`
font-weight: 500;
color: white;
font-size: 40px;
text-align: center;
@media (max-width: 830px) {
  font-size: 16px;
}
`;

const Text2 = styled.div`
font-weight: 800;
color: ${({ theme }) => theme.red};
font-size: 60px;
text-align: center;
@media (max-width: 830px) {
  font-size: 40px;
}
`;

const Text3 = styled.div`
font-weight: 500;
color: white;
padding: 35px;
text-align: center;
font-size: 25px;
@media (max-width: 768px) {
  font-size: 19px;
  padding: 30px;
  text-align: center;
}
`;

const FeaturesCardText = styled.div`
font-weight: 500;
color:  ${({ theme }) => theme.red};
padding: 20px;
text-align: center;
font-size: 25px;
@media (max-width: 768px) {
  font-size: 18px;
  padding: 20px;
}
`;

const FeaturesCardText2 = styled.div`
font-weight: 500;
color: white;
font-size: 20px;
text-align: center;
@media (max-width: 768px) {
  font-size: 14px;
  padding: 3px;
}
`;

const Image = styled.div` 
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-image: url(${welcomeBackground});
background-size: cover;
background-position: center;
z-index: -1;
`;

const Icon = styled.img` 
width: 200px;
@media (max-width: 1000px) {
  width: 150px;
}
`;

const Icon2 = styled.img` 
width: 75px;
position: absolute;
top: 50%; // centers the icon2
left: 50%;
transform: translate(-50%, -50%);
@media (max-width: 1000px) {
  width: 55px;
}
`;

const Icon3 = styled.img` 
width: 65px;
position: absolute;
top: 50%; // centers the icon2
left: 50%;
transform: translate(-50%, -50%);
@media (max-width: 1000px) {
  width: 55px;
}
`;

const FeaturesIcon = styled.img` 
width: 50px;
`;

const IconContainer = styled.div`
position: relative;
display: inline-block;
`;

const Welcome = ({ setIsWelcomePageOpen }) => { //pass in setIsLoginRequested to welcome
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container>
        <Wrapper>
          <Image />
            <CardWrapper>
            <Card>
              <Text>Do you love training Martial Arts? Then,</Text>
              <Text2>Combat Clinic</Text2>
              <Text>is your go to</Text>
            </Card>
          
            <Button
              isHovered={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsWelcomePageOpen(false)}
            >
                <ButtonText>
                  Go to Login Page
                </ButtonText>
            </Button>
            </CardWrapper>
            <OuterCard2>
              <InnerCard2>
                <CardWrapper2>
                <Text3>
                  Add Your Training Sessions
                </Text3>
                <IconContainer>
                  <Icon3 src={session}/>
                  <Icon src={round}/>
                </IconContainer>
                </CardWrapper2>

                <CardWrapper2>
                <Text3>
                  Track Your Progress
                </Text3>
                <IconContainer>
                  <Icon2 src={progress}/>
                  <Icon src={round}/>
                </IconContainer>
                </CardWrapper2>

                <CardWrapper2>
                <Text3>
                  Watch Technique Videos
                </Text3>
                <IconContainer>
                  <Icon2 src={video}/>
                  <Icon src={round}/>
                </IconContainer>
                </CardWrapper2>
              </InnerCard2>
            </OuterCard2>
            
            <Card3>
              <FeaturesText>Features</FeaturesText>
              <FeaturesCardWrapper>
                <FeaturesCard>
                  <FeaturesIcon src={addsession}/>
                  <FeaturesCardText>Add Training Sessions</FeaturesCardText>
                  <FeaturesCardText2>Save your training sessions by adding data such as session type, 
                    session length, techniques, sparring time, and date.
                  </FeaturesCardText2>
                </FeaturesCard>

                <FeaturesCard>
                    <FeaturesIcon src={progress2}/>
                    <FeaturesCardText>Progress Tracking</FeaturesCardText>
                    <FeaturesCardText2>Access real-time graph analytics on training hours 
                      and your martial arts training distribution. 
                    </FeaturesCardText2>
                </FeaturesCard>
                
                <FeaturesCard>
                    <FeaturesIcon src={videoW}/>
                    <FeaturesCardText>Watch In-Depth Videos</FeaturesCardText>
                    <FeaturesCardText2>Click and view a multitude of technique breakdown videos 
                      from disciplines such as BJJ, Muay Thai, Boxing, and Wrestling.</FeaturesCardText2>
                </FeaturesCard>
              </FeaturesCardWrapper>
            </Card3>
            
        </Wrapper>
    </Container>
  )
}

export default Welcome
