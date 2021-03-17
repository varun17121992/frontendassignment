import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../Assets/bluestacks.png";

function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#1f2640" }} variant="light">
        <Navbar.Brand className="container mr-auto pl-5" href="#home">
          <img
            alt="logo"
            src={logo}
            width="170"
            height="60"
            className="d-inline- align-top"
          />
          {"   "}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
