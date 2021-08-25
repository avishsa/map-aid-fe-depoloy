import React, { Component }  from 'react';
import FilterReports from './FilterReports';
import SortReports from './SortReports';
export default function FormReports() {
    return (<div  className="d-flex flex-row justify-content-between bd-highlight ">
        <FilterReports/>
        <SortReports/>
    </div>);
}
