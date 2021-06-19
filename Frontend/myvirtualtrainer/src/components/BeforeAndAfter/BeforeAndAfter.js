import React, { useState } from "react";
import "./BeforeAndAfter.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import photo from "../Assets/photo.svg";

const BeforeAndAfter = () => {
  const [beforeImg, setBeforeImg] = useState(photo);
  const [afterImg, setAfterImg] = useState(photo);
  const [finalImg, setFinalImg] = useState("");
  const [existFinalImg, setExistFinalImg] = useState(false);

  const hanfleBeforeChange=(event) => {
    const reader = new FileReader();
    reader.onload= () => {
      if(reader.readyState ===2){
        setBeforeImg(reader.result) ; 
      }
    }
    reader.readAsDataURL(event.target.files[0]) ; 
    
  }
  const hanfleAfterChange=(event) => {
    const reader = new FileReader();
    reader.onload= () => {
      if(reader.readyState ===2){
        setAfterImg(reader.result) ; 
      }
    }
    reader.readAsDataURL(event.target.files[0]) ;
  }
  const hanfleGenerateClick=() => {
    setExistFinalImg(true) ; 

  }
 


  return (
    <Container className="containerbaa" fluid>
      <Row xs={2} sm = {2} md={4} lg={6}   className="justify-content-md-center" id = "beforeAndAfterRow">
        
        <Col >
          <h3>Before</h3>
          <div className="beforeImg">
            <img src={beforeImg} alt="PhotoBefore" rounded id="beforeImgCanvas"/>          
          </div>

          <input type="file" id = "input" onChange={hanfleBeforeChange} accept="image/png, image/jpeg"></input>
        </Col>
        <Col>
          <h3>After</h3>
          <div className="afterImg">
            <img src={afterImg} alt="PhotoAfter" rounded id="afterImgCanvas"/>          
          </div>
          <input type="file" id = "input" onChange={hanfleAfterChange} accept="image/png, image/jpeg"></input>
        </Col>
        
      </Row>
      <Row xs={2} sm = {2} md={4} lg={6} className="justify-content-md-center">
        <Col>
          <Button className="buttonbaf" variant="success" onClick={hanfleGenerateClick}>Generate Before And After</Button>
        </Col>
      </Row>
      <Row xs={6} sm = {2} md={6} lg={6} className="justify-content-md-center">
        {beforeImg !=photo &&afterImg !=photo&& existFinalImg&&<Col>
          <img src="" alt="Poza" rounded />
        </Col>}
      </Row>
    </Container>
  );
};
export default BeforeAndAfter;
