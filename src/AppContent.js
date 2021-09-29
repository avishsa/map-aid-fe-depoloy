import React from 'react';
import { Provider } from 'react-redux';
import { store} from "./helps/store";
import Header from './Components/boilerplate/Header';
import Footer from './Components/boilerplate/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { heIL } from '@material-ui/core/locale';
import ScrollToTop from './Components/boilerplate/ScrollToTop';

import ReportRouter from './routers/ReportRouter';
import UserRouter from './routers/UserRouter';

const theme = createTheme({
    typography: {
      fontFamily: 'VarelaRound',
      fontWeightRegular: 500,
    },
  }, heIL);
const MainRouter = ()=>{
  return (<ThemeProvider theme={theme}>
    <Router>
      <div className="App container d-flex flex-column justify-content-end">
        <Header /*token={token}*/ />
        <ScrollToTop />
        <ReportRouter  />
        <UserRouter />       
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
  );
} 
export default function  AppContent (){ 

    return (
      <Provider store={store}>
      <MainRouter/>
      </Provider>
  );
}