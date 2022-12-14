import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";

function ModalEmp({show, handleClose}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          {/* <Button variant="primary" onClick={props.handleSubmit}>Update</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEmp;
