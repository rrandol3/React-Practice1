import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import List from "./components/people/List";
import PersonForm from "./components/people/PersonForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid" id="content">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/people">
              <List />
            </Route>
            <Route path="/person">
              <PersonForm />
            </Route>
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
