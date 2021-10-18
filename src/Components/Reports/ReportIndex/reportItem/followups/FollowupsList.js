
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { followupActions } from '../../../../../actions/followupActions';
import FollowupCreate from './FollowupCreate';
export default function FollowupsList({reportId}) {
    const dispatch = useDispatch();
    const followups = useSelector(state => { return state.followups });

    useEffect(() => {
        dispatch(followupActions.getFollowupsByReportId(followups?.reportId));
    }, [dispatch]);
    return (<div>
        {followups && followups.map(el => {
            const user_fullname = followupActions.getUserByid(el.userId);
            return (
                <div>{el.description}
                    {user_fullname}
                </div>)
        })}
        
        <button

            data-bs-toggle="modal" data-bs-target="#createFollowup"
            className="btn btn-primary"
        >
            + הוסף דיווח
        </button>
        <FollowupCreate reportId={reportId}/>
    </div>
    );
}