import React, { useState } from "react";


const Food = ({ food }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = food.food;
 
  return (
    <div className="recipe">
      <h3>{label}</h3>
    </div>
  );
};

export default Food;