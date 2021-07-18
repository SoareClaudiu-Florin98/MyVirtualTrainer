import React,{Component} from 'react';
import  './Register.css' ; 
import {
    Container,
    Row,
    Col,
    Alert,
} from "reactstrap";
import registerIcon from "../Assets/register.svg";
import axios from "axios";

const regExp = RegExp(
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
)
const regExpPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*[#^\s-])[A-Za-z\d@$!%*?&#^].{8,30}$/) ; 
const regExpName = RegExp(/^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)(?!.*[#^\s-]){2,30}/) ; 

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword :'',
            error: false,
            success: false,
            isError: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    }


    onSubmit = e => {
        e.preventDefault();


        if (formValid(this.state) && this.state.confirmPassword === this.state.password) {
            console.log("Sunt si valid")
            axios
            .post("https://localhost:44361/auth/register", {
                
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
                
            })
            .then(response => {
                if (response) {
                    this.setState({
                        error:false,
                        success:true
                    });
                }
            })
            .catch(error => {
                this.setState({
                    success:false,
                    error: error.response.data.message     
                });
            });

        


        } else {
            this.setState({isError: {
                name: '',
                email: '',
                password: '',
                confirmPassword: "Error: Passwords don t match"
            }})
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "name":
                isError.name =
                   !regExpName.test(value) ? "Error: Invalid name." : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Error: Email address is invalid";
                break;
            case "password":
                isError.password = regExpPassword.test(value)?"": "Error: Password must contain a capital letter, a special character (%,!,@) and a number! Minimum 8 characters";
               
                break;
            case "confirmPassword":
                isError.confirmPassword = this.state.password === value?"":"Error: Passwords don t match";                    
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError ,error , success} = this.state;

        return (
            <Container className="containerRegister" fluid>
            {error && <Alert color="danger">{error}</Alert>}
            {success &&<Alert color="success">Succesfully registered</Alert>}
            <Row>
              <Col xs={12} sm={6}>
                <img  src={registerIcon} alt="" />
              </Col>
              <Col xs={12} sm={6} className="formColumnRegister">
            <form onSubmit={this.onSubmit} noValidate>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className={isError.confirmPassword.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="confirmPassword"
                        onChange={this.formValChange}
                    />
                    {isError.confirmPassword.length > 0 && (
                        <span className="invalid-feedback">{isError.confirmPassword}</span>
                    )}
                </div>
                <button type="submit" className="btn btn-block btn-primary">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="login">Log in?</a>
                </p>
            </form>
            </Col>
        </Row>
      </Container>
        );
    }
}
