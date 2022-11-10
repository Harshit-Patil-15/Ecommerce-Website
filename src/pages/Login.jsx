import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { login } from "../redux/apiCalls";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container=styled.div`
    width: 100vw;
    height: 100vh;
 /* background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)) url("https://images.pexels.com/photos/3348330/pexels-photo-3348330.jpeg?auto=compress&cs=tinysrgb&w=600") center; */
 background:url("/Images/img6.jpg") center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper=styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width:"75%"})}
`
const Form=styled.form`
    display: flex;
    flex-direction: column;
`
const Title=styled.h1`
    font-size: 14px;
    font-weight: 300;
`
const Input=styled.input`
   flex :1;
   min-width: 40%;
   margin:10px 0px;
   padding: 10px;
`
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    margin-bottom: 10px;
`
const Link =styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Error = styled.span`
  color: red;
`;
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const { isFetching, error } = useSelector((state) => state.user);
  
    const handleClick = async (e) => {
      e.preventDefault();
    //   login(dispatch, { username, password });
    console.log("all good",username,password);
    const body={
        "user_name" :username,
        "password"  :password
    }
    const response = await axios.post('http://localhost:5000/api/auth/login', body);
    console.log(response);
    if(response.status===200 && response.data && response.data.accessToken){
        navigate('/');
    }
    };
  return (
    
    <Container>
    <Wrapper>
      <Title>SIGN IN </Title>
          <Form>
              <Input placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
              <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={handleClick} >LOG IN</Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
