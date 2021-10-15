import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reportActions } from "../../../actions/reportActions";
import { reportFilterProperty } from "../../../constants/report.constants";

export default function FilterReports() {
  
  const filterParam = useSelector(state => { ; return state.reports.property });
  const dispatch = useDispatch();
  const changeFilter = filtername => dispatch(reportActions.filterByProperty(filtername));
  return (<div className={`dropdown col-8 `}>
    <button className="btn dropdown-toggle filter-reports"
      type="button"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {` סנן לפי ${filterParam}`}
    </button>
    <ul className="dropdown-menu text-end dropdown-menu-end " aria-labelledby="dropdownMenuButton">
      <li>
        <button type="button" className="dropdown-item " onClick={() => { changeFilter(reportFilterProperty.DISTRESS) }} >{reportFilterProperty.DISTRESS}</button>
      </li>
      <li>
        <button type="button" className="dropdown-item " onClick={() => { changeFilter(reportFilterProperty.MALE) }} >{reportFilterProperty.MALE}</button>
      </li>
      <li>
        <button type="button" className="dropdown-item " onClick={() => { changeFilter(reportFilterProperty.FEMALE) }}>{reportFilterProperty.FEMALE}</button>
      </li>
    </ul>
  </div>);
}
