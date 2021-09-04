
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';
import '../css/App.css';

import ReportRouter from './Reports/ReportRouter';
import Home from "./Home";
const theme = createTheme({
  typography: {
    fontFamily: 'VarelaRound',
    fontWeightRegular: 500,
  },
}, heIL);


const AppContent = (<ThemeProvider theme={theme}>
    <Router>

      <div className="App container d-flex flex-column justify-content-end">
        <Header />
        <ReportRouter />

        {/* <Home/> */}
        <Footer />

      </div>
    </Router>
  </ThemeProvider>
  );

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <Home/>
    };
    setTimeout(()=>{
      this.setState(
        {view : AppContent}
      )
    },2000)
  }    
  render() {
    
    return (
      this.state.view
    );
  }

}