import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "jss";
import rtl from "jss-rtl";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';





import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import { createTheme,  jssPreset,ThemeProvider,StylesProvider, createMuiTheme } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';
import VarelaRoundttf from "./css/fonts/VarelaRound-Regular.ttf"
const varelaRound = {
  fontFamily: 'varelaRound',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${VarelaRoundttf}) format('ttf')
  `
};
const theme = createTheme({
  typography: {
      fontFamily: 'VarelaRound',
      fontWeightRegular: 500,
  },
  // palette:{
  //     primary:{
  //         main: "#f9fbe7",
  //         light:"#ffffff",
  //         dark: "#afc2cb"
  //     }
  // }
  
},heIL);

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);



ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={createMuiTheme({ direction: "rtl" })}>
        <App />
        </ThemeProvider>
      
      </StylesProvider>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode> 
  ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
