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
flex-direction: column;
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
font-size: 60px;
padding: 10px;
text-align: center;
@media (max-width: 450px) {
  font-size: 35px;
}
`;

const TechLink = styled.div` //styled.a is what allows you to open to a redirected link
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

const Bjj = () => {
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
            BJJ Techniques:
            </Text>
            {!isVidClicked && (
              <>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/KH6qCjgLXJA"); setIsVidClicked(true); }}>1. Rear-Naked Choke</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/KrZn5eJ-j4Q"); setIsVidClicked(true); }}>2. Guillotine Choke</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/vbBQKkq9lLA"); setIsVidClicked(true); }}>3. Armbar</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/9pjdpFCr4UI"); setIsVidClicked(true);}}>4. Triangle Choke</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/mVkKOPNGvjA"); setIsVidClicked(true);}}>5. Kimura</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/MWMNq8DGHyo"); setIsVidClicked(true);}}>6. Darce Choke</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/0_3YYrWEGoU"); setIsVidClicked(true);}}>7. Buggy Choke</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/PEhfJnm-gd4"); setIsVidClicked(true);}}>8. Shoulder Crunch</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/gA3cF4U-0A4"); setIsVidClicked(true);}}>9. No Gi Sweeps</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/dVbD9SpAjAw"); setIsVidClicked(true);}}>10. No Gi Throws</TechLink>
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

export default Bjj
