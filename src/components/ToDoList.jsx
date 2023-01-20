import React, {useState} from "react";
import {Button, FormControl} from "react-bootstrap";
import {Form} from "react-bootstrap";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddToDo = (e) => {
    e.preventDefault();

    setToDoList([
      ...toDoList,
      {
        id: new Date().getTime(),
        name: inputValue,
        isFinished: false,
      },
    ]);
    console.log(toDoList);
    setInputValue("");
  };

  const handleDeleteToDo = (id) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };

  const handleFinishToDo = (id) => {
    let newToDoList = toDoList.map((item) => {
      return item.id === id ? {...item, isFinished: !item.isFinished} : item;
    });
    setToDoList(newToDoList);
  };

  return (
    <Form className="m-3" onSubmit={handleAddToDo}>
      <h1>Lista de tareas</h1>
      <div className="d-flex gap-3">
        <FormControl
          className="my-3"
          type="text"
          placeholder="Escriba su tarea"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="primary" size="lg">
          Agregar tarea
        </Button>
      </div>
      <h2>Tareas</h2>
      <ul>
        {toDoList.map((toDo) => (
          <li
            key={toDo.id}
            style={{
              textDecoration: toDo.isFinished ? "line-through" : "",
            }}
          >
            <input
              className="mx-2"
              type="checkbox"
              onChange={() => handleFinishToDo(toDo.id)}
            />
            {toDo.name}
            <Button
              className="mx-2"
              variant="dark"
              type="button"
              onClick={() => handleDeleteToDo(toDo.id)}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </Form>
  );
};
export default ToDoList;
