import React, {useState} from 'react';
import {
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    Alert,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import loginIcon from "../Assets/loginUser.svg";
import  './Login.css'
import axios from "axios";
import { Button ,Form} from 'semantic-ui-react'

const Login = (props) => {


const [email, setEmail] = useState("") ; 
const [password, setPassword] = useState("") ; 
const [isLoggedIn, setIsLoggedIn] = useState(false) ; 
const [error, setError] = useState(false)

const submit = (event) => {
    if (!email) {
        setError("Error: Email can't be empty.");
        return;
      }
  
    if (!password) {
        setError( "Error: Password can't be empty.");
        return;
    }
    axios.post(
      `https://localhost:44361/auth/login`,
      { email: email, 
        password: password },{
          withCredentials: true,
      }
    )
    .then((response) => {
      if (response.data) {
        setIsLoggedIn( true);
        setError(false);
        props.handleLogin();

      }
    })
    .catch((error) => {

        setError(error.response.data.message);
    });

}
return(   
    <Container className="containerLoginDoc" fluid>
    {error && <Alert color="danger">{error}</Alert>}
    {isLoggedIn && <Redirect to="/profile" />}
    <Row>
      <Col xs={12} sm={6}>
        <img src={loginIcon} alt = "" />
      </Col>
      <Col xs={12} sm={6} className="formColumnLogin">
          
        <Form  onSubmit={submit}
              data-test="loginForm">
          <h3>Login</h3>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              data-test="usernameInput"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              id="usernameInput"
              placeholder="Enter email here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              data-test="passwordInput"
              value={password}
              onChange={e=> setPassword(e.target.value)}
              name="password"
              id="passwordInput"
              placeholder="Enter password here"
            />
          </FormGroup>
          <FormGroup className="loginBtn">
            <Button 
              data-test="loginButton"
              type="submit"
              size="lg" color="primary" block>
              Login
            </Button>
          </FormGroup>
        </Form>
        <Container fluid className="linksContainer">
          <Row>
            <Link to="/register">
              Don't have an account? Register here
            </Link>
          </Row>
          <Row>
            <Link to="/register">Forgot password?</Link>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)
};
export default Login;
