import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GoPlus } from "react-icons/go";
import FormComponent from "./form/FormComponent";
import { MdModeEditOutline } from "react-icons/md";

function AddNewBtn({ page }: { page: string }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {page === "employees" ? (
        <>
          <Button
            className="add-btn p-2"
            variant="secondary"
            onClick={() => setShow(true)}
          >
            <GoPlus fontSize={26} />
            <p className="m-0 p-0 fs-small-13 parag-btn text-start w-100">
              Add new
            </p>
          </Button>
        </>
      ) : (
        <>
          <span
            className="icons-under-employee-img"
            onClick={() => setShow(true)}
          >
            <MdModeEditOutline />
          </span>
        </>
      )}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <p className="modal-custom-title">New Employee</p>
        </Modal.Header>
        <Modal.Body>
          <FormComponent setShow={setShow} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewBtn;
