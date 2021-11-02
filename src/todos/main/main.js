import React, { useContext } from "react";
import TodoItem from "./todoItem";
import TodosContext from "../context/context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  const { toggleAllTodo, todosItemsValue, hashValue } = useContext(TodosContext);
  const AllCompleted = todosItemsValue.every((elem) => elem.completed);

  const filteredTodos = todosItemsValue.filter((todo) => {
    switch (hashValue) {
      case "#/completed":
        return todo.completed === true;
      case "#/":
        return todo;
      case "#/active":
        return todo.completed === false;
    }
  });

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
        {filteredTodos.map((elem) => {
          return <TodoItem id={elem.id} key={elem.id} />;
        })}
      </ul>
    </section>
  );
}

export default Main;
