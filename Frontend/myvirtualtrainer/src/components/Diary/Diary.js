import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import AddFoodModals from './AddFoodModals'; 
import './Diary.css'
import {
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";

const Diary = () => {
    const [food , setFood] = useState() ; 
    const [foodList, setFoodList] = useState([]);
    const [breakfastKcal, setBreakfastKcal] = useState(0);
    const [lunchfastKcal, setLunchfastKcal] = useState(0);
    const [dinnerfastKcal, setDinnerfastKcal] = useState(0);
    const [snacksfastKcal, setSnacksfastKcal] = useState(0);
    const [show, setShow] = useState(false);


const addFood = () => {
    let newItem = {
        food: food,
        id: uuidv4(),
    };
    const newList = foodList.concat(newItem);
    setFoodList(newList);
    setFood("");
    };
    
const deleteItem=(id)=>{
    const filteredItems= foodList.filter(item =>
    item.id!==id);
    setFoodList(filteredItems)    
}

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return(
    <div className ="containerDiary">
        <AddFoodModals show = {show}  handleClose = {handleClose}/>
        <Container fluid >
        <Row>
        <Col xs="6" id = 'meals'>Breakfast</Col>
        <Col xs="6" id = 'kcalValue'>{breakfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShow}>ADD FOOD</Button>
        </Row>
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Lunch</Col>
        <Col xs="6" id = 'kcalValue'>{lunchfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShow}>ADD FOOD</Button>
        </Row>
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Dinner</Col>
        <Col xs="6" id = 'kcalValue'>{dinnerfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShow}>ADD FOOD</Button>
        </Row>
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Dinner</Col>
        <Col xs="6" id = 'kcalValue'>{dinnerfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShow}>ADD FOOD</Button>
        </Row>
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Snacks</Col>
        <Col xs="6" id = 'kcalValue'>{snacksfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShow}>ADD FOOD</Button>
        </Row>
        <Row>
        <Col sm="12" id = 'generateReportsButton'md={{ size: 6, offset: 3 }}>
        <Button color="primary" >Generate reports</Button>
             
        </Col>
      </Row>



        </Container>


    </div>)
};
export default Diary;
