import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import React from 'react';
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />  
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
    
  );
}


