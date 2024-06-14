import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import bjjImage from "../utils/images/jiujitsu.png";
import thaiImage from "../utils/images/muaythai.png";
import boxingImage from "../utils/images/boxing.png";
import wrestlingImage from "../utils/images/wrestling.png";

const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
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
}
`;

const Card = styled.div`
display: flex;
height: 100%;
width: 900px;
padding: 35px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column;
@media (max-width: 768px) {
  padding: 35px;
  height: 100%;
  width: 650px;
  border-radius: 20px;
}
@media (max-width: 450px) {
  padding: 20px;
  width: 320px;
  border-radius: 20px;
  height: 100%;
}
`;

const Text = styled.div`
  font-weight: 800;
  color: white;
  font-size: 60px;
  padding: 10px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    gap: 20px;
  }
`;

const Title = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.white};
  font-size: 50px;
  padding: 5px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    gap: 20px;
    font-size: 30px;
  }
`;


const Navlink = styled(NavLink)`
font-weight: 800;
color: ${({ isHovered, theme }) => (isHovered ? theme.red : theme.white)};
font-size: 40px;
gap: 20px;
padding: 10px 0px;
transition: all 0.3s ease;
cursor: pointer;
transition: all 1s slide-in;
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.red};
}
@media (max-width: 768px) {
  font-size: 26px;
}
@media (max-width: 450px) {
  font-size: 14px;
  gap: 10px;
}
`;

const Image = styled.img`
width: 215px;
cursor: pointer;
@media (max-width: 768px) {
  width: 150px;
}
@media (max-width: 450px) {
  width: 76px;
}
`;

const ImageWrap = styled.div`
justify-content: center;
`;

const Techniques = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Card>
        <Title>Technique Videos</Title>
        <Text>
          <Navlink to='/techniques/bjj' isHovered={isHovered}>BJJ</Navlink>
          <Navlink to='/techniques/muaythai' isHovered={isHovered1}>Muay Thai</Navlink>
          <Navlink to='/techniques/boxing' isHovered={isHovered2}>Boxing</Navlink>
          <Navlink to='/techniques/wrestling' isHovered={isHovered3}>Wrestling</Navlink>
        </Text>
        <ImageWrap>
        <Link to='/techniques/bjj'>  
          <Image src={bjjImage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
        </Link>
        <Link to='/techniques/muaythai'>  
        <Image src={thaiImage}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}/>
        </Link>
        <Link to='/techniques/boxing'>  
        <Image src={boxingImage}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}/>
        </Link>
        <Link to='/techniques/wrestling'>  
        <Image src={wrestlingImage}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}/>
        </Link>
        </ImageWrap>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Techniques
