import React, { useContext } from "react";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";
import Completed from "./completed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Active from "./active";

function Main() {
  const { toggleAllTodo, todosItemsValue } = useContext(TodosContext);
  const AllCompleted = todosItemsValue.every((elem) => elem.completed);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={() => toggleAllTodo()}
        checked={AllCompleted}
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        <Route exact path="/">
          <AddTodo />
        </Route>
        <Route path="/active">
          <Active />
        </Route>
        <Route path="/completed">
          <Completed />
        </Route>
      </ul>
    </section>
  );
}

export default Main;
