import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function Active() {
  const { todoItemValue } = useContext(TodosContext);

  return todoItemValue.map((elem) => {
    if (elem.completed === false)
      return (
        <TodoItem todoItemValue={todoItemValue} id={elem.id} key={elem.id} />
      );
  });
}

export default Active;
