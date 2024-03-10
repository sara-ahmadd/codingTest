import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GoPlus } from "react-icons/go";

function AddNewBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="add-btn p-0" onClick={handleShow}>
        <GoPlus fontSize={28} />
        <p className="m-0 p-0 fs-small-13 parag-btn ">Add New</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modal-bg-color">
          Form to add new employee
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-pale-red"
            variant="secondary"
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            className="bg-pale-blue"
            variant="secondary"
            onClick={handleClose}
          >
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewBtn;
