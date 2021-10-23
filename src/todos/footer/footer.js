import React, { useContext, useDebugValue, useEffect, useState } from "react";
import TodosContext from "../context/context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
  const { removeCompleted, hashValue, todosItemsValue } = useContext(TodosContext);

  const notCompletedTodo = todosItemsValue.filter((elem) => {
    return elem.completed === false;
  });

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{notCompletedTodo.length}</strong> item
        {notCompletedTodo.length === 0 || notCompletedTodo.length > 1 ? "s" : null} left
      </span>

      <ul className="filters">
        <li>
          <Link className={hashValue == "#/" ? "selected" : null} to="/">
            All
          </Link>
        </li>
        <li>
          <Link
            className={hashValue == "#/active" ? "selected" : null}
            to="/active"
          >
            Active
          </Link>
        </li>
        <li>
          <Link
            className={hashValue == "#/completed" ? "selected" : null}
            to="/completed"
          >
            Completed
          </Link>
        </li>
      </ul>
      {todosItemsValue.length > notCompletedTodo.length ? (
        <button className="clear-completed" onClick={() => removeCompleted()}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
}

export default Footer;
