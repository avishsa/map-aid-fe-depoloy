import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import SimpleMap from './ReportMap/SimpleMap';

import Explain from './ReportMap/Explain';



function ReportMap({ props }) {
  const [address, setAddress] = useState("");
  const history = useHistory();

  return (
    <div className="d-flex flex-column">
      <Explain address={address}/>
      <SimpleMap history={history} onAddressChanged={setAddress}/>
    </div>

  )
}

export default ReportMap

