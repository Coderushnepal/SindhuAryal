import React, { Component } from 'react';
import axios from 'axios';
import Router from './Router';

const api = axios.create({
  baseURL: 'http://localhost:1234',
});

class App extends Component {
  constructor(){
    super();
      
    api.get("/").then((res) => {
      console.log(res.data);
    });
  }
  render(){
    return (
      <Router />
  );}
}

export default App;
