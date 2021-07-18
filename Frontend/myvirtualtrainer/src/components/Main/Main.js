import React from 'react';
import  './Main.css' ; 
import { Switch, Route } from "react-router";
import { Message } from "semantic-ui-react";
import About from "../About";
import Profile from "../Profile";
import Blog from "../Blog";
import Diary from "../Diary";
import Reports from "../Reports";
import Maps from "../Maps";
import Foods from "../Foods";
import BeforeAndAfter from "../BeforeAndAfter";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";



const Main = (props) => {
  const error = () => (
    <Message
        icon="warning circle"
        header="Ups... Error!"
        content="Please go back and try again."
    />
  );
    return (
      <Switch>
      <Route exact path="/">
          <About />
      </Route>
      <Route path="/About">
          <About />
      </Route>
      <Route path="/login">
          <Login  handleLogin={props.handleLogin}/>
      </Route>
      <Route path="/profile">
          <Profile />
      </Route>
      <Route path="/blog">
          <Blog />
      </Route>
      <Route path="/diary" component={Diary} />
      <Route path="/reports" component={Reports} />
      <Route path="/maps">
          <Maps/>
      </Route>
      <Route path="/foods">
          <Foods />
      </Route>
      <Route path="/before_and_after" component={BeforeAndAfter} />

      <Route path="/register">
          <Register />
      </Route>
      <Route path="/dashboard" component= {Dashboard}>
      </Route>
      <Route render={error} />
  </Switch>

    );
  };
  export default Main;