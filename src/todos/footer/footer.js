import React, { useContext, useDebugValue, useEffect, useState } from "react";
import TodosContext from "../context/context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer({ value }) {
  const { removeCompleted, hashValue } = useContext(TodosContext);

  let result = value.filter((elem) => {
    return elem.completed === false;
  });

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{result.length}</strong> item
        {result.length === 0 || result.length > 1 ? "s" : null} left
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
      {value.length > result.length ? (
        <button className="clear-completed" onClick={() => removeCompleted()}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
}

export default Footer;
