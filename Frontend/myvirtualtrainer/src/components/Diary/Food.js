import React, { useState } from "react";
import './Food.css'
import {
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";

const Food = ({ food ,mealType}) => {

  return (
    <Container fluid >
    <Row>
    <Col xs="6" id = 'calories'><h1>Calories</h1></Col>
    <Col xs="6" id = 'kcalValue'><h1>{food.calories} kcal</h1></Col>
    </Row>
    <Row>
    <Col xs="6" id = 'calories'><h4>Weight</h4></Col>
    <Col xs="6" id = 'kcalValue'><h4>{food.totalWeight} g</h4></Col>
    </Row>
    <hr></hr>
    <Row>
    <Col xs="6" id = 'nutritionalValue'><h4>{food.totalNutrients.CHOCDF.label}</h4></Col>
    <Col xs="6" id = 'kcalValue'><h4>{food.totalNutrients.CHOCDF.quantity.toFixed(2)} {food.totalNutrients.CHOCDF.unit}</h4></Col>

    </Row>
    <Row>
    <Col xs="6" id = 'nutritionalValue'><h4>{food.totalNutrients.FAT.label}</h4></Col>
    <Col xs="6" id = 'kcalValue'><h4>{food.totalNutrients.FAT.quantity.toFixed(2)} {food.totalNutrients.FAT.unit}</h4></Col>
    
    </Row>
    <Row>
    <Col xs="6" id = 'nutritionalValue'><h4>{food.totalNutrients.FIBTG.label}</h4></Col>
    <Col xs="6" id = 'kcalValue'><h4>{food.totalNutrients.FIBTG.quantity.toFixed(2)} {food.totalNutrients.FIBTG.unit}</h4></Col>
    
    </Row>
    <Row>
    <Col xs="6" id = 'nutritionalValue'><h4>{food.totalDaily.PROCNT.label}</h4></Col>
    <Col xs="6" id = 'kcalValue'><h4>{food.totalNutrients.PROCNT.quantity.toFixed(2)} {food.totalNutrients.PROCNT.unit}</h4></Col>
    
    </Row>
    <Row>
    <Col xs="6" id = 'nutritionalValue'><h4>{food.totalNutrients.CA.label}</h4></Col>
    <Col xs="6" id = 'kcalValue'><h4>{food.totalNutrients.CA.quantity.toFixed(2)} {food.totalNutrients.CA.unit}</h4></Col>
    
    </Row>
    

    </Container>
  );
};

export default Food;