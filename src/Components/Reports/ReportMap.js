import React, { useState } from 'react';
import SimpleMap from './ReportMap/SimpleMap';
import Explain from './ReportMap/Explain';



function ReportMap({ props }) {
  const defaultAddress = localStorage.getItem("location");
  const [address, setAddress] = useState(defaultAddress!==undefined? defaultAddress:""); 
  return (
    <div className="d-flex flex-column">
      <Explain address={address}/>
      <SimpleMap  onAddressChanged={setAddress}/>
    </div>

  )
}

export default ReportMap

