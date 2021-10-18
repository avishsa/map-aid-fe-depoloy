import React, { useState } from 'react';

import ReportDescriptionBtn from './reportItem/ReportDescriptionBtn';
import ReportIcons from './reportItem/ReportIcons';
import ReportWazeBtn from './reportItem/ReportWazeBtn';
import ReportTimeLocation from './reportItem/ReportTimeLocation';
import ReportStatusChange from './reportItem/ReportStatusChange';
import FollowupsList from './reportItem/followups/FollowupsList';
//color according to : HandledByMe = red NotHandled - green  handledBySomeOne else - blank
export default function ReportItem({ report, LOGGEDUSER, patchReport }) {
    const [description, setDescription] = useState(false);

    const getDescripionBtn = () => {
        
        return description ? (<ReportDescriptionBtn
            style={{ cursor: 'pointer' }}
            onclick={(e) => { setDescription(false); e.stopPropagation(); }}
            text="-"
            reportId={report.id}
        />)
            : (<ReportDescriptionBtn
                style={{ cursor: 'pointer' }}
                onclick={(e) => { setDescription(true); e.stopPropagation(); }}
                text="+"
                reportId={report.id}
            />)
    }
    const reportDate = new Date(report.report_datetime);

    return (<div
        className="d-flex flex-column bd-highlight">

        <div className="d-flex mb-3 flex-row bd-highlight justify-content-between ">
            <ReportTimeLocation date={reportDate} location={report.person_location} />
            <ReportIcons
                gender={report.person_gender}
                shirtColor={report.person_shirt_color}
                pantsColor={report.person_pants_color}
            />
        </div>

        <div >
            <div className="d-flex  flex-row bd-highlight align-items-center justify-content-between">
                {getDescripionBtn()}
                <ReportWazeBtn lng={report.location_lng} lat={report.location_lat} />
                <ReportStatusChange
                    status={report.status}
                    reportId={report.id}
                    reportUserIdHandler={report.user_id_handler}
                    loggedUser={LOGGEDUSER}
                />
            </div>
        </div>
        {
            description && (<div className="d-flex flex-column bd-highlight">
                <div className="d-flex">{report.person_general_description}</div>
                <div className="d-flex"><FollowupsList  reportId={report.id}/></div>
            </div>)
        }
    </div>
    );
}
//