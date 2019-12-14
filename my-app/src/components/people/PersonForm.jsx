import React from "react";
import { Jumbotron, Button, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonForm = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Person Form</h1>
        <p>Simple React App</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default PersonForm;
