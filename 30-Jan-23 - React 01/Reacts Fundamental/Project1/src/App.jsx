import React from 'react';
import { useState } from "react";
import './App.css'
import Greeting from './components/greetings';
import Profile from './components/Profile';
import Fruits from './components/List';
import Btn from './components/Button';
import Mybtn from './components/Counter';

function App() {

  return (
    <React.Fragment>
      <p>Hello</p>
      <Greeting name="ali" age={47}/>
      <Greeting name="Doe" age={24}/>
      <Profile/>
      <Fruits/>
      <Btn/>
      <Mybtn/>
    </React.Fragment>
  )
}

export default App;


