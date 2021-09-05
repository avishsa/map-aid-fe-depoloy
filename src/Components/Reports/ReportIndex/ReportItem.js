import React, { useState } from 'react';
import { getDDMMYYYY, getHHMM } from "../../../Utilities/TimeFormatter";
import { GiTrousers, GiTShirt } from "react-icons/gi";
import WomanLogo from "../../../images/woman.png";
import ManLogo from "../../../images/man.png";
import BtnWaze from "../../../images/waze.png"
import { assignReport } from "../../../api/reports";
import ReportDescriptionBtn from './reportItem/ReportDescriptionBtn';

//color according to : HandledByMe = red NotHandled - green  handledBySomeOne else - blank
export default function ReportItem({ report, LOGGEDUSER, patchReport }) {
    const [description, setDescription] = useState(false);
    const assignReportToMe = (reportId, userId) => {
        debugger;
        console.log('assignReport');
        assignReport(reportId, userId)
            .then(res => {
                console.log("success", res);
                patchReport(reportId, userId);
            })
            .catch(res => { console.log("failure", res); });
    }
    const getDescripionBtn = () => {
        if(!report.person_general_description)
            return <ReportDescriptionBtn/>
        return description ? (<ReportDescriptionBtn 
            style={{ cursor: 'pointer' }} 
            onclick={() => { setDescription(false); }} 
            text="-"/>) 
        : (<ReportDescriptionBtn 
            style={{ cursor: 'pointer' }} 
            onclick={() => { setDescription(true); }} 
            text="+"/> )
    }
    return (<div
        className={`d-flex flex-column bd-highlight`} onClick={() => { if (!report.user_id_handler) { assignReportToMe(report.id, LOGGEDUSER) } }}>
        <div className="d-flex  flex-row bd-highlight justify-content-between">
            <div className="d-flex col-10 flex-row bd-highlight">
                <div className="d-flex  flex-column col-4">
                    <div>{getDDMMYYYY(report.report_datetime)}</div>
                    <div>{getHHMM(report.report_datetime)}</div>
                </div>
                <div className="col-8"> {report.person_location}</div>
            </div>
            <div className=" d-flex flex-row">
                <div className=" d-flex flex-column">
                    <GiTShirt className="icon" style={{display:'inline',color: report.person_shirt_color || "#000000", zIndex: 9 }} />
                    <GiTrousers className="icon" style={{ display:'inline',color: report.person_pants_color || "#000000", zIndex: 9 }} />
                </div>
                <div>
                    {report.person_gender === 'זכר' && <img alt='man' src={ManLogo} className="icon"  />}
                    {report.person_gender === 'נקבה' && <img alt='woman' src={WomanLogo}  className="icon"/>}
                </div>

            </div>
        </div>

        <div className="d-flex flex-row bd-highlight">
            {getDescripionBtn()}

            <div style={{ cursor: 'pointer' }} className="d-flex flex-row align-items-center ">
                <a href={`https://waze.com/ul?ll=${45.6906304},${-120.810983}&navigate=yes`}>
                <label style={{ cursor: 'pointer' }} htmlFor="BtnWaze" className=""> נווט עם</label>
                <img 
                alt="go2waze" 
                id="BtnWaze" 
                className="mx-2 float-none " 
                src={BtnWaze} 
                style={{ height: "10pt", width: "35pt" }} 
                
                />
                </a>
            </div>
        </div>

        {
            description && (<div className="d-flex flex-row bd-highlight">
                <div>{report.person_general_description}</div>

            </div>)

        }
    </div>);
}