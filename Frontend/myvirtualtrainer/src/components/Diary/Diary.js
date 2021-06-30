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
    const [mealType, setMealType] = useState();



const handleClose = () => setShow(false);
const handleShowBreakfast = () =>{ 
    setMealType('Breakfast') ; 
    setShow(true);
}
const handleShowLunch = () =>{ 
    setMealType('Lunch') ; 
    setShow(true);
}
const handleShowDinner = () =>{ 
    setMealType('Dinner') ; 
    setShow(true);
}
const handleShowSnacks = () =>{ 
    setMealType('Snacks') ; 
    setShow(true);
}
return(
    <div className ="containerDiary">
        <AddFoodModals show = {show}  handleClose = {handleClose} mealType = {mealType}/>
        <Container fluid >
        <Row>
        <Col xs="6" id = 'meals'>Breakfast</Col>
        <Col xs="6" id = 'kcalValue'>{breakfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShowBreakfast}>ADD FOOD</Button>
        </Row>
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Lunch</Col>
        <Col xs="6" id = 'kcalValue'>{lunchfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShowLunch}>ADD FOOD</Button>
        </Row>
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Dinner</Col>
        <Col xs="6" id = 'kcalValue'>{dinnerfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShowDinner}>ADD FOOD</Button>
        </Row>
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Snacks</Col>
        <Col xs="6" id = 'kcalValue'>{snacksfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShowSnacks}>ADD FOOD</Button>
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
