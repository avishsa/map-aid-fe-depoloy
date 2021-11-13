import { Modal,Button } from "react-bootstrap";
export default function ModalError({ show, onHide }) {

    return (<Modal
        dir="rtl"
        show={show}
        onHide={onHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
    >
        <Modal.Header >
            <Modal.Title class="text-danger " id="example-custom-modal-styling-title">
                הודעת שגיאה
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                יש לנעוץ את המיקום על המפה, על ידי לחיצה במפה על המיקום הרצוי. בסיום יופיע סמן כחול על המפה והכתובת תופיע מעל המפה
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button class="btn btn-danger" onClick={onHide}>סבבה</Button>
        </Modal.Footer>
    </Modal>);
}