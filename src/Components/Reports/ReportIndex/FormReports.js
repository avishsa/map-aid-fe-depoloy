import React  from 'react';

import FilterReports from './FilterReports';
import SortReports from './SortReports';
export default function FormReports() {

    return (<div  className="d-flex flex-row  bd-highlight ">
        
        <FilterReports />
        <SortReports />

        
    </div>);
}
