
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';


import '../css/App.css';
import Home from "./Home";
import ReportRouter from './Reports/ReportRouter';


function App() {
  return (
    <div className="App container d-flex flex-column justify-content-end">
      <Header/>
        <ReportRouter/>        
       
      {/* <Home/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
