import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <container>
        <NavbarBrand href="/">My Team </NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-warning">
              Add-User
            </Link>
          </NavItem>
        </Nav>
      </container>
    </Navbar>
  );
};
