
import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { followupActions } from '../../../../../actions/followupActions';


export default function FollowupCreate({ reportId }) {
    const dispatch = useDispatch();
    const { id } = useSelector(state => { return state.authentication.user });
    
    const [description, setDescription] = useState("");
    const show = useSelector(state => { return state.followups.isShow });
    useEffect(() => {
        setDescription("");
        
    }, []);

    const createFollowup = () => {
        if (description !== "") {            
            dispatch(followupActions.createFollowup({ user_id: id, description, report_id:reportId }));
        }
        
    }
    const handleClose = () => {setDescription("");dispatch(followupActions.createFollowupShowModal(false))};
    const handleShow = () => dispatch(followupActions.createFollowupShowModal(true));
    return (<div>
        <Button className="text-end d-flex" variant="primary" onClick={handleShow}>
            + הוסף דיווח
        </Button>
        <Modal dir="rtl" show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>סיכום דיווח</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea                    
                    placeholder="תיאור דיווח"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="w-100" 
                    autoFocus
                    style={{ height: "200pt" }} />
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn rounded-pill" variant="secondary" onClick={handleClose}>
                    ביטול
                </Button>
                <Button className="btn rounded-pill" variant="primary" onClick={createFollowup}>
                    אישור
                </Button>
            </Modal.Footer>
        </Modal>
    </div >
    );
}