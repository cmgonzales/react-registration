import React from 'react';
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class User extends React.Component {
  render() {
    return (
      <div className = "user">
      <Container>
      <Row>
      <Col  md="4">
      <h1>Registration</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="name" id="exampleEmail" placeholder="Please enter name" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Email</Label>
          <Input type="password" name="email" id="examplePassword" placeholder="Please enter email" />
        </FormGroup>
        
        <Button>Submit</Button>
        
      </Form>
      </Col>
      </Row>
      </Container>
      </div>
    );
  }
}


