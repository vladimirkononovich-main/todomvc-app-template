import React, { useContext } from "react";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";
import Completed from "./completed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Active from "./active";

function Main() {
  const { toggleAllTodo, todoItemValue } = useContext(TodosContext);

  // alex: variable naming convention
  const AllCompleted = todoItemValue.every((elem) => elem.completed);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={() => toggleAllTodo()}
        checked={AllCompleted || "" /* alex: why not simply AllCompleted? */}
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {/* alex: just filter todos before rendering here, no need for 3 separate components */}
        <Route exact path="/">
          {/* alex: AllTodos? */}
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
