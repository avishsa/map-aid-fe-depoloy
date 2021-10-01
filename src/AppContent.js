import React,{useEffect} from 'react';

import Header from './Components/boilerplate/Header';
import Footer from './Components/boilerplate/Footer';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { heIL } from '@material-ui/core/locale';
import { history } from './helps/history';
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
  useEffect(() => {
    const unlisten = history.listen((props) => {
      console.dir(props);
    });
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter history={history}>
        <div className="App container d-flex flex-column justify-content-end">
          <Header />
          {/* <ScrollToTop /> */}
          <ReportRouter />
          <UserRouter />

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}