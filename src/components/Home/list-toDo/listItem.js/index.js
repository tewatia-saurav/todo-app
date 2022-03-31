import React from "react";
import { ListGroup, Form } from "react-bootstrap";

function ListItem(props) {
  const [item, setItem] = React.useState(props.item);

  const handleCheck = () => {
    setItem({ ...item, complete: !item.complete });
    props.handleSelected(item);
  };
  const pClass = item.complete ? "task_label checked" : "task_label";
  return (
    <ListGroup.Item key={item.id}>
      <Form.Check
        className="task_checkbox"
        type={"checkbox"}
        id={`default-checkbox`}
        onClick={() => handleCheck(item)}
        checked={item.complete}
      />
      <span className={`${pClass}`} onClick={() => props.handleUpdate(item)}>
        {item.task}
      </span>
      <i
        className="bi bi-trash"
        style={{ color: "red" }}
        onClick={() => props.handleDelete(item)}
      />
    </ListGroup.Item>
  );
}

export default ListItem;
