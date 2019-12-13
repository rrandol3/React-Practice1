import React from "react";
import logo from "../../logo.svg";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-center"
    >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Footer
      </Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
