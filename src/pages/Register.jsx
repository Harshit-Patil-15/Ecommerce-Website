import { useState } from "react"
import styled from "styled-components"
import { mobile } from "../responsive"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container=styled.div`
    width: 100vw;
    height: 100vh;
 /* background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)) url("https://images.pexels.com/photos/3348330/pexels-photo-3348330.jpeg?auto=compress&cs=tinysrgb&w=600") center; */
 background:url("/Images/img5.jpg") center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper=styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width:"75%"})}
`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title=styled.h1`
    font-size: 14px;
    font-weight: 300;
`
const Input=styled.input`
   flex :1;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
`
const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
`
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
  //   login(dispatch, { username, password });
  console.log("all good",username,email,password);
  const body={
      "username" :username,
      "email"     :email,
      "password"  :password,
  }
  const response = await axios.post('http://localhost:5000/api/auth/register', body);
  console.log(response);
  // if(response.status===200 && response.data && response.data.accessToken){
  //     navigate('/');
  // }
  if(response.status===201){
    navigate('/login');
}
  };
  return (
    <Container>
      <Wrapper>
        <Title> CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="confirm password"/>
            
            <Agreement>By creating sn account ,i consent to the processing of my personal data in accordence with thr <b>PRIVACY POLICY</b></Agreement>
            <Button onClick={handleClick} >CREATE</Button>
            </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
