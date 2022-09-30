import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import EditModal from "./EditModal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn btn-warning btn-act"
            data-toggle="modal"
          >
            <i class="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={() => deleteEmployee(employee.id)}
            className="btn btn-danger btn-act"
            data-toggle="modal"
          >
            <i class="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>
      <EditModal handleClose={handleClose} show={show} theemployee={employee} />
    </>
  );
};

export default Employee;
