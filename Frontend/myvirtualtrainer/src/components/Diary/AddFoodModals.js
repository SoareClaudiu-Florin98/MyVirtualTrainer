import React, {useState}  from 'react';
import {
   Modal , Button
} from "react-bootstrap";
import Axios from "axios";
const AddFoodModals = (props) => {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "e158054a";
  const APP_KEY = "54a1a2486c126fbd5926c05cb3b1e210"; 
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      setFoods(result.data.hits)       
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };
    const {show , handleClose} = props ; 
    return (
      <Modal show = {show} onHide= {handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg" centered >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Woohoo, you're reading this text in a modal!

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