import React ,{useState} from 'react';
import Header from './Components/boilerplate/Header';
import Footer from './Components/boilerplate/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { heIL } from '@material-ui/core/locale';
import ScrollToTop from './Components/boilerplate/ScrollToTop';

import ReportRouter from './routers/ReportRouter';
import UserRouter from './routers/UserRouter';
import useToken from "./routers/Authentication/useToken";
import { reach } from 'yup';
const theme = createTheme({
    typography: {
      fontFamily: 'VarelaRound',
      fontWeightRegular: 500,
    },
  }, heIL);
  
export default function  AppContent (){
  
  const initToken = JSON.parse(sessionStorage.getItem('token'));
  const [token,setToken]= useState( initToken);
    return (<ThemeProvider theme={theme}>
    <Router>
      <div className="App container d-flex flex-column justify-content-end">
        <Header token={token} />
        <ScrollToTop />
        <ReportRouter  />
        <UserRouter token={token} setToken={setToken}/>       
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
  );
}