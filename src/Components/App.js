
import ReportCreate from './Reports/ReportCreate';
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../css/App.css';
import Home from "./Home";
import ReportRouter from './Reports/ReportRouter';


function App() {
  return (
    <div className="App container d-flex flex-column justify-content-end">
      <Header/>
      <Router> 
      
        <ReportRouter/>        
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
