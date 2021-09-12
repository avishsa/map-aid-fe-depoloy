import React from 'react';

import BtnWaze from "../../../../images/waze.png"

export default function ReportWazeBtn({ lon, lat }) {
    const wLon = lon ? lon : 34.789898;
    const wLat = lat ? lat : 32.10854;

    return (<div style={{ cursor: 'pointer' }} >
        <button className="btn d-flex flex-row align-items-center col-10"
            onClick={() => {
                window.location.href = `https://waze.com/ul?ll=${wLat},${wLon}&navigate=yes`;
            }}
        >
            <label style={{ cursor: 'pointer' }} htmlFor="BtnWaze" className="col-6"> נווט עם</label>
            <img
                alt="go2waze"
                id="BtnWaze"
                className="mx-2 float-none "
                src={BtnWaze}
                style={{ height: "10pt", width: "35pt" }}
            />
        </button>
    </div>)
}