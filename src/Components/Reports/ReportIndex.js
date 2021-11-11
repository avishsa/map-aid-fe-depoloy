import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import NavReports from '../Reports/ReportIndex/NavReports'
import FormReports from './ReportIndex/FormReports';
import ReportItem from './ReportIndex/ReportItem';

import { reportActions } from "../../actions/reportActions";
import "../../css/report/reportIndex.css"
import { reportStatus } from '../../constants/report.constants';




export default function ReportIndex() {
    
    const user = useSelector(state => { return state.authentication.user });
    const reports = useSelector(state => { return state.reports });
    const filterParam = useSelector(state => { ; return state.reports.property });
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        dispatch(reportActions.getAllHandled(user.id,sessionStorage.getItem('token')));
        dispatch(reportActions.getAllPending(null,sessionStorage.getItem('token')));
    }, [dispatch, user]);


    const getBorderColor = status => {       
        
        switch (status) {
            case reportStatus.HANDLED: return 'rgb(66, 91, 206)';
            case reportStatus.DONE: return 'rgb(136 ,137, 138)';
            case reportStatus.PENDING: return 'green';
            default: 
            return 'green';
            
        }
    }


    return (<div className="d-flex flex-column justify-content-center" >

        <div id="headerPage" className="headerPage" >
            {user.first_name && user.last_name && <h1 className="text-end">{`היי ${user.first_name} ${user.last_name}`}</h1>}
            <NavReports />
            {filterParam !== undefined && <FormReports />}
        </div>
        {reports.items_filtered && (<ul dir="ltr" className="list-group " style={{ marginTop:'100pt',paddingInlineStart: '0 !important' }}>
            {reports.items_filtered.map((report, index) => (
                <li dir="rtl" className="list-group-item my-2"
                    style={{ 'borderTop': `solid ${getBorderColor(report.status)} 3pt` }}
                    id={`${report.id}_${index}`}
                    key={`${report.id}_${index}`}>
                    <ReportItem LOGGEDUSER={user.id} report={report} />
                </li>
            ))}
        </ul>)}

    </div>);

}
