
import ReportCreate from './Reports/ReportCreate';
import Header from './boilerplate/Header';
import Footer from './boilerplate/Footer';
import '../css/App.css';

function App() {
  return (
    <div className="App container d-flex flex-column justify-content-end">
      <Header/>
      <ReportCreate/>
      <Footer/>
    </div>
  );
}

export default App;
