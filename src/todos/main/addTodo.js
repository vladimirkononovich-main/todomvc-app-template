import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function AddTodo({ value }) {
  return value.map((elem) => {
    return <TodoItem value={value} id={elem.id} key={elem.id} />;
  });
}

export default AddTodo;
