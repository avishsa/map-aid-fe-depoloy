
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';
import { BrowserRouter as Router } from "react-router-dom";

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
      {/* <Home/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
