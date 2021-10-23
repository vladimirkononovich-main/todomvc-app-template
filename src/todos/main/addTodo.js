import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function AddTodo() {
  const { todosItemsValue } = useContext(TodosContext);
  return todosItemsValue.map((elem) => {
    return <TodoItem id={elem.id} key={elem.id} />;
  });
}

export default AddTodo;
