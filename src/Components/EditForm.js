import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({ theEmployee }) => {
  const id = theEmployee.id;

  const [name, setName] = useState(theEmployee.name);
  const [email, setEmail] = useState(theEmployee.email);
  const [address, setAddress] = useState(theEmployee.address);
  const [phone, setPhone] = useState(theEmployee.phone);

  const { updateEmployee } = useContext(EmployeeContext);
  const updatedEmployee = {id, name, email, address, phone};

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee)
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
            onChange={(e)=> setName(e.target.value)}
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
            onChange={(e)=> setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} name="address" value={address} onChange={(e)=> setAddress(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter your phone number"
            name="phone"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit" block>
          Edit Employee
        </Button>
      </Form>
    </>
  );
};

export default EditForm;
