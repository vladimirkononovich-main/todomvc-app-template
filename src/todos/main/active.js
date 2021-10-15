import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function Active({ value }) {
  return value.map((elem) => {
    if (elem.completed === false)
      return <TodoItem value={value} id={elem.id} key={elem.id} />;
  });
}

export default Active;
