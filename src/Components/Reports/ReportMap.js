import React from 'react';
import SimpleMap from './ReportMap/SimpleMap';
import Explain from './ReportMap/Explain';



function ReportMap() {
  return (
    <div className="d-flex flex-column">
      <Explain />
      <SimpleMap  />
    </div>

  )
}

export default ReportMap;

