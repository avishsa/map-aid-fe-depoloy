import React from 'react';

import Header from './Components/boilerplate/Header';
import Footer from './Components/boilerplate/Footer';
import { Router } from "react-router";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { heIL } from '@material-ui/core/locale';
import { history } from './helps/history';
import ScrollToTop from './Components/boilerplate/ScrollToTop';

import ReportRouter from './routers/ReportRouter';
import InfoRouter from "./routers/InfoRouter";
import UserRouter from './routers/UserRouter';

const theme = createTheme({
  typography: {
    fontFamily: 'VarelaRound',
    fontWeightRegular: 500,
  },
}, heIL);

export default function AppContent() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div className="App container d-flex flex-column justify-content-end">
          <Header />
          <ScrollToTop /> 
          <ReportRouter />
          <InfoRouter/>
          <UserRouter />

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}