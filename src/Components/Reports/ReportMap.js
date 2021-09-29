import React, { useState } from 'react';
import SimpleMap from './ReportMap/SimpleMap';
import Explain from './ReportMap/Explain';



function ReportMap({ props }) {
  const [address, setAddress] = useState(""); 
  return (
    <div className="d-flex flex-column">
      <Explain address={address}/>
      <SimpleMap  onAddressChanged={setAddress}/>
    </div>

  )
}

export default ReportMap

