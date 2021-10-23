import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function Active() {
  const { todosItemsValue } = useContext(TodosContext);
  return todosItemsValue.map((elem) => {
    if (elem.completed === false)
      return <TodoItem id={elem.id} key={elem.id} />;
  });
}

export default Active;
