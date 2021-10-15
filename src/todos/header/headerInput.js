import React, { useContext } from "react";
import TodosContext from "../context/context";

function HeaderInput() {
  const { addNewTodo } = useContext(TodosContext);

  let result;
  const handleChange = (event) => {
    result = event.target.value;
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={result}
        onInput={handleChange}
        onKeyDown={addNewTodo}
      />
    </header>
  );
}
export default HeaderInput;
