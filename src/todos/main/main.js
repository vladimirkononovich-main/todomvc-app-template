import React, { useContext } from "react";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";
import Completed from "./completed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Active from "./active";

function Main() {
  const { toggleAllTodo, todosItemsValue, hashValue } = useContext(TodosContext);
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
        {todosItemsValue.map((elem) => {
          if (elem.completed === true && hashValue === "#/completed") {
            return <TodoItem id={elem.id} key={elem.id} />;
          }
          if (hashValue === "#/") {
            return <TodoItem id={elem.id} key={elem.id} />;
          }
          if (elem.completed === false && hashValue === "#/active") {
            return <TodoItem id={elem.id} key={elem.id} />;
          }
        })}
      </ul>
    </section>
  );
}

export default Main;
