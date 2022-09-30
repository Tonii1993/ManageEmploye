import React from 'react';
import { Button, Modal } from "react-bootstrap";
import EditForm from './EditForm';


function EditModal({theemployee, handleClose, show}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditForm theEmployee={theemployee} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
         </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditModal;