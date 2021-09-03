import React, { useState } from 'react';
import { getDDMMYYYY, getHHMM } from "../../../Utilities/TimeFormatter";
import { GiTrousers, GiTShirt } from "react-icons/gi";
import WomanLogo from "../../../images/woman.png";
import ManLogo from "../../../images/man.png";
import BtnWaze from "../../../images/waze.png"
import { editReport } from "../../../api/reports";
const assignReportToMe = (reportId, userId) => {
    editReport(reportId, userId);
}

//color according to : HandledByMe = red NotHandled - green  handledBySomeOne else - blank
export default function ReportItem({ report ,LOGGEDUSER }) {
    const [description, setDescription] = useState(false);
    return (<div 
    className={`d-flex flex-column bd-highlight`} onClick={() => { assignReportToMe() }}>
        <div className="d-flex  flex-row bd-highlight">
            <div className="d-flex col-8 flex-row bd-highlight">
                <div className="d-flex  flex-column col-6">
                    <div>{getDDMMYYYY(report.report_datetime)}</div>
                    <div>{getHHMM(report.report_datetime)}</div>
                </div>
                <div className="col-2"> {report.person_location}</div>
            </div>
            <div className="col-4 d-flex flex-row">
                <div >
                    <GiTShirt style={{ height: "50pt", width: "50pt", color: report.person_shirt_color || "#000000", zIndex: 9 }} />
                    <GiTrousers style={{ height: "50pt", width: "50pt", color: report.person_pants_color || "#000000", zIndex: 9 }} />
                </div>
                <div>
                    {report.person_gender === 'זכר' && <img alt='man' src={ManLogo} style={{ height: "50pt", width: "50pt" }} />}
                    {report.person_gender === 'נקבה' && <img alt='woman' src={WomanLogo} style={{ height: "50pt", width: "50pt" }} />}
                </div>

            </div>
        </div>
        {
            report.person_general_description && (<div className="d-flex flex-row bd-highlight">
                {description ? (<div className="col-1" style={{ cursor: 'pointer' }} onClick={() => { setDescription(false); }}>
                    -
                </div>) : (<div className="col-1" style={{ cursor: 'pointer' }} onClick={() => { setDescription(true); }}>
                    +
                </div>)}
                <div style={{ cursor: 'pointer' }} className="d-flex flex-row align-items-center ">
                    <label style={{ cursor: 'pointer' }} htmlFor="BtnWaze" className=""> נווט עם</label>
                    <img alt="go2waze" id="BtnWaze" className="mx-2 float-none " src={BtnWaze} style={{ height: "10pt", width: "35pt" }} />
                </div>
            </div>)
        }
        {
            description && (<div className="d-flex flex-row bd-highlight">
                <div>{report.person_general_description}</div>

            </div>)

        }
    </div>);
}