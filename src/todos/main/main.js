import React, { useContext } from "react";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";
import Completed from "./completed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Active from "./active";

function Main({ value }) {
  const { toggleAllTodo } = useContext(TodosContext);

  let result = [];
  value.map((elem) => {
    elem.completed === false ? result.push(false) : result.push(true);
  });
  let AllCompleted;
  if (result.includes(false)) AllCompleted = false;
  if (!result.includes(false) && result.includes(true)) AllCompleted = true;

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={() => toggleAllTodo()}
        checked={AllCompleted || ""}
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        <Route exact path='/'>
          <AddTodo value={value} />
        </Route>
        <Route path="/active">
          <Active value={value} />
        </Route>
        <Route path="/completed">
          <Completed value={value} />
        </Route>
      </ul>
    </section>
  );
}

export default Main;
