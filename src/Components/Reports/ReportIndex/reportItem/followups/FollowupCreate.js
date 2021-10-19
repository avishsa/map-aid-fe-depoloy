
import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { followupActions } from '../../../../../actions/followupActions';
/**
 * <button

            data-bs-toggle="modal" data-bs-target="#createFollowup"
            className="btn btn-primary"
        >

        </button>
 */
import { useSelector } from "react-redux";
export default function FollowupCreate({ reportId }) {
    const { id } = useSelector(state => { return state.authentication.user });
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);
    const createFollowup = () => {
        if (description !== "") {
            console.log({ user_id: id, description, reportId });
            followupActions.createFollowup({ user_id: id, description, reportId })
            handleClose();
        }
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Button className="text-end d-flex" variant="primary" onClick={handleShow}>
            + הוסף דיווח
        </Button>
        <Modal dir="rtl" show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>סיכום דיווח</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    id=""
                    placeholder="תיאור דיווח"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="w-100" s
                    tyle={{ height: "200pt" }} />
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
    </>
    );
}