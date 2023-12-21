import { MenuOutlined } from '@mui/icons-material';
import React, { useState,useContext } from 'react'
import styled from 'styled-components';
import Menu from './Menu/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';


const ThemeContext = React.createContext();
const Container=styled.div`
background-color: ${(props) => props.theme.background};
height: 90px;
display: flex;
width: 100vw;
top: 0;
align-items: center;
position: fixed;
z-index: 99;
`
const Title=styled.h1`
font-family: pacifico;
font-size: 30px;
color: ${(props) => props.theme.textColor};
justify-content: center;
display: flex;
flex: 10;
font-weight: 40;
letter-spacing: 2.9px;
margin-left: 410px;

`
const MenuContainer=styled.div`
margin-left: 80px;
`
const Toggle=styled.div`
margin-left: 90px;
`
const Icons=styled.div`
flex: 1;
width: 25vw;
display: flex;
flex-direction: row;
align-items: center;
right: 70px;
justify-content: space-around;
margin-right: 30px;
`

const Navbar = () => {
  
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggleMoon = () => {
    setIsNightMode(!isNightMode);
  };
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const selectedTheme = isNightMode ? theme.dark : theme.light;
  return (
    <ThemeProvider theme={selectedTheme}>
    <Container>
        <Title>
Krishna: The Divine Friend
        </Title>
        <Icons>
        <Toggle>
      <ModeNightIcon
        onClick={handleToggleMoon}
        style={{
          transition: 'transform ease 0.5s',
          transform: isNightMode ? 'rotate(45deg)' : 'rotate(0deg)', // Adjust the rotation angle as needed
          color: isNightMode ? 'white' : 'black', // Change the color based on day/night mode
        }}
      />
    </Toggle>
       <MenuContainer>
       {isMenuOpen ? (
                       <CloseIcon onClick={handleToggleMenu} style={{ transition: 'transform ease 0.5s', color: isNightMode ? 'white' : 'black'}} />
                       )  : (
          <MenuOutlined onClick={handleToggleMenu}style={{ transition: 'transform ease 0.5s' ,color: isNightMode ? 'white' : 'black' }} />
        )}
        <Menu isOpen={isMenuOpen}/>
       </MenuContainer>
       </Icons>
    </Container>
    </ThemeProvider>
  )
}

export default Navbar