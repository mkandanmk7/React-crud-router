import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  return (
    <ListGroup>
      <ListGroupItem>UserOne</ListGroupItem>
      <div className="ml-auto"></div>
    </ListGroup>
  );
};
