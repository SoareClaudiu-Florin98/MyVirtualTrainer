import React, {useState} from 'react';
import "./Foods.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import {
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";
const Foods = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
  
    const APP_ID = "8009e758";
    const APP_KEY = "d183c46cb251a08f6b6437a4c92d4c27";
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
    const getData = async () => {
      if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
          return setAlert("No food with such name");
        }
        setRecipes(result.data.hits)       
        setAlert("");
      } else {
        setAlert("Please fill the form");
      }
    };
  
    const onChange = e => setQuery(e.target.value);
  
    const onSubmit = e => {
      e.preventDefault();
      getData();
    };
  
    return (
      <div className="foods">
        {alert !== "" && <Alert  color="danger">{ alert}</Alert>}
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
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
)
};
export default Foods;
