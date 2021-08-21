
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';


const theme = createTheme({
  typography: {
    fontFamily: 'VarelaRound',
    fontWeightRegular: 500,
  },
}, heIL);

import '../css/App.css';
import Home from "./Home";
import ReportRouter from './Reports/ReportRouter';


function App() {
  return (
    <ThemeProvider theme={theme}>
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
}

export default App;
