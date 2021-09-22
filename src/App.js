
import React, { Component } from 'react';



import './css/App.css';

import AppContent from './AppContent';
import Home from "./Components/Home";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <Home/>
    };
    
    setTimeout(()=>{
      this.setState(
        {view : <AppContent/>}
      )
    },2000)
  }    
  render() {
    
    return (
      this.state.view
    );
  }

}