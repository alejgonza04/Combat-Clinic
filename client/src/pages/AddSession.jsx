import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import bjjImage from "../utils/images/jiujitsu.png";
import thaiImage from "../utils/images/muaythai.png";
import boxingImage from "../utils/images/boxing.png";
import wrestlingImage from "../utils/images/wrestling.png";
import DatePicker from "react-datepicker"; 
import useClickedItem from "../components/useClickedItem.jsx";
import "react-datepicker/dist/react-datepicker.css";
import { useSession } from '../components/SessionContext.jsx';

const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
padding: 22px 0px;
align-items: flex-start;
overflow-y: scroll;
`;

const Card = styled.div`
height: auto;
width: 1000px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
@media (max-width: 768px) {
  width: 670px;
  height: auto;
  border-radius: 20px;
}
@media (max-width: 450px) {
  border-radius: 10px;
  width: 290px;
  height: auto;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
}
`;

const Button = styled.div`
height: 10px;
width: 600px;
padding: 30px;
display: flex; 
justify-content: center; 
align-items: center; 
border: 1px solid ${({ theme }) => theme.red};
border-radius: 20px;
cursor: pointer;
background: ${({ isHovered, theme }) => (isHovered ? theme.red :  theme.black )};
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
transition: background 0.3s ease;
@media (max-width: 768px) {
  border-radius: 10px;
  width: 580px;
  height: 10px;
  border-radius: 20px;
}
@media (max-width: 450px) {
  border-radius: 10px;
  width: 200px;
  height: 5px;
  border-radius: 20px;
}
`;

const ButtonContainer = styled.div`
font-weight: 800;
color: white;
padding: 30px;
font-size: 35px;
flex-direction: column;
align-items: center;
gap: 10px; 
display: flex;
`;

const ButtonText = styled.div`
font-weight: 800;
color: white;
font-size: 35px;
padding: 20px;
align-items: center;
justify-content: center;
gap: 10px; 
cursor: pointer;
display: flex;
@media (max-width: 768px) {
  font-size: 23px; 
  padding: 7px;
}
@media (max-width: 450px) {
  font-size: 20px;
}
`;

const CardContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
@media (max-width: 450px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

const CardContainer2 = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
gap: 185px;
padding: 10px;
flex-direction: column;
`;

const Text = styled.div`
font-weight: 800;
color: white;
font-size: 35px;
padding: 10px;
flex-direction: column;
align-items: center;
gap: 10px; 
display: flex;
@media (max-width: 768px) {
  font-size: 23px; 
}
@media (max-width: 450px) {
  font-size: 20px;
}
`;

const MobileText = styled.div`
font-weight: 800;
color: white;
font-size: 35px;
padding: 10px;
flex-direction: column;
align-items: center;
gap: 10px; 
display: flex;
@media (max-width: 768px) {
  font-size: 23px; 
}
@media (max-width: 450px) {
  font-size: 13px;
  flex-direction: row;
}
`;

const Text2 = styled.div`
font-weight: 800;
color: white;
font-size: 20px;
padding: 10px;
gap: 20px; 
display: flex;
@media (max-width: 768px) {
  font-size: 20px; 
}
@media (max-width: 450px) {
  font-size: 13px;
  flex-direction: row;  /* Set flex direction to row */
}
`;

const Text3 = styled.div`
font-weight: 800;
color: white;
font-size: 35px;
padding: 20px;
flex-direction: column;
align-items: center;
gap: 10px; 
display: flex;
@media (max-width: 768px) {
  font-size: 23px; 
  padding: 7px;
}
@media (max-width: 450px) {
  font-size: 20px;
}
`;

const TechLink = styled.div`
font-weight: 800;
color: ${({ isClicked, theme }) => (isClicked ? theme.red : theme.white)};
font-size: 30px; 
transition: all 0.3s ease;
cursor: pointer;
transition: all 1s slide-in;
text-decoration: none;
&:hover {
color: ${({ theme }) => theme.red};
}
@media (max-width: 768px) {
  font-size: 20px; 
}
@media (max-width: 450px) {
  font-size: 20px;
}
`;

const Image = styled.img`
width: 80px;
cursor: pointer;
display: flex;
transition: opacity 0.3s ease; // Smooth transition for the opacity effect
opacity: ${({ isClicked }) => (isClicked ? 0.3 : 1)}; 
&:hover {
  opacity: 0.3; // Set the desired opacity on hover
}
@media (max-width: 768px) {
  width: 60px;
}
@media (max-width: 450px) {
  width: 55px;
}
`;

const TextBox = styled.input`
width: 100%;
height: 100%; 
padding: 10px;
font-size: 18px;
border: 1px solid #ccc;
border-radius: 4px;
margin-top: 10px;
position: relative;
&::placeholder {
  position: absolute;
  top: 10px;
  left: 10px;
}
@media (max-width: 450px) {
  width: 77%;
  height: 50%; 
  padding: 10px;
  font-size: 13px;
}
`;

const TextBox2 = styled.input`
width: 50%;
height: 50%; 
padding: 10px;
font-size: 18px;
border: 1px solid #ccc;
border-radius: 4px;
margin-top: 10px;
&::placeholder {
  position: absolute;
  top: 10px; 
  left: 10px; 
}
@media (max-width: 450px) {
  width: 97%;
  height: 50%; 
  padding: 10px;
  font-size: 13px;
}
`;

const StyledDatePicker = styled(DatePicker)`
width: 200px; /* Adjust the width as needed */
height: 40px; /* Adjust the height as needed */
margin-top: 10px;
@media (max-width: 768px) {
  width: 200px;
  height: 40px;
}
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
`;


async function createSession(sessionData, token) {
  try {
    const response = await fetch('http://localhost:8080/addsession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ ...sessionData }), // Include the user's email in the request body
    });

    if (!response.ok) {
      throw new Error('Failed to add session');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Add session error:', error.message);
    throw error;
  }
}


const AddSession = () => {
    const [clickedLink, setClickedLink] = useState(null);
    const [clickedImage, setClickedImage] = useState(null);
    const [techTextBoxValue, techSetTextBoxValue] = useState("");
    const [timeTextBoxValue, timeSetTextBoxValue] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isHovered, setIsHovered] = useState(false);
    const [selectedItem, handleItemClick] = useClickedItem();
    const [item, setItem] = useState(new Map());
    console.log("Initial item:", item);
    const navigate = useNavigate();
    const { addSession } = useSession();


    const handleAddItem = async () => {
      if (clickedLink && clickedImage && techTextBoxValue && timeTextBoxValue && selectedDate) {
        // Combine all selected values into an object or array
        const sessionData = {
          sessionType: clickedImage,
          sessionLength: clickedLink,
          sparringTime: timeTextBoxValue + " min",
          techniques: techTextBoxValue,
          date: selectedDate.toISOString()
        };
          
          const token = localStorage.getItem('token');
          try {
            await createSession(sessionData, token); // Pass the token when creating a session
            addSession(sessionData);
            navigate("/sessions"); // Navigate to the sessions page
            console.log(token);
          } catch (error) {
            console.error("Error creating session:", error);
          }
       
      } else {
        console.log("Please fill in all fields before adding the session.");
      }
  
    };
    
    const allFieldsFilled = clickedLink && clickedImage && techTextBoxValue && timeTextBoxValue && selectedDate;

    const handleTimeChange = (e) => {
      const value = e.target.value;
      // Ensure the value is numeric
      if (/^\d*$/.test(value)) {
        timeSetTextBoxValue(value);
      }
    };
    
    
  return (
    <Container>
        <Card>
            <CardContainer>
            
            <Text>
                Session Type
            <MobileText>
                <Text2>
                <Image src={bjjImage} isClicked={clickedImage === "BJJ"} onClick={() => {setClickedImage("BJJ"); }}/>
                <Image src={thaiImage} isClicked={clickedImage === "Muay Thai"} onClick={() => {setClickedImage("Muay Thai"); }}/>
                </Text2>
                <Text2>
                <Image src={boxingImage} isClicked={clickedImage === "Boxing"} onClick={() => {setClickedImage("Boxing"); }}/>
                <Image src={wrestlingImage} isClicked={clickedImage === "Wrestling"} onClick={() => {setClickedImage("Wrestling");}}/>
                </Text2>
            </MobileText>
            </Text>
            <Text>
                Session Length
                <Text2>
                <TechLink isClicked={clickedLink === "1h"} onClick={() => {setClickedLink("1h")}}> 1h </TechLink>
                <TechLink isClicked={clickedLink === "2h"} onClick={() => {setClickedLink("2h")}}> 2h </TechLink>
                <TechLink isClicked={clickedLink === "3h"} onClick={() => {setClickedLink("3h")}}> 3h </TechLink>
                <TechLink isClicked={clickedLink === "4h"} onClick={() => {setClickedLink("4h")}}> 4h </TechLink>
                </Text2>

                <CardContainer2>
                <Text>
                    Sparring Time
                    <TextBox2 
                    type="text"
                    value={timeTextBoxValue}
                    onChange = {handleTimeChange}
                    placeholder="Min"
                    />
                </Text>
            </CardContainer2>
            </Text>
            <Text>
               Choose Techniques 
                <TextBox
                type="text"
                value={techTextBoxValue}
                onChange={(e) => techSetTextBoxValue(e.target.value)}
                placeholder="Enter Techniques Here"
                />

                <CardContainer2>
                <Text3> 
                    Date
                    <StyledDatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat = "MMMM d, yyyy"
                    />
                </Text3>
            </CardContainer2>
            </Text>
            </CardContainer>
            <ButtonContainer>
            <StyledLink to={allFieldsFilled ? '/' : '#'}>
            <Button 
              isHovered={isHovered} // Ensure the prop is passed correctly
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleAddItem}
            >
              <ButtonText>
                Add Session
              </ButtonText>
            </Button>
            </StyledLink>
            </ButtonContainer>
        </Card>
    </Container>
  )
}

export default AddSession



