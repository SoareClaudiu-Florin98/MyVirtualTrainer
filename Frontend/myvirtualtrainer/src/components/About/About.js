import React from "react";
import "./About.css";
import nutrition from "../Assets/eatright.jpg";

const About = () => {
  //TODO::
  //FIXME:
  return (
    <div className="section">
        <div className="container-about">     
        <div className="content-section">
          <div className="title">
            <h1> About </h1>
          </div>
          <div className="content">
            <h3>
                MyVirtualTrainer is an application that helps people get their dream body.
            </h3>
            <p>
            Nutrition plays an essential role in the harmonious development of each individual.
            A healthy and balanced diet contributes to the proper functioning of both the brain and the body.
            To address a healthy diet, we could start by making beneficial choices for the body and by respecting the daily requirement of nutrients based on age, weight, sex and daily activity.
            The food choices we make today will be reflected in the way we feel and look in the future.
            To help people get the results they want, we designed the MyVirtualTrainer app.
            </p>
            <div className="button">
              <a href="">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href="" class="fa fa-facebook"></a>
            <a href="" class="fa fa-twitter"></a>
            <a href="" class="fa fa-instagram"></a>
          </div>
        </div>
        <div className="image-section">
            <img src= {nutrition}></img>
          </div>
        </div>
      </div>
  );
};
export default About;
