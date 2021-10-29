
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { followupActions } from '../../../../../actions/followupActions';
import FollowupCreate from './FollowupCreate';
export default function FollowupsList({reportId}) {
    const dispatch = useDispatch();
    const followups= useSelector(state => { return state.followups });
    
    useEffect(() => {        
        dispatch(followupActions.getFollowupsByReportId(reportId));
    }, [dispatch]);
    
    
    return (<div className="mt-3">
        <ul className="mb-3">
        {followups.items[reportId] && followups.items[reportId].map((el,i) => {
            
            // const user_fullname = `${el.user_first_name} ${el.user_last_name} `;          
            const user_fullname =el.full_name ? `${el.full_name}`: `${el.user_id}`;
            return (
                <li dir="rtl" key={`${el.id}_${i}`} className="d-flex flex-column ">
                    <div className="text-end mb-1" style={{color:"blue"}}>{user_fullname} </div>
                    <div className="text-end">{el.description}</div>                    
                </li>)
        })} 
        </ul>      
        <FollowupCreate reportId={reportId}/>
    </div>
    );
}