import React, {useState , useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import AddFoodModals from './AddFoodModals'; 
import axios from 'axios';
import './Diary.css'
import {
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";
import { getUser } from "../../api";
import { Redirect } from "react-router-dom";

const Diary = () => {
    const [food , setFood] = useState() ; 
    const [foodListBreakfest, setFoodListBreakfest] = useState([]);
    const [foodListLunch, setFoodListLunch] = useState([]);
    const [foodListDinner, setFoodListDinner] = useState([]);
    const [foodListSnacks, setFoodListSnacks] = useState([]);
    const [redirect, setRedirect] = useState(false);

    
    const [breakfastKcal, setBreakfastKcal] = useState(0);
    const [lunchfastKcal, setLunchfastKcal] = useState(0);
    const [dinnerfastKcal, setDinnerfastKcal] = useState(0);
    const [snacksfastKcal, setSnacksfastKcal] = useState(0);
    const [show, setShow] = useState(false);
    const [mealType, setMealType] = useState();

    useEffect(() => {

        getUser().then(data =>{

        axios.get(`https://localhost:44361/user/getFood/${data.id}`, {
      })
      .then(response => {
          const data = response.data ; 
          let  brKcal = 0
          let  luKcal = 0
          let  diKcal = 0
          let  smKcal = 0
          for(let  i = 0 ;i<data.length ;i++) 
          {

              if(data[i].mealType == 'Breakfast'){
                foodListBreakfest.push(data[i]);               
                brKcal += data[i].calories ; 
                

                 
              }
              if(data[i].mealType == 'Lunch'){
                foodListLunch.push(data[i])
                luKcal += data[i].calories ; 
                
                
                 
              }
              if(data[i].mealType == 'Dinner'){
                foodListDinner.push(data[i])
                diKcal+= data[i].calories ; 
                
                
                
              }
              if(data[i].mealType == 'Snacks'){
                foodListSnacks.push(data[i])
                smKcal+= data[i].calories ; 
                
                
              }            

          }
          setBreakfastKcal(brKcal)
          setLunchfastKcal(luKcal) 
          setDinnerfastKcal(diKcal)
          setSnacksfastKcal(smKcal)
        
      })
    })
    },[])

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
        {foodListBreakfest.map((food) =>(
            <div key = {food.id}>
              Name : {food.name } / Calories : {food.calories } / Weight : {food.weight } / Carbs : {food.carbs } / Fat :{food.fat } / Protein :{food.protein } 
            </div>

        ))}

       
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Lunch</Col>
        <Col xs="6" id = 'kcalValue'>{lunchfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShowLunch}>ADD FOOD</Button>
        </Row>
        {foodListLunch.map((food) =>(
            <div key = {food.id}>
              Name : {food.name } / Calories : {food.calories } / Weight : {food.weight } / Carbs : {food.carbs } / Fat :{food.fat } / Protein :{food.protein } 
            </div>

        ))}
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Dinner</Col>
        <Col xs="6" id = 'kcalValue'>{dinnerfastKcal}</Col>
        </Row>
        <Row>
            <Button color="link" onClick={handleShowDinner}>ADD FOOD</Button>
        </Row>
        {foodListDinner.map((food) =>(
            <div key = {food.id}>
              Name : {food.name } / Calories : {food.calories } / Weight : {food.weight } / Carbs : {food.carbs } / Fat :{food.fat } / Protein :{food.protein } 
            </div>

        ))}
        <hr></hr>
        <Row>      
        <Col xs="6" id = 'meals'>Snacks</Col>
        <Col xs="6" id = 'kcalValue'>{snacksfastKcal}</Col>
        </Row>
        {foodListSnacks.map((food) =>(
            <div key = {food.id}>
              Name : {food.name } / Calories : {food.calories } / Weight : {food.weight } / Carbs : {food.carbs } / Fat :{food.fat } / Protein :{food.protein } 
            </div>

        ))}
        <Row>
            <Button color="link" onClick={handleShowSnacks}>ADD FOOD</Button>
        </Row>
        <Row>
        <Col sm="12" id = 'generateReportsButton'md={{ size: 6, offset: 3 }}>
        <Button color="primary"  href ="/reports" >Generate reports</Button>
             
        </Col>
      </Row>
    


        </Container>


    </div>)
};
export default Diary;
