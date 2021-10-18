import React, { useState } from "react";
import { followupActions } from '../../../../../actions/followupActions';
import { useSelector } from "react-redux";
export default function FollowupCreate({ reportId }) {
    const { id } = useSelector(state => { return state.authentication.user });
    const [description, setDescription] = useState("");
    return (<div className="modal fade" id="createFollowup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">סיכום דיווח</h5>
                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div className="modal-body" dir="rtl">
                    <textarea
                        id=""
                        placeholder="תיאור דיווח"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-100" s
                        tyle={{ height: "200pt" }} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" 
                    data-bs-dismiss="modal">ביטול</button>
                    {/* user_id,followupDescription,reportId */}
                    <button type="button" className="btn btn-primary"
                        onClick={() => {
                            if (description!=="") {
                                console.log({ user_id: id, description, reportId });
                                // followupActions.createFollowup({ user_id: id, description, reportId })
                                
                            }
                        }
                        }>אישור</button>
                </div>
            </div>
        </div>
    </div>);
}