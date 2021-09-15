import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <container>
        <NavbarBrand href="/">My Team </NavbarBrand>
      </container>
    </Navbar>
  );
};
