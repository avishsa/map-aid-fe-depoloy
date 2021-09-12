import React, { useState } from 'react';
import { assignReport } from "../../../api/reports";
import ReportDescriptionBtn from './reportItem/ReportDescriptionBtn';
import ReportIcons from './reportItem/ReportIcons';
import ReportWazeBtn from './reportItem/ReportWazeBtn';
import ReportTimeLocation from './reportItem/ReportTimeLocation';
//color according to : HandledByMe = red NotHandled - green  handledBySomeOne else - blank
export default function ReportItem({ report, LOGGEDUSER, patchReport }) {
    const [description, setDescription] = useState(false);
    const assignReportToMe = (reportId, userId) => {
        console.log("assignReportToMe");
        debugger;
        if (report.user_id_handler!==null && report.user_id_handler!==undefined) return;
        assignReport(reportId, userId)
            .then(res => {
                console.log("success", res);
                patchReport(reportId, userId);
            })
            .catch(res => { console.log("failure", res); });
    }
    const getDescripionBtn = () => {
        if (!report.person_general_description)
            return <ReportDescriptionBtn />
        return description ? (<ReportDescriptionBtn
            style={{ cursor: 'pointer' }}
            onclick={() => { setDescription(false); }}
            text="-" />)
            : (<ReportDescriptionBtn
                style={{ cursor: 'pointer' }}
                onclick={() => { setDescription(true); }}
                text="+" />)
    }
    const reportDate = new Date(report.report_datetime);
    console.log(report.isHandled,report.id)
    return (<div
        className="d-flex flex-column bd-highlight" 
        onClick={() => { assignReportToMe(report.id, LOGGEDUSER) }}>
        <div className="d-flex  flex-row bd-highlight justify-content-between">
            <div className="d-flex flex-column  col-10 bd-highlight">
                <ReportTimeLocation date={reportDate} location={report.person_location} />
                <div className="d-flex  flex-row bd-highlight align-items-center">
                {getDescripionBtn()}
                <ReportWazeBtn lon={report.lon} lat={report.lat}/>
                </div>
            </div>
            <ReportIcons
                gender={report.person_gender}
                shirtColor={report.person_shirt_color}
                pantsColor={report.person_pants_color}
            />
        </div>
        {
            description && (<div className="d-flex flex-row bd-highlight">
                <div>{report.person_general_description}</div>
            </div>)
        }
    </div>
    );
}
//