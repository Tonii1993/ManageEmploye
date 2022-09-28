import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = () => {
  const { updateEmployee } = useContext(EmployeeContext);

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} name="address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter your phone number"
            name="phone"
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
