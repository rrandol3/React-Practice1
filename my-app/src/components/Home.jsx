import React from "react";
import { Jumbotron, Button, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>People App</h1>
        <p>Simple React App</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <CardDeck>
        <Card>
          <Link to="/people">
            <Card.Body>
              <Card.Title>List of People</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/person">
            <Card.Body>
              <Card.Title>Add Person</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Update Person</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Remove Person</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Home;
