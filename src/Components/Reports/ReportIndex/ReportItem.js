import React, { Component } from 'react';
import { getDDMMYYYY, getHHMM } from "../../../Utilities/TimeFormatter";
import { GiTrousers, GiTShirt } from "react-icons/gi";
import WomanLogo from "../../../images/woman.png";
import ManLogo from "../../../images/man.png";
import BtnWaze from "../../../images/waze.png"

//color according to : HandledByMe = red NotHandled - green  handledBySomeOne else - blank
export default function ReportItem({ report }) {
    console.log(report);
    return (<div className={`d-flex flex-column bd-highlight `}>

        <div className="d-flex  flex-row bd-highlight">
            <div className="d-flex col-8 flex-row bd-highlight">
                <div className="d-flex  flex-column col-4">
                    <div>{getDDMMYYYY(report.report_datetime)}</div>
                    <div>{getHHMM(report.report_datetime)}</div>
                </div>
                <div className="col-4"> {report.person_location}</div>
            </div>
            <div className="col-4 d-flex flex-row">
                <div >
                    <GiTShirt style={{ height: "50pt", width: "50pt", color: report.person_shirt_color || "#000000", zIndex: 9 }} />
                    <GiTrousers style={{ height: "50pt", width: "50pt", color: report.person_pants_color || "#000000", zIndex: 9 }} />
                </div>
                <div>
                    {report.person_gender === 'זכר' && <img src={ManLogo} style={{ height: "50pt", width: "50pt" }} />}
                    {report.person_gender === 'נקבה' && <img src={WomanLogo} style={{ height: "50pt", width: "50pt" }} />}

                </div>

            </div>
        </div>
        <div className="d-flex  flex-row bd-highlight">
            <div className="">
                +
            </div>
            <div className="">
                <label htmlFor="BtnWaze"> נווט עם</label>
                <img id="BtnWaze" src={BtnWaze} style={{ height: "50pt", width: "50pt" }}/>
            </div>
        </div>
    </div>);
}