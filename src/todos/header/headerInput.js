import React, { useContext, useState } from "react";
import TodosContext from "../context/context";

function HeaderInput() {
  const { newTodo } = useContext(TodosContext);
  const [titleValue, setTitle] = useState("");

  const addNewTodo = (event) => {
    setTitle(event.target.value);
    if (event.code === "Enter" && titleValue.trim()) {
      newTodo(titleValue);
      setTitle("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={titleValue}
        onInput={addNewTodo}
        onKeyDown={addNewTodo}
      />
    </header>
  );
}
export default HeaderInput;
