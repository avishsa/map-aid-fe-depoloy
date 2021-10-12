import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import {reportActions} from "../../../actions/reportActions";


const valueToLabel = {'incDate':'מהחדש לישן', 'decDate':'מהישן לחדש','':''}
export default function SortReports() {   
    
    const [sortParam, setSortParam] = useState('incDate');
    const dispatch = useDispatch();;
    const changeOrder = (orderName) => {
      setSortParam(orderName); 
      dispatch(reportActions.sort(orderName));      
    }
    return (<div style={{ cursor: 'pointer'  }} className={`d-flex flex-row justify-content-end bd-highlight dropdown   `}>
        <button className="btn dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {` ${valueToLabel[sortParam]} `}     
    </button>
    <ul className="dropdown-menu text-end dropdown-menu-end" aria-labelledby="dropdownMenuButton">
    
      <li><button type="button" className="dropdown-item"  onClick={() => { changeOrder('incDate')}} >מהחדש לישן</button>
      </li>
      <li>
      <button type="button" className="dropdown-item" onClick={() => {changeOrder('decDate') }} >ישן לחדש</button>
      </li>
    </ul>
        
    </div>);
}