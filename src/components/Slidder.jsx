import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container =styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    ${mobile({display :"none"})}
`
const Arrow =styled.div`
    width: 50px;
    background-color: #e3d3d3;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction==="left" && "10px"};
    right: ${props=> props.direction==="right" && "10px"};
  margin: auto;
 cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper =styled.div`
height: 100%;
display: flex;
width: 300vw;
transform: translateX(${props=>props.slideIndex * -100}vw);
transition: all 1.5s ease;
`
const Slide =styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
background-color: #${props=> props.bg};
`
const ImageContainer =styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`
const Image =styled.img`
height: 80%;
`

const InfoContainer =styled.div`
flex: 1;
padding: 50px;
`
const Title =styled.h1`
font-size: 70px;
`
const Desc =styled.div`
font-size: 20px;
font-weight: 500;
margin: 50px 0;
letter-spacing: 3px;
`
const Button =styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`
const Slidder = () => {
const [slideIndex,setslideIndex] = useState(0);

  const handleClick =(direction)=>{
   if(direction==="left"){
    setslideIndex(slideIndex>0?slideIndex-1:2);
   }else{
    setslideIndex(slideIndex<2?slideIndex+1:0);
   }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
      <ArrowLeft/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items)=>(
      <Slide bg={items.bg} key={sliderItems.id}>
        <ImageContainer>
        <Image src={items.img} alt='error'  />
        </ImageContainer>
        <InfoContainer>
                <Title>{items.title}</Title> 
                <Desc>{items.desc}</Desc> 
                <Button>SHOW NOW</Button>  
        </InfoContainer>
      </Slide>
      ))}
      </Wrapper>
      <Arrow  direction="right" onClick={()=> handleClick("right")}>
      <ArrowRight/>
      </Arrow>
    </Container>
  )
}

export default Slidder
