import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
background-color: #D3D3D3;
align-items: center;
text-align: center;
justify-content: center;
width: 99vw;
height: 380vh;
position: relative;
overflow: hidden;
`
const Govardhan=styled.h1`
font-size: 27px;
font-family: sans-serif;
color: brown;
align-items: center;
text-align: center;
margin-left: 30px;
width: 80vw;
margin-top: 100px;
`
const Rasa=styled.h2`
font-size:26px;

align-items: center;
text-align: center;
margin-left: 30px;
width: 80vw;
color:green;
font-family: sans-serif;
margin-top: 55px;
`
const Damodar=styled.h3`
font-size:35px;
color:purple;

align-items: center;
text-align: center;
margin-left: 30px;
width: 80vw;
font-family: sans-serif;
margin-top: 55px;
`
const Kaliya=styled.h4`
font-size:27px;
color:blue;
font-family: sans-serif;

align-items: center;
text-align: center;
margin-left: 30px;
width: 80vw;
margin-top: 55px;
`
const GOVImg=styled.image`
`
const RasaImg=styled.image`
`
const DamoImg=styled.image`
`
const KaliyaImg=styled.image`
`
const Govtext=styled.h5`
right: 50px;
`
const DamoText=styled.h6`
`
const Rasatext= styled.p`
font-size: 27px;
`
const KaliyaText=styled.p`

`
const Title=styled.div`
font-weight: 700;
font-size: 30px;
color: black;
margin-top: 160px;
margin-left: 450px;
background-color: green;
height: 80px;
padding:  20px 50px;
justify-content: center;
align-items: center;
text-align: center;
width: 480px;
border-radius: 40%;
opacity: 0.64;
`
const Leelas = () => {
  return (
   <Container>
    <Title> SOME DIVINE LEELAS OF SRI KRISHNA</Title>
    <Govardhan>
      <Govtext>
    Govardhan Lila:

  In this enchanting lila, Lord Krishna lifts the Govardhan Hill on His little finger to protect the residents of Vrindavan from the wrath of Lord Indra's rainstorm. Krishna demonstrates the power of faith and devotion, teaching that worshiping the natural environment and cows is more important than traditional rituals.
   </Govtext>
    </Govardhan>
    <GOVImg>
      <img src='https://th.bing.com/th/id/R.4260cfe1451a3d7bc44c3dc9775e0b5b?rik=GFa%2f4xRh4MIlYw&riu=http%3a%2f%2fwww.dnaofhinduism.com%2fuploads%2f7%2f1%2f4%2f2%2f71428171%2fgoverdhan_orig.jpg&ehk=YeBnnbjobNedZqnMdcABp5XCTvxACFrHL95f1nxCjKw%3d&risl=&pid=ImgRaw&r=0' alt='gov' style={{width: '50vw', height:'400px'}}/>
    </GOVImg>
    <Rasa>
    <Rasatext>
Rasa Lila:
The Rasa Lila is a sublime dance performed by Krishna with the Gopis (cowherd girls) in the moonlit night of Vrindavan. It symbolizes the soul's longing for union with the divine. Krishna multiplies Himself to dance simultaneously with each Gopi, emphasizing the omnipresence of the Supreme.
</Rasatext>
    </Rasa>
    <RasaImg>
<img src='https://th.bing.com/th/id/R.c7e473c09593670b50300fab1d0009d7?rik=kZbIe2Pv3b0l6Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lkQpB1yfv_k%2fUhhezBcQfWI%2fAAAAAAAANfs%2fa6NLdQ-jVvA%2fs1600%2fRasa%2bLila.jpg&ehk=%2faFQksPi%2fFB1Ir3yRIrm3Tm6aTPcNTs8jz6568qHvjA%3d&risl=&pid=ImgRaw&r=0'alt='rasa' style={{width:'50vw',height:'400px'}}/>
    </RasaImg>
    <Damodar>
      <DamoText>
Damodara Lila:
In the Damodara Lila, Mother Yashoda tries to bind baby Krishna with a rope, but the rope falls short. As Krishna's devotee ties the knot, the Lord reveals His divine form, illustrating that He can be bound only by the love of His devotees. This lila teaches the concept of surrender and devotion.
</DamoText>
</Damodar>
    <DamoImg>
<img src='https://s-media-cache-ak0.pinimg.com/736x/dc/e8/c7/dce8c7e7ead728b48d30ecee0d10f03f.jpg'alt='damo' style={{width:'50vw',height:'400px'}}/>
    </DamoImg>
    <Kaliya>
      <KaliyaText>
Kaliya Daman Lila:
Krishna subdues the poisonous serpent Kaliya, who had polluted the Yamuna River. After a fierce battle, Krishna dances on the serpent's many hoods, teaching that the divine has the power to conquer even the deadliest of evils. This lila emphasizes the importance of overcoming negativity through righteous action and divine grace.
</KaliyaText>
    </Kaliya>
    <KaliyaImg>
<img src='https://i.pinimg.com/originals/8d/64/0c/8d640c421b1657e3f6161c4f77654334.jpg' alt='kaliya' style={{width:'50vw',height:'400px'}}/>
    </KaliyaImg>
 </Container>
  )
}

export default Leelas