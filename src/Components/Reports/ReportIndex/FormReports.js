import React  from 'react';

import FilterReports from './FilterReports';
import SortReports from './SortReports';
export default function FormReports({filterResults,sortResults}) {
    
    return (<div  className="d-flex flex-row justify-content-between bd-highlight ">
        
        <FilterReports name="filter" onChange={filterResults}/>
        <SortReports onChange={sortResults}/>
        
    </div>);
}
