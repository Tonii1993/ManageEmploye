import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import ModalEmp from "./ModalEmp";


const Employee = ({employee}) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const[show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
        <td>
        <button className="btn btn-warning btn-act" data-toggle="modal">
            <i class="material-icons" data-toggle="tooltip" title="Edit">
              &#xE254;
            </i>
          </button>
          <button onClick={() => deleteEmployee(employee.id)} className="btn btn-danger btn-act" data-toggle="modal">
            <i class="material-icons" data-toggle="tooltip" title="Delete">
              &#xE872;
            </i>
          </button>
        </td>
        <ModalEmp title='Edit Employee' />
    </>
  ); 
};

export default Employee;
