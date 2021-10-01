import React from 'react';
import SimpleMap from './ReportMap/SimpleMap';
import Explain from './ReportMap/Explain';
import { withRouter } from "react-router-dom";


function ReportMap() {
  return (
    <div className="d-flex flex-column">
      <Explain />
      <SimpleMap  />
    </div>

  )
}

export default withRouter(ReportMap)

