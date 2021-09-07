import React from 'react';
import BtnWaze from "../../../../images/waze.png"
export default function ReportWazeBtn() {
    return (<div style={{ cursor: 'pointer' }} >
        <a className="d-flex flex-row align-items-center col-10" href={`https://waze.com/ul?ll=${45.6906304},${-120.810983}&navigate=yes`}>
            <label style={{ cursor: 'pointer' }} htmlFor="BtnWaze" className="col-6"> נווט עם</label>
            <img
                alt="go2waze"
                id="BtnWaze"
                className="mx-2 float-none "
                src={BtnWaze}
                style={{ height: "10pt", width: "35pt" }}
            />
        </a>
    </div>)
}