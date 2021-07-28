
import ReportCreate from './Reports/ReportCreate';
// Import F7 Bundle
import Framework7 from 'framework7/lite-bundle';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Init F7-React Plugin
Framework7.use(Framework7React);

function App() {
  return (
    <div className="App container d-flex flex-row-reverse justify-content-end">
      <ReportCreate/>
    </div>
  );
}

export default App;
