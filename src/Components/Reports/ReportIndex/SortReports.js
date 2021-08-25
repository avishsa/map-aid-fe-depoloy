import React, { Component,useState }  from 'react';

export default function SortReports() {
    const [incDateSort,setDateSort] = useState(true);
    return (<div  style={{cursor: 'pointer'}} className={`d-flex flex-row bd-highlight `}>
        {incDateSort && (<div onClick={()=>setDateSort(false)}>מהישן לחדש</div>)}
        {!incDateSort && (<div onClick={()=>setDateSort(true)}>מהחדש לישן</div>)}
    </div>);
}