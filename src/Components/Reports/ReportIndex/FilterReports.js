import React, { Component, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from '../../boilerplate/form/Select';
const onChange = (value) => {

}
const valueToLabel = { 'distress': 'מצוקה', 'male': 'גברים', 'female': 'נשים', '': '' }

export default function FilterReports({ onChange }) {
  const [filterParam, setFilterParam] = useState('');
  const changeFilter = (filtername) => {
    debugger;
    setFilterParam(filtername); 
    onChange(filtername);   
  }
  return (<div className={`dropdown `}>
    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {`סנן לפי ${valueToLabel[filterParam]}`}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item text-end" onClick={() => { changeFilter('distress') }} >מצוקה</a>
      <a className="dropdown-item text-end" onClick={() => { changeFilter('male') }} >גברים</a>
      <a className="dropdown-item text-end" onClick={() => { changeFilter('female') }}>נשים</a>
    </div>
  </div>);
}
