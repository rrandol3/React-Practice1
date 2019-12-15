import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../../redux/people/actions.js";
import {
  Jumbotron,
  Button,
  CardDeck,
  Card,
  Form,
  Container
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

class PersonForm extends Component {
  handelSubmit = async event => {
    event.preventDefault();
    const person = {
      // _id: "5df45951ac4535345dce28",
      age: event.target.age.value,
      name: event.target.name.value,
      company: event.target.company.value,
      email: event.target.email.value,
      balance: event.target.balance.value
    };
    const { addPerson } = this.props;
    await addPerson(person);
  };
  render() {
    const { redirectToPeople, person } = this.props;
    console.log(person.name);
    if (redirectToPeople) {
      return <Redirect push to="/people"></Redirect>;
    }
    return (
      <div>
        <Jumbotron>
          <h1>Person Form</h1>
          <p>Simple React App</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Container>
          <Form onSubmit={this.handelSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                defaultValue={person.name}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                defaultValue={person.age}
              />
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                defaultValue={person.company}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={person.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="balance">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter current balance"
                defaultValue={person.balance}
              />
            </Form.Group>
            {/* onClick={() => addPerson()} */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default connect(
  state => state.people,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(PersonForm);
