import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import data from "../../data/data.json";
import ToDoList from "./list-toDo";
let uniqueNumber = 4;
function Home() {
  const [newItem, setNewItem] = React.useState("");
  const [listItems, setListItems] = React.useState(data);
  const [selectedId, setSelectedId] = React.useState([]);

  const addTodo = () => {
    let item = {
      id: uniqueNumber++,
      task: newItem,
      completed: false,
    };

    setListItems([...listItems, item]);
    setNewItem("");
  };

  const deleteTodo = (task) => {
    let items = listItems.filter((item) => item.id !== task.id);
    let selectedIdsItems = selectedId.filter((id) => task.id !== id);
    setSelectedId(selectedIdsItems);
    setListItems(items);
  };

  const handleSelected = (item) => {
    let index = selectedId.findIndex((id) => item.id === id);
    if (index !== -1) {
      let items = [...selectedId];
      items.splice(index, 1);
      setSelectedId(items);
    } else {
      setSelectedId([...selectedId, item.id]);
    }
  };

  const handleDeleteAll = () => {
    let items = listItems.filter(
      (item) => !selectedId.some((id) => item.id === id)
    );
    setListItems(items);
    setSelectedId([]);
  };
  return (
    <div className="container text-center main_container">
      <h1 className="main_heading">ToDo List</h1>
      <InputGroup className="input_form mb-3 main_input_form">
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          placeholder="New Task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <Button type="submit" onClick={addTodo}>
          Add
        </Button>
      </InputGroup>

      <ToDoList
        data={listItems}
        handleDelete={deleteTodo}
        handleSelected={handleSelected}
      />
      {selectedId.length > 1 && (
        <Button
          className="btn btn-danger"
          type="submit"
          onClick={handleDeleteAll}
        >
          Delete All
        </Button>
      )}
    </div>
  );
}

export default Home;
