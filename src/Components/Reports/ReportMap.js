import React from 'react';
import { useHistory } from "react-router-dom";
import SimpleMap from './ReportMap/SimpleMap';

import Explain from './ReportMap/Explain';



function ReportMap({ props }) {
  const history = useHistory();
  return (
    <div className="d-flex flex-column">
      <Explain />
      <SimpleMap history={history} />
    </div>

  )
}

export default ReportMap

