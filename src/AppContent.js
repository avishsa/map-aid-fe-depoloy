import React from 'react';

import Header from './Components/boilerplate/Header';
import Footer from './Components/boilerplate/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { heIL } from '@material-ui/core/locale';
import { useHistory } from 'react-router';
import ScrollToTop from './Components/boilerplate/ScrollToTop';

import ReportRouter from './routers/ReportRouter';
import UserRouter from './routers/UserRouter';

const theme = createTheme({
  typography: {
    fontFamily: 'VarelaRound',
    fontWeightRegular: 500,
  },
}, heIL);

export default function AppContent() {
  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App container d-flex flex-column justify-content-end">
          <Header  />
          <ScrollToTop history={history} />
          <ReportRouter />
          <UserRouter />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}