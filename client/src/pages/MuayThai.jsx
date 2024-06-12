import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

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
flex-direction: column-reverse;
gap: 22px;
@media (max-width: 600px){
    gap: 12px;
    padding: 0px 0px 150px 0px;
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
  border-radius: 10px;
  width: 650px;
  border-radius: 20px;
}
@media (max-width: 450px) {
  width: 320px;
  height: auto;
}
`;

const Text = styled.div`
font-weight: 800;
color: white;
font-size: 50px;
padding: 10px;
text-align: center;
@media (max-width: 450px) {
  font-size: 35px;
}
`;


const TechLink = styled.div`
font-weight: 800;
color: white;
font-size: ${props => props.isVidClicked ? '70px' : '40px'}; //if statement for isvidclicked 
padding: 10px 0px;
transition: all 0.3s ease;
cursor: pointer;
transition: all 1s slide-in;
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.red};
}
@media (max-width: 450px) {
  font-size: 20px;
}
`;

const IframeContainer = styled.div`
width: 100%;
max-width: 700px;
height: 400px;
margin-top: 20px;
border: 1px solid #000;
border-radius: 10px;
overflow: hidden;
@media (max-width: 450px) {
  height: 300px;
}
`;

const Iframe = styled.iframe`
width: 100%;
height: 100%;
border: none;
`;


const MuayThai = () => {
  const [iframeSrc, setIframeSrc] = useState("");
  const [isVidClicked, setIsVidClicked] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/techniques');
  }

  return (
    <Container>
      <Wrapper>
      <Card>
          <Text>
            Muay Thai Techniques:
            </Text>
          {!isVidClicked && (
            <>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/UkdgrFXmbLo"); setIsVidClicked(true); }}>1. Teep</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/pqjn1AgmuEQ"); setIsVidClicked(true); }}>2. Roundhouse</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/Hl4xhjTzT08"); setIsVidClicked(true);}}>3. Switch Kick</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/s3XTFR1ihBY"); setIsVidClicked(true);}}>4. Knee</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/fdsiCeQjHUo"); setIsVidClicked(true);}}>5. Elbow</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/XavDyo61cBo"); setIsVidClicked(true);}}>6. Clinch</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/Ty5eavmzG0U"); setIsVidClicked(true);}}>7. Sweep</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/qdSQSA0-0R4"); setIsVidClicked(true);}}>8. Counters</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/UqBvFAukcAQ"); setIsVidClicked(true);}}>9. Head Movement Drills</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/Gvb_w6xd3Yg"); setIsVidClicked(true);}}>10. Live Sparring Drills</TechLink>
            <TechLink onClick={handleButtonClick}> ← </TechLink>
            </>
          )}
          {iframeSrc && isVidClicked && (
            <>
            <IframeContainer>
              <Iframe src={iframeSrc} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </IframeContainer>
            <TechLink onClick={() => {setIsVidClicked(false)}}>
                ←
            </TechLink>
            </>
          )}
        </Card>
      </Wrapper>
    </Container>
  )
}

export default MuayThai

