import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Jumbotron, Button, CardDeck, Card, Table } from "react-bootstrap";
// import people from "../../mockdata/people.json";
import actionCreators from "../../redux/people/actions.js";

class List extends Component {
  //runs on component load
  async componentDidMount() {
    const { getPeopleList } = this.props;
    await getPeopleList();
  }
  render() {
    const { peopleList, addPerson } = this.props;
    return (
      <div>
        <Jumbotron>
          <h1>List of People</h1>
        </Jumbotron>
        {/* <Button onClick={() => addPerson()}>Add Person</Button> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Age</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Balance</th>
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
