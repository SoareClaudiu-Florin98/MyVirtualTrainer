import React, { useState } from "react";
import "./BeforeAndAfter.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import photo from "../Assets/photo.svg";

const BeforeAndAfter = () => {
  const [beforeImg, setBeforeImg] = useState("");
  const [afterImg, setAfterImg] = useState("");

  return (
    <Container className="containerbaa" fluid>
      <Row xs={2} md={4} lg={6} className="justify-content-md-center" id = "beforeAndAfterRow">
        
        <Col>
          <h3>Before</h3>
          <div className="beforeImg">
            <Image src={photo} alt="PhotoBefore" rounded />
          </div>
        </Col>
        <Col>
          <h3>After</h3>
          <div className="afterImg">
            <Image src={photo} alt="PhotoAfter" rounded />
          </div>
        </Col>
        
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-md-center">
        <Col>
          <Button className="buttonbaf" variant="success">Generate Before And After</Button>
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} className="justify-content-md-center">
        <Col>
          <Image src="" alt="Poza" rounded />
        </Col>
      </Row>
    </Container>
  );
};
export default BeforeAndAfter;
