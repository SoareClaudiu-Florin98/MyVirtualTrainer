import React, { useState, useEffect } from "react";
import { Redirect, NavLink, Link } from "react-router-dom";
import {
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    Alert,
    Button,
    Form

} from "reactstrap";
import axios from "axios";
import { getUser } from "../../api";
import UserImg from "../Assets/imagineprofil.png";
import { Prompt } from "react-router";
import './Profile.css' ; 


const Profile = () => {

    const [name, setName] = useState("Claudel");
    const [password, setPassword] = useState("");


    const [birthday, setBirthday] = useState();
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [dataUrl, setDataUrl] = useState();
    const [activityLevel , setActivityLevel] = useState() ; 
    const [error, setError] = useState(false);
    const [profileImage, setProfileImage] = useState(UserImg);
    const [id, setId] = useState("");
    const [shouldBlockNavigation, setShouldBlockNavigation] = useState(false);
    const [maxDate, setMaxDate] = useState(new Date().toISOString().split("T")[0]);
    
    useEffect(() => {
        getUser().then(data => {
            if (!data) return;     
            setId(data.id);
            setPassword(data.password);
            setEmail(data.email);
            setName(data.name);
            setWeight(data.weight);
            setHeight(data.height);
            setBirthday(data.birthday.substring(0,10)) ;
            setActivityLevel(data.activityLevel) ; 
            setGender(data.gender) ; 
            if(data.profilePicture){
              console.log("are pozaaaaaaaaaaa")
              setProfileImage(`data:image/jpeg;base64,${data.profilePicture}`) ; 
            }
            
        });
    }, []);
    const submit = async e => {

      await axios.put("https://localhost:44361/user/update", {

                id: id,
                password: password,
                email:email,
                name: name ,              
                weight: weight,
                height: height,
                birthday : birthday,
                activityLevel: activityLevel,
                profilePicture : profileImage.replace("data:image/jpeg;base64,",''),               
                gender: gender}, {
                  withCredentials: true
                })
            .then(response => {
                
                if (response) {
                    setError(false);
                    alert(error);
                    setShouldBlockNavigation(false);
                }
            })
            .catch(error => {
                setError(error.response.data.message);
                alert(error);
            });
    };

    const alert = isOk => {
        if (!isOk) {
            return <Alert color="danger">Succesfully updated</Alert>;
        } else {
            return <Alert color="success"> Something went wrong</Alert>;
        }
    };
    const handleImageChange=(event) => {
        try {

          
        const reader = new FileReader();
        reader.onload= () => {
          if(reader.readyState ===2){
            setProfileImage(reader.result) ; 
          }
        }
        setProfileImage(event.target.files[0]) ; 
        reader.readAsDataURL(event.target.files[0]); 
    }
    catch(error){

    }
    }
return(
    <div className="containerProfile" >
    <Container   fluid >
    {error && <Alert color="danger">{error}</Alert>}
    <Row  >
        
        <Col xs={12} sm={12}  md={12} lg={6} >
            <img className= "imgleft" src={profileImage} alt = ""   />  
            <input type="file" id="input" class="custom-file-input2" onChange={handleImageChange} accept="image/png, image/jpeg" ></input>
        </Col> 

        <Col  xs={12} sm={12} md={12} lg={6} style = {{margin: 'auto'}} >
          <h1>  Welcome {name} ! </h1>
        </Col>         
    </Row>
    <hr ></hr>
    <Form>
      
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name"  placeholder="Name" value = {name} onChange = { (e) => setName(  e.target.value)}/>
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleAddress">Email</Label>       
        <Input type="email" name="email"   disabled  placeholder="Email"    value = {email}  onChange = { (e) => setEmail(  e.target.value)}/>
      </FormGroup>
      <Row form>
      <Col sm= {12} md={6} lg={6}>
      <FormGroup>
        <Label for="weight">Weight</Label>  
        <Input placeholder="Weight" min={0} max={300} type="number" step="0.1" value = {weight} onChange = { (e) => setWeight(  e.target.value)} />       
      </FormGroup>
      </Col>
      <Col sm= {12} md={6} lg={6}>
      <FormGroup>
            <Label for="height">Height (cm)</Label>
            <Input type="number" name="height" step="0.1" placeholder="Height"  min={0} max={300} value = {height} onChange = { (e) => setHeight(  e.target.value)}/>
       </FormGroup>         
      </Col>
      </Row>
      <Row form>
        <Col sm= {12} md={6}>
          <FormGroup>
            <Label for="birthday">Birthday</Label>
            <Input type = "date" value = {birthday} onChange={(e) => setBirthday(e.target.value) } max= {maxDate} min="1900-01-02" />
            
          </FormGroup>
        </Col>
        <Col sm= {12} md={4}>
          <FormGroup>
            <Label for="activityLevel">Activity level</Label>
            <Input type="select" name="activityLevel" value = {activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option selected></option>
            <option value="Active">Active</option>
            <option value="Very active">Very active </option>
            <option value="Sedentary">Sedentary</option>
            </Input>
          </FormGroup>
        </Col>
        <Col sm= {12} md={2}>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input type="select" name="gender" value = {gender} onChange={(e) => setGender(e.target.value)}>
            <option selected></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </Input>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>I agree to the terms and conditions</Label>
      </FormGroup>
      <br/>
      <Button onClick={submit} color="primary">Update</Button>
    </Form>
  </Container>
  </div>

)
};
export default Profile;
