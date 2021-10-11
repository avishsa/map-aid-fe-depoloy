import React from 'react';
import { getDDMMYYYY, getHHMM } from "../../../../Utilities/TimeFormatter";
export default function ReportTimeLocation({ date, location }) {
    return (<div className="d-flex  flex-row bd-highlight">
        <div className="d-flex  mx-1 flex-column col-4 text-end">
            <div>{getDDMMYYYY(date)}</div>
            <div>{getHHMM(date)}</div>
        </div>
        <div className="col-7 text-end"> {location}</div>
    </div>)
}