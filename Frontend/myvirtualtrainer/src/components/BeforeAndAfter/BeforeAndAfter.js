import React, { useState } from "react";
import "./BeforeAndAfter.css";
import { Container, Row, Col, Button } from "react-bootstrap";

import photo from "../Assets/photo.svg";

const BeforeAndAfter = () => {
  const [beforeImg, setBeforeImg] = useState(photo);
  const [afterImg, setAfterImg] = useState(photo);
  const [isDownloadable, setIsDownloadable] = useState(false);

  const hanfleBeforeChange=(event) => {
    const reader = new FileReader();
    reader.onload= () => {
      if(reader.readyState ===2){
        setBeforeImg(reader.result) ; 
      }
    }
    reader.readAsDataURL(event.target.files[0]) ; 
    
  }
  const handleAfterChange=(event) => {
    const reader = new FileReader();
    reader.onload= () => {
      if(reader.readyState ===2){
        setAfterImg(reader.result) ; 
      }
    }

    reader.readAsDataURL(event.target.files[0]) ;
  }

  function download(canvas, filename) {

    var lnk = document.createElement('a'), e;

    lnk.download = filename;

    lnk.href = canvas.toDataURL("image/png;base64");
    if (document.createEvent) {
      e = document.createEvent("MouseEvents");
      e.initMouseEvent("click", true, true, window,
                       0, 0, 0, 0, 0, false, false, false,
                       false, 0, null);
  
      lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
      lnk.fireEvent("onclick");
    }
  }

  const handleDownloadClick=() => {
    let canvas = document.getElementById('canvasResult')
    download(canvas, 'myimage.png');

  }


  const hanfleGenerateClick=() => {

    if(beforeImg !== photo && afterImg !== photo){
      let canvas = document.getElementById('canvasResult') ; 
      const imgBeforeForCanvas = document.getElementById('beforeImgCanvas') ; 
      const imgAfterForCanvas = document.getElementById('afterImgCanvas') ;          
      canvas.width = imgBeforeForCanvas.width*2;
      canvas.height = imgBeforeForCanvas.height;

      var  imageBeforeDraw = new Image(imgBeforeForCanvas.width , imgBeforeForCanvas.height);
      imageBeforeDraw.src = imgBeforeForCanvas.src; 
      imageBeforeDraw.width = imgBeforeForCanvas.width*2 ; 
      imageBeforeDraw.height = imgBeforeForCanvas.height ; 


      var  imageAfterDraw = new Image(imgBeforeForCanvas.width , imgBeforeForCanvas.height);
      imageAfterDraw.src = imgAfterForCanvas.src; 
      imageAfterDraw.width = imgBeforeForCanvas.width*2 ; 
      imageAfterDraw.height = imgBeforeForCanvas.height ; 
      
      let ctx = canvas.getContext('2d');
      ctx.drawImage(imageBeforeDraw, 0, 0,imgBeforeForCanvas.width,imgBeforeForCanvas.height );
      ctx.drawImage(imageAfterDraw, imgBeforeForCanvas.width, 0 ,imgBeforeForCanvas.width,imgBeforeForCanvas.height );
      setIsDownloadable(true) ; 
    }
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
          <input type="file" id = "input" onChange={handleAfterChange} accept="image/png, image/jpeg"></input>
        </Col>
        
      </Row>
      <Row xs={2} sm = {2} md={4} lg={6} className="justify-content-md-center">
        <Col>
          <Button className="buttonbaf" variant="success" onClick={hanfleGenerateClick}>Generate Before And After</Button>
        </Col>
      </Row>
      <Row xs={12} sm = {12} md={2} lg={3} className="justify-content-md-center">
        <Col>
          <canvas id ='canvasResult'/>
        </Col>              
      </Row>
      <Row xs={2} sm = {2} md={4} lg={6} className="justify-content-md-center">
        <Col>
          {isDownloadable && <Button className="buttonbaf" variant="primary" onClick={handleDownloadClick} >Download</Button>}
        </Col>
      </Row>
    </Container>
  );
};
export default BeforeAndAfter;
