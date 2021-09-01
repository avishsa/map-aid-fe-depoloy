
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';
import '../css/App.css';

import ReportRouter from './Reports/ReportRouter';

const theme = createTheme({
  typography: {
    fontFamily: 'VarelaRound',
    fontWeightRegular: 500,
  },
}, heIL);




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
