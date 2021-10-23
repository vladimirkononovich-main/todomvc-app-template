import React, { useContext } from "react";
import TodosContext from "../context/context";

function HeaderInput() {
  const { addNewTodo } = useContext(TodosContext);

  const handleChange = (event) => {
    return event.target.value;
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
