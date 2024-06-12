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

const TechLink = styled.div`
font-weight: 800;
color: white;
font-size: 40px;
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

const Boxing = () => {
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
            Boxing Techniques:
            </Text>
            {!isVidClicked && (
              <>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/71nmi6nGcrY"); setIsVidClicked(true); }}>1. Jab</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/sK-6Ujp3KYY"); setIsVidClicked(true); }}>2. Cross</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/vlLmPtwSQlM"); setIsVidClicked(true); }}>3. Hook</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/eBxn21FtqPg"); setIsVidClicked(true); }}>4. Upper Cut</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/hNclexRmDsY"); setIsVidClicked(true); }}>5. Pivot</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/XIja1S9SXI4"); setIsVidClicked(true); }}>6. Rolling Punches</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/omXOTpDn7qY"); setIsVidClicked(true); }}>7. Footwork Exercises</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/05XgLoAKaVI"); setIsVidClicked(true); }}>8. Effective Combo Drils</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/mdVZBV_NrtY"); setIsVidClicked(true); }}>9. Counter Punching</TechLink>
            <TechLink onClick={() => {setIframeSrc("https://www.youtube.com/embed/xPnZ6q5WC9U"); setIsVidClicked(true); }}>10. Punching Ranges</TechLink>
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

export default Boxing
