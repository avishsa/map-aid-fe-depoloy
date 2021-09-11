import React, { useState } from 'react';


const valueToLabel = { 'distress': 'מצוקה', 'male': 'גברים', 'female': 'נשים', '': '' }

export default function FilterReports({ onChange }) {
  const [filterParam, setFilterParam] = useState('');
  const changeFilter = (filtername) => {
    debugger;
    setFilterParam(filtername); 
    onChange(filtername);   
  }
  return (<div className={`dropdown `}>
    <button className="btn dropdown-toggle" 
    type="button"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {`סנן לפי ${valueToLabel[filterParam]}`}
    </button>
    <ul className="dropdown-menu text-end dropdown-menu-end " aria-labelledby="dropdownMenuButton">
      <li>
        <button type="button" className="dropdown-item " onClick={() => { changeFilter('distress') }} >מצוקה</button>
      </li>
      <li>
        <button type="button" className="dropdown-item " onClick={() => { changeFilter('male') }} >גברים</button>
      </li>
      <li>
        <button type="button" className="dropdown-item " onClick={() => { changeFilter('female') }}>נשים</button>
      </li>
    </ul>
  </div>);
}
