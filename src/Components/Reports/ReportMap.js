import React from 'react';
import SimpleMap from './ReportMap/SimpleMap';
import Explain from './ReportMap/Explain';



function ReportMap({ props }) {
  return (
    <div className="d-flex flex-column">
      <Explain />
      <SimpleMap />
    </div>

  )
}

export default ReportMap

