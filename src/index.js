import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './Components/App';
import { createTheme,ThemeProvider} from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';


const theme = createTheme({
  typography: {
      fontFamily: 'VarelaRound',
      fontWeightRegular: 500,
  },  
},heIL);

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Router>
        <App />
        </Router>        
    </ThemeProvider>
  ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

