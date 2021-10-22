import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function Completed() {
  const { todoItemValue } = useContext(TodosContext);

  return todoItemValue.map((elem) => {
    if (elem.completed === true) return <TodoItem id={elem.id} key={elem.id} />;
  });
}

export default Completed;
