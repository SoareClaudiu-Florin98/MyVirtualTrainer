import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Food from "./Food"
const AddFoodModals = (props) => {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "920eda1c";
  const APP_KEY = "ca59bf0c04be445009d892bb34983cb5";
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=logging&ingr=${query}`;
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      setFoods(result.data.hits);
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();

  }
  const onChange = e => setQuery(e.target.value);
  const { show, handleClose } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Add Food</Modal.Title>
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
        <div className="recipes">
          {foods !== [] &&
            foods.map(food => <Food key={uuidv4()} food={food} />)}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Add Food
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddFoodModals;
