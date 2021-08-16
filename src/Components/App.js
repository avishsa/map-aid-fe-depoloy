
import ReportCreate from './Reports/ReportCreate';
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
import '../css/App.css';
import ReportFailure from './Reports/ReportFailure';
import ReportSuccess from './Reports/ReportSuccess';



function App() {
  return (
    <div className="App container d-flex flex-column justify-content-end">
      <Header/>
      <StateMachineProvider>
        {/* router of reports */}
      <Router>
      
        <Route exact path="/report/create" component={ReportCreate} />
        <Route exact path="/report/success" component={ReportSuccess} />
        <Route exact path="/report/failure" component={ReportFailure} />
        
      </Router>
      {/* router of users */}
    </StateMachineProvider>
      
      <Footer/>
    </div>
  );
}

export default App;
