import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";

function Completed({ value }) {
  return value.map((elem) => {
    if (elem.completed === true)
      return <TodoItem value={value} id={elem.id} key={elem.id} />;
  });
}

export default Completed;
