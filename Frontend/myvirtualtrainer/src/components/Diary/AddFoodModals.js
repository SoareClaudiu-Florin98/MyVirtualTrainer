import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Food from "./Food" ;
import { getUser } from "../../api";
const AddFoodModals = (props) => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const [alert, setAlert] = useState("");


  const APP_ID = "920eda1c";
  const APP_KEY = "ca59bf0c04be445009d892bb34983cb5";
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=logging&ingr=${query}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      setFood(result.data);
      setAlert("");
      console.log(result.data.dietLabels)
      if(result.data.dietLabels.length <1){
        setAlert("Food not found!");
      }
    } else {
      setAlert("Please fill the form");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();

  }
  const onChange = e => setQuery(e.target.value);

  const handleCloseButton =() =>{
    props.handleClose()
    setFood(null)  
    setQuery("")
  }

  const handleAddFood= async() =>{
   await  axios
    .post("https://localhost:44361/user/updateFood", {
          calories : food.calories,
          weight : food.totalWeight,
          carbs: food.totalNutrients.CHOCDF.quantity.toFixed(2),
          fat:food.totalNutrients.FAT.quantity.toFixed(2),
          fiber :  food.totalNutrients.FIBTG.quantity.toFixed(2),
          protein :food.totalNutrients.PROCNT.quantity.toFixed(2) ,
          calcium : food.totalNutrients.CA.quantity.toFixed(2),
          date :  new Date(),
          mealType : props.mealType
    },{
      withCredentials: true
    })
    .then(response => {

    })
    .catch(error => {
    });
  props.handleClose()
  setFood(null)  
  setQuery("")
}


  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Add Food {props.mealType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {alert !== "" && <Alert color="danger">{alert}</Alert>}
        <form onSubmit={onSubmit} className="search-form">
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Search Food"
          />
          <div class="break"></div>
          <input type="submit" value="Search" />
        </form>


        {food&&< Food mealType ={props.mealType} food={food} />}

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseButton }>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddFood}>
          Add Food
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddFoodModals;
