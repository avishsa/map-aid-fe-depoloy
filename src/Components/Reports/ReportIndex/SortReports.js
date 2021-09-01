import React, { Component, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from '../../boilerplate/form/Select';


const valueToLabel = {'incDate':'מהחדש לישן', 'decDate':'מהישן לחדש','':''}
export default function SortReports({ onChange }) {   
    const changeOrder = (orderName) => {
        setSortParam(orderName); 
        onChange(orderName);   
      }
    const [sortParam, setSortParam] = useState('');
    return (<div style={{ cursor: 'pointer' }} className={`d-flex flex-row bd-highlight `}>
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {`מיין ${valueToLabel[sortParam]}`}     
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item text-end" onClick={() => { changeOrder('incDate')}} >מהחדש לישן</a>
      <a className="dropdown-item text-end" onClick={() => {changeOrder('decDate') }} >ישן לחדש</a>
    </div>
        
    </div>);
}