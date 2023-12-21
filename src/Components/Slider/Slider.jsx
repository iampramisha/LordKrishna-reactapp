import styled from "styled-components";
import { sliderItems } from "../../data";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import React, { useState } from 'react';
import { ArrowRightOutlined } from "@mui/icons-material";

const Container = styled.div`
width: 99vw;
display: flex;
position: relative;
overflow: hidden;

`;
const Arrow = styled.div`

width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity:0.5;
z-index:99;
`;
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props)=>props.slideIndex*-100}vw);
`;
const ImgContainer = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex:1;
flex-direction: column;
`;
const Image = styled.img`
width: 100vw;
height: 1000px;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props)=>props.bg};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
