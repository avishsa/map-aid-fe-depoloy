import { Modal,Button } from "react-bootstrap";
export default function ModalError({ show, onHide }) {

    return (<Modal
        dir="rtl"
        show={show}
        onHide={onHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
    >
        <Modal.Header >
            <Modal.Title id="example-custom-modal-styling-title">
                הודעת שגיאה
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                יש לנעוץ את המיקום על המפה, על ידי לחיצה במפה על המיקום הרצוי. בסיום יופיע סמן כחול על המפה והכתובת תופיע מעל המפה
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>סגור</Button>
        </Modal.Footer>
    </Modal>);
}