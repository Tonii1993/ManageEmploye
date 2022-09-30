import Employee from "./Employee";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import ModalEmp from "./ModalEmp";
import { Button, Alert } from "react-bootstrap";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);

  const [showAlert, setShowAlert] = useState(false);
  console.log(showAlert);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  console.log("sorted", sortedEmployees);

  useEffect(() => {
    handleClose();

    return () => {
      console.log("deleteddddddd");
      handleShowAlert();

      return () => {
        handleShowAlert()
      }}
  }, [ sortedEmployees.length ]);
  console.log("alertiiiii", showAlert);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPageNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  // console.log('employeees ndryshoiiiiii', employees);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage<b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i class="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert show={showAlert} variant="success">
        <span>You Add an Employee Succesfully!!!!!</span>
      </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
          <ModalEmp show={show} handleClose={handleClose} />
        </tbody>
      </table>
      <Pagination
        pages={totalPageNum}
        setCurrentpage={setCurrentPage}
        currentEmployees={currentEmployees}
        sortedEmployees={sortedEmployees}
      />
    </>
  );
};

export default EmployeeList;
