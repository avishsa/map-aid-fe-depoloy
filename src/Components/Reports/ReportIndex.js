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
        debugger;
        dispatch(reportActions.getAll(user.id,sessionStorage.getItem('token')));
    }, [dispatch, user]);


    const getBorderColor = (isHandled) => {

        switch (isHandled) {
            case true: return 'rgb(66, 91, 206)';
            case false: return 'green';
            default: return 'rgb(136 ,137, 138)';
        }
    }


    return (<div className="d-flex flex-column justify-content-center" >

        <div id="headerPage" className="headerPage" >
            {user.name && <h1 className="text-end">{`היי ${user.name}`}</h1>}
            <NavReports />
            {filterParam !== undefined && <FormReports />}
        </div>
        {reports.items_filtered && (<ul dir="ltr" className="list-group " style={{ marginTop:'120pt',paddingInlineStart: '0 !important' }}>
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
