import React from 'react'
import {Form, Button, Container} from "react-bootstrap"

export default function CreateProfile() {
  function storeUserInfo(){
    //store user info in local storage.
    //when the user creates an accout, assign the principal to the info in local storage
    //in backend
  }
  return (
    <Container>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter here..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter here..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Job title</Form.Label>
        <Form.Control type="text" placeholder="Enter here..." />
      </Form.Group>
      <Button variant="primary">
        Submit
      </Button>
      </Form>
    </Container>

  )
}
