import { Facebook, Instagram, LinkedIn, Mail, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container =styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`
const Left =styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo =styled.h1`

`
const Desc =styled.p`
margin: 20px 0px;
`
const SocialContainer =styled.div`
display: flex;
`
const SocialIcon =styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;

background-color: ${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`
const Center =styled.div`
flex: 1;
padding: 20px;
${mobile({display:"none"})}
`
const Title =styled.h3`
margin-bottom: 30px;
`
const List =styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem =styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right =styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:"#fbeaea"})}
`
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
`
const Payment=styled.img`
    width: 80%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Fashaholic.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim praesentium maxime nesciunt, explicabo esse eos totam architecto consequuntur, iusto dolores impedit pariatur similique. Itaque provident laborum odit! Quibusdam, temporibus.
            </Desc>
            <SocialContainer>
                <SocialIcon color="darkblue">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="blue">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="red">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="darkblue">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Room style={{marginRight:"10px"}}/>  xyz road, sector-2,Airoli.
            </ContactItem>
            <ContactItem>
             <Phone style={{marginRight:"10px"}}/>  9090909090
            </ContactItem>
            <ContactItem>
             <Mail style={{marginRight:"10px"}}/> contact@fashaholic.com
            </ContactItem>
            <Payment src="https://tse2.mm.bing.net/th?id=OIP.5c3ciZhdxDnRdjaLN0ob-gHaBy&pid=Api&P=0"/>
        </Right>
    </Container>
  )
}

export default Footer
