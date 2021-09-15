import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="d-flex">
        UserOne
        <div className="ml-auto">
          <Link to="/edit" className="btn btn-primary m-2">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};
