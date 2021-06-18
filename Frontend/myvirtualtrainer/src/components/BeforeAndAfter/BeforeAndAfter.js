import React, {useState} from 'react';
import "./BeforeAndAfter.css";
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
const BeforeAndAfter = () => {

    const [beforeImg , setBeforeImg] = useState('') ; 
    const [afterImg, setAfterImg] = useState('') ;

return(
<Container fluid>
  <Row xs={2} md={4} lg={6} className="justify-content-md-center">
    <Col>Before</Col>
    <Col>After</Col>
  </Row>
  <Row xs={2} md={4} lg={6} className="justify-content-md-center">
    <Col>PhotoBefore</Col>
    <Col>PhotoAfter</Col>
  </Row>
  <Row xs={2} md={4} lg={6} className="justify-content-md-center">
    <Col>Generate</Col>
  </Row>
  <Row xs={2} md={4} lg={6} className="justify-content-md-center">
    <Col>Poza</Col>
  </Row>
</Container>
)
};
export default BeforeAndAfter;
