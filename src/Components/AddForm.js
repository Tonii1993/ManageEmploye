import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const onInputChange = (e) => {
    setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
  };

  const {name, email, address, phone} = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone)
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            autoFocus
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={address}
            placeholder="Address"
            onChange={(e) => onInputChange(e)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter your phone number"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
      </Form>
    </>
  );
};

export default AddForm;
