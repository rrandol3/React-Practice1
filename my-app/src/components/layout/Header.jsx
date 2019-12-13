import React from "react";
import logo from "../../logo.svg";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Header
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
