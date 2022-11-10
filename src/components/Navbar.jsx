
import { Badge } from '@material-ui/core'
import { Search, ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height :60px;
  ${mobile({height :"50px"})}
`
const Wrapper =styled.div`
padding : 10px 20px;
display :flex;
justify-content: space-between;
align-items: center;
${mobile({padding :"10px 0px"})}
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display :"none"})}
`
const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
align-items: center;
padding: 5px;
margin-left: 25px;
${mobile({marginLeft: "10px"})}
`
const Input=styled.input`
    border: none;
    ${mobile({width :"50px"})}
`
const Center=styled.div`
flex: 1;
text-align : center;
`
const Logo=styled.h1`
font-weight: bold;
${mobile({fontSize :"19px",paddingLeft:"10px"})}
`
const Right=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent :"center",flex:2,marginRight:"10px"})}
`
const MenuItems=styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize :"11px",marginLeft:"8px"})}
`
const LinkRegister=styled.a`
    
`
const LinkLogin=styled.a`
    
`
const LinkCart=styled.a`
    
`

const Navbar = () => {
  // const Navigate=useNavigate();
  return (
    <Container>
     <Wrapper>
        <Left>
            <Language>
                EN
                </Language>
                <SearchContainer>
                   <Input placeholder='search'/>
                    <Search style={{color:"grey", fontSize:16 }}/>
                </SearchContainer>
         
        </Left>
        <Center>
            <Logo>FASHAHOLIC.</Logo>
        </Center>
        <Right>
        <Link to={`/register`}> <MenuItems>REGISTER</MenuItems></Link>
        <Link to={`/login`}> <MenuItems>SIGN IN</MenuItems></Link>
        <Link to={`/cart`}>
            <MenuItems>
            <Badge color="secondary" badgeContent={1}>
        
            <ShoppingCart/>
          
            </Badge>
            </MenuItems>
            </Link>
        </Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar
