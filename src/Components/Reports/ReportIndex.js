import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import NavReports from '../Reports/ReportIndex/NavReports'
import FormReports from './ReportIndex/FormReports';
import ReportItem from './ReportIndex/ReportItem';

import { reportActions } from "../../actions/reportActions";
import "../../css/report/reportIndex.css"




export default function ReportIndex() {

    const user = useSelector(state => { return state.authentication.user });
    const reports = useSelector(state => { return state.reports });
    const filterParam = useSelector(state => { ; return state.reports.property });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reportActions.getAll(user.id));
    }, [dispatch, user]);


    const getBorderColor = (isHandled) => {

        switch (isHandled) {
            case true: return 'rgb(66, 91, 206)';
            case false: return 'green';
            default: return 'rgb(136 ,137, 138)';
        }
    }


    return (<div className="d-flex flex-column justify-content-center" /*style={{height:"410pt"}}*/>

        <div id="headerPage" style={{"position": "fixed","top":"70pt","width": "100%","zIndex": "1040","backgroundColor":"rgb(233, 236, 241)"}}>
            {user.name && <h1 className="text-end">{`היי ${user.name}`}</h1>}
            <NavReports />
            {filterParam !== undefined && <FormReports />}
        </div>
        {reports.items_filtered && (<ul dir="ltr" className="list-group overflow-auto" style={{marginTop:"100pt", paddingInlineStart: '0 !important' }}>
            {reports.items_filtered.map((report, index) => (
                <li dir="rtl" className="list-group-item my-2"
                    style={{ 'borderTop': `solid ${getBorderColor(report.isHandled)} 3pt` }}
                    key={index}>
                    <ReportItem LOGGEDUSER={user.id} report={report} />
                </li>
            ))}
        </ul>)}

    </div>);

}
