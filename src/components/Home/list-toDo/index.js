import React from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "./listItem.js";

function ToDoList(props) {
  return (
    <ListGroup>
      {props.data.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          handleDelete={props.handleDelete}
          handleSelected={props.handleSelected}
        />
      ))}
    </ListGroup>
  );
}

export default ToDoList;
