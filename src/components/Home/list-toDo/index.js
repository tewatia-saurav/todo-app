import React from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "./listItem.js";

function ToDoList(props) {
  return (
    <ListGroup>
      {props.data.map((item) => (
        <ListItem
          item={item}
          key={item.task}
          handleDelete={props.handleDelete}
          handleSelected={props.handleSelected}
          handleUpdate={props.handleUpdate}
        />
      ))}
    </ListGroup>
  );
}

export default ToDoList;
