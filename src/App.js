
import Header from './Components/boilerplate/Header';
import Footer from './Components/boilerplate/Footer';
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';
import ScrollToTop from './Components/boilerplate/ScrollToTop';
import './css/App.css';

import ReportRouter from './routers/ReportRouter';
import UserRouter from './routers/UserRouter';
import Home from "./Components/Home";
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
        <ScrollToTop />
        <ReportRouter />
        <UserRouter/>
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