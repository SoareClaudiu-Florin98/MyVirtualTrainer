import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Food from "./Food" ;
import { getUser } from "../../api";
const AddFoodModals = (props) => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState(null);
  const [alert, setAlert] = useState("");
  const [isOk, setIsOk] = useState(false);

  const APP_ID = "920eda1c";
  const APP_KEY = "ca59bf0c04be445009d892bb34983cb5";
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=logging&ingr=${query}`;
  const getData = async () => {
    setAlert("");
    setIsOk(false) ; 
    setFood(null) ; 
    if (query !== "") {
      await axios.get(url).then((response) => {
        setFood(response.data);
        if(response.data.dietLabels.length >0){
          setIsOk(true)
        }else{
          setIsOk(false)
          setFood(null)
          setAlert("Food not found!");
        }

      }) .catch((err) => {
        setAlert("Food not found!");
        setFood(null);
      });

      

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

   getUser().then((data) => {  axios
    .put("https://localhost:44361/user/updateFood", {
      id: data.id, 
      password: data.password,
      email:data.email,
      name: data.name ,              
      weight: data.weight,
      height: data.height,
      birthday : data.birthday,
      activityLevel: data.activityLevel,
      profilePicture : data.profilePicture,               
      gender: data.gender,
      foods:[ {
          name : query,
          calories : food.calories,
          weight : food.totalWeight,
          carbs: food.totalNutrients.CHOCDF.quantity.toFixed(2),
          fat:food.totalNutrients.FAT.quantity.toFixed(2),
          fiber :  food.totalNutrients.FIBTG.quantity.toFixed(2),
          protein :food.totalNutrients.PROCNT.quantity.toFixed(2) ,
          calcium : food.totalNutrients.CA.quantity.toFixed(2),
          date :  new Date(),
          mealType : props.mealType
      }]
    },{
      withCredentials: true
    })
    .then(response => {
      window.location.reload() ; 

    })
    .catch(error => {
    });
  })
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
        { isOk && food &&< Food mealType ={props.mealType} food={food} />}
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
