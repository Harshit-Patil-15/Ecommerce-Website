import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`
const Title=styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`
const TopButton=styled.button`
   padding: 20px;
   font-weight: 600;
   cursor: pointer; 
   border: ${props=>props.type==="filled" && "none"};
   background-color:${props=>props.type==="filled" ? "black" :"transparent"} ;
   color: ${props=>props.type==="filled" && "white"};
`
const TopTexts=styled.div`
  ${mobile({display:"none"})}
`
const TopText=styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info=styled.div`
    flex: 3;
`
const Product=styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({flexDirection:"column"})}
`
const ProductDetails=styled.div`
   flex: 2;
   display: flex;
`
const Image=styled.img`
   width: 300px;
   ${mobile({width:"200px"})}
`
const Details=styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const ProductName=styled.span`
   
`
const ProductId=styled.span`
   
`
const ProductColor=styled.span`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color}
`
const ProductSize=styled.span`
   
`
const PriceDetails=styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`
const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary=styled.div`
   flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;
`
const SummaryTitle=styled.h1`
    font-weight: 200;
`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" &&"500"};
    font-size: ${props=>props.type==="total" &&"24px"};
`
const SummaryItemText=styled.span`
    
`
const SummaryItemPrice=styled.span`
    
`
const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"/>
                        <Details>
                            <ProductName><b>Product:</b>HRX CASUAL SHOES</ProductName> 
                            <ProductId><b>ID:</b>56585456583</ProductId> 
                            <ProductColor color="blue"/> 
                            <ProductSize><b>Size:</b>8</ProductSize> 
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice> 900rs</ProductPrice>
                    </PriceDetails>
                </Product>
                    <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        <Details>
                            <ProductName><b>Product:</b> BLACK T-SHIRT</ProductName> 
                            <ProductId><b>ID:</b>98564835</ProductId> 
                            <ProductColor color="black"/> 
                            <ProductSize><b>Size:</b>M</ProductSize> 
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice> 400rs</ProductPrice>
                    </PriceDetails>
                </Product>

            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice>1240rs</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>400rs</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>-400rs</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                <SummaryItemText >Total</SummaryItemText>
                <SummaryItemPrice>1240rs</SummaryItemPrice>
                </SummaryItem>

                <Button>CHECKOUT NOW</Button>
            </Summary>
            
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
