import React, { useState } from 'react';
import styled from 'styled-components';
const Container=styled.div`
background-color: #FFFFF0;
height:40vw;
padding-top: 110px;

`
const Form=styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: light-gray;
`
const Input=styled.input`
justify-content: center;
align-items: center;
text-align: center;
width: 490px;
font-size: 22px;
`
const Title=styled.h1`
justify-content: center;
font-size: 35px;
align-items: center;
color: gray;
text-align: center;
font-family: sans-serif;
`
const Button=styled.button`
flex-direction: column;
margin-top: 20px;
width: 80px;
height: 35px;
color: white;
justify-content: center;
align-items: center;
text-align: center;
font-size: 20px;
background-color: teal;
`
const Message=styled.div`
color:green;
font-size: 28px;
margin-top: 19px;
letter-spacing: 1.1px;
font-family: pacifico;
`
const AlertMessage=styled.h1`
`
const Questions = () => {
  const [message,setMessage]=useState(false)
const [input1,setInput1]=useState('');
const [input2,setInput2]=useState('');
const [input3,setInput3]=useState('');
const [showAlert, setShowAlert] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();
  // Check if any input field is empty
  if (!input1.trim() || !input2.trim() || !input3.trim()) {
    setShowAlert(true);
    return;
  }
  setMessage(true);
  setShowAlert(false);
  setInput1('');
  setInput2('');
  setInput3('');
  };
  return(
   
    <Container>
      < Form onSubmit={handleSubmit}>
        <Title>Feel free to share what you think about our little kanha</Title>
        <h1>  What quality of krishna attracted you more?</h1>
        <Input value={input1} onChange={(e) => setInput1(e.target.value)}/>
        <h2>Which is your favorite krishna vajan?</h2>
        <Input value={input2} onChange={(e) => setInput2(e.target.value)}/>
        <h3>Which form of krishna is your favorite?</h3>
        <Input value={input3} onChange={(e) => setInput3(e.target.value)}/>
        <Button>
          Submit
        </Button>
        {showAlert && <AlertMessage>Please fill in all input fields.</AlertMessage>}
       
        {message && <Message> Thankyou so much for your visit on krishna's website and responses </Message>}
      </Form>
      </Container>
  )
};

export default Questions;
