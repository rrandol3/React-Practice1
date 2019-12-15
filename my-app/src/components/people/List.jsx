import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Jumbotron, Button, CardDeck, Card, Table } from "react-bootstrap";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
// import people from "../../mockdata/people.json";
import actionCreators from "../../redux/people/actions.js";

class List extends Component {
  async componentDidMount() {
    const { getPeopleList } = this.props;
    await getPeopleList();
  }

  updatePersonBtnClick = async id => {
    const { getPerson } = this.props;
    await getPerson(id);
  };

  removePersonBtnClick = async id => {
    const { removePerson } = this.props;
    await removePerson(id);
  };

  render() {
    const { redirectToPerson, peopleList } = this.props;
    if (redirectToPerson) {
      return <Redirect to="/person" />;
    }
    return (
      <div>
        <Jumbotron>
          <h1>List of People</h1>
        </Jumbotron>
        <Link to="/person">
          <Button type="button">Add New Person</Button>
        </Link>
        <br></br>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Age</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Balance</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {peopleList.map(person => (
              <tr key={person._id}>
                <th scope="row">{person.age}</th>
                <td>{person.name}</td>
                <td>{person.company}</td>
                <td>{person.email}</td>
                <td>{person.balance}</td>
                <td>
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => this.updatePersonBtnClick(person._id)}
                  >
                    Update Person
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => this.removePersonBtnClick(person._id)}
                  >
                    Remove Person
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(
  state => state.people,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(List);
