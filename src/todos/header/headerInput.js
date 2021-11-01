import React, { useContext } from "react";
import TodosContext from "../context/context";

function HeaderInput() {
  const { newTodo } = useContext(TodosContext);

  const handleChange = (event) => {
    return event.target.value;
  };
  const addNewTodo = (event) => {
    if (event.code === "Enter" && event.target.value.trim()) {
      newTodo(event)
      event.target.value = null;
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onInput={handleChange}
        onKeyDown={addNewTodo}
      />
    </header>
  );
}
export default HeaderInput;
