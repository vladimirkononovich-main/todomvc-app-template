import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function Completed() {
  const { todosItemsValue } = useContext(TodosContext);
  return todosItemsValue.map((elem) => {
    if (elem.completed === true) return <TodoItem id={elem.id} key={elem.id} />;
  });
}

export default Completed;
