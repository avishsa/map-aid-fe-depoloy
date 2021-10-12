import React from 'react';
import { useDispatch } from 'react-redux';
import { reportActions } from '../../../../actions/reportActions';
import { reportConstants } from '../../../../constants/report.constants';

export default function ReportStatusChange({ status,reportId, reportUserIdHandler,loggedUser }) {
    const dispatch = useDispatch();
    function closeStatus() {
        dispatch(reportActions.updateStatus(reportId,reportConstants.CLOSED));
    }
    switch (status) {
        case true: {
            return (
                <div className="d-flex flex-row">
                    <button
                        className="mx-1 btn btn-primary"
                        onClick={() => {
                            dispatch(reportActions.unassignHandler(reportId, reportUserIdHandler, loggedUser));
                        }}> הסר מטיפולי</button>
                    <button className="btn btn-secondary" onClick={closeStatus}> סגור דיווח</button>
                </div>
            )
        }
        case false: {
            return (
                <div className=" d-flex flex-row">
                    <button
                        className="mx-1 btn rounded-pill btn-success"
                        onClick={() => { dispatch(reportActions.assignHandler(reportId, reportUserIdHandler, loggedUser)); }}>
                        העבר לטיפולי</button>
                    <button className="btn rounded-pill close-report-btn" 
                    onClick={ closeStatus}> סיום טיפול</button>
                </div>
            )
        }
        default: return null;
    }
}