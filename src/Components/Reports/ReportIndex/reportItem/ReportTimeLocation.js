import React from 'react';
import { getDDMMYYYY, getHHMM } from "../../../../Utilities/TimeFormatter";
export default function ReportTimeLocation({ date, location }) {
    return (<div className="d-flex col-10 flex-row bd-highlight">
        <div className="d-flex  flex-column col-4">
            <div>{getDDMMYYYY(date)}</div>
            <div>{getHHMM(date)}</div>
        </div>
        <div className="col-8"> {location}</div>
    </div>)
}