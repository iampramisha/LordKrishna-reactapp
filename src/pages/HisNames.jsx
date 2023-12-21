import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
background-color:#FFEBEB;
padding-bottom:20px;
padding-top: 70px;
`
const Desc=styled.div`
width: 60vw;
font-family: arial;
font-size: 23px;
padding-top: 30px;
margin-top: 5px;
margin-left: 30px;
`
const Names=styled.div`
font-size: 25px;
margin: 30px;
font-weight: 500;
color: green;
`
const Meaning=styled.div`
margin-left: 30px;
font-size: 25px;
width: 70vw;
`

const HisNames = () => {
  return (
    <Container>
      <Desc>
        
      The 15 names of Sri Krishna, commonly referred to as the "Panchadasha Mukha" or "15 Mukha," are found in various sacred texts, including the Vishnu Sahasranama and other Puranas. Here are the 15 names along with their meanings:
      
      </Desc>
      <Names>

      Keshava (केशव):
      </Names>
      <Meaning>

      Meaning: The one who has long, beautiful hair.<br/>
Significance: It highlights the physical beauty of Krishna.
      </Meaning>
      
      <Names>
      Narayana (नारायण):
      </Names>
      <Meaning>
      Meaning: The refuge of all beings.<br/>
Significance: Narayana signifies Krishna's role as the ultimate destination and protector of all living entities.
      </Meaning>
      
      <Names>
      Madhava (माधव):
      </Names>
      <Meaning>
      Meaning: Consort of the goddess of fortune, Lakshmi.<br/>
Significance: This name emphasizes Krishna's association with wealth and prosperity.
      </Meaning>
      
      <Names>

      Govinda (गोविन्द):
      </Names>
      <Meaning>
      Meaning: The one who gives joy to the cows.<br/>
Significance: Govinda highlights Krishna's role as the protector and nurturer of all beings.
      </Meaning>
      <Names>
      Madhusudana (मधुसूदन):
      </Names>
      <Meaning>
        
Meaning: The Slayer of the demon Madhu.<br/>
Significance: It signifies Krishna's victory over evil forces.
      </Meaning>
      
      <Names>
      Trivikrama (त्रिविक्रम):
      </Names>
      <Meaning>
        
Meaning: Conqueror of the three worlds.<br/>
Significance: Trivikrama highlights Krishna's cosmic and majestic form.
      </Meaning>
      
    </Container>
  )
}

export default HisNames