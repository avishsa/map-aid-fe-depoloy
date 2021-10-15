import React from 'react';
import { useDispatch } from 'react-redux';
import { reportActions } from '../../../../actions/reportActions';
import { reportStatus } from '../../../../constants/report.constants';

export default function ReportStatusChange({ status, reportId, reportUserIdHandler, loggedUser }) {
    const dispatch = useDispatch();
    function closeStatus() {        
        dispatch(reportActions.updateStatus(reportId, loggedUser))
    }
    
    switch (status) {
        case reportStatus.HANDLED: {
            return (
                <div className="d-flex flex-row">
                    <button
                        className="mx-1 btn rounded-pill btn-primary"
                        onClick={() => {
                            dispatch(reportActions.unassignHandler(reportId, reportUserIdHandler, loggedUser));
                        }}> הסר מטיפולי</button>
                    <button className="btn rounded-pill btn-secondary"
                        onClick={closeStatus}>
                        סיום טיפול</button>
                </div>
            )
        }
        case reportStatus.PENDING: {
            return (
                <div className=" d-flex flex-row">
                    <button
                        className="mx-1 btn rounded-pill btn-success"
                        onClick={() => { dispatch(reportActions.assignHandler(reportId, reportUserIdHandler, loggedUser)); }}>
                        העבר לטיפולי</button>
                    <button className="btn rounded-pill close-report-btn"
                        onClick={closeStatus}> סיום טיפול</button>
                </div>
            )
        }
        case reportStatus.DONE:{
            return (<div className=" d-flex flex-row">
                    <button
                        className="mx-1 btn rounded-pill btn-success"
                        onClick={() => { dispatch(reportActions.assignHandler(reportId, reportUserIdHandler, loggedUser)); }}>
                        העבר לטיפולי</button>                    
                </div>)
        }
        default: return null;
    }
}