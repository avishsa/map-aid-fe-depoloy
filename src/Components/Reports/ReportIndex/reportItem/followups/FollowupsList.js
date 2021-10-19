
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { followupActions } from '../../../../../actions/followupActions';
import FollowupCreate from './FollowupCreate';
export default function FollowupsList({reportId}) {
    const dispatch = useDispatch();
    const followups = useSelector(state => { return state.followups.items });

    useEffect(() => {
        dispatch(followupActions.getFollowupsByReportId(reportId));
    }, [dispatch]);
    
    return (<div className="mt-3">
        <ul className="mb-3">
        {followups && followups.map(el => {
            
            const user_fullname = `${el.user_first_name} ${el.user_last_name} `;
            return (
                <li dir="rtl" className="d-flex flex-column ">
                    <div className="text-end mb-1" style={{color:"blue"}}>{user_fullname} </div>
                    <div className="text-end">{el.description}</div>
                    
                </li>)
        })} 
        </ul>      
        <FollowupCreate reportId={reportId}/>
    </div>
    );
}