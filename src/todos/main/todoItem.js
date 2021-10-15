import React, { useRef, useContext, useEffect, useDebugValue } from "react";
import TodosContext from "../context/context";

function TodoItem({ value, id }) {
  const {
    toggleTodo,
    removeTodo,
    editingTodo,
    handleEdit,
    editedTodo,
    onBlurEditTodo,
  } = useContext(TodosContext);

  const textEditInput = useRef(null);

  useEffect(() => {
    textEditInput.current.focus();
  });

  const classes = [];
  let completed;
  let title;
  let editing;
  let editingValue;
  value.map((elem) => {
    if (elem.id === id && elem.completed === true) {
      classes.push("completed");
      completed = true;
    }
    if (elem.id === id && elem.editing === true) editing = "editing";
    if (elem.id === id) title = elem.title;
    if (elem.id === id) editingValue = elem.editingValue;
  });
  return (
    <li className={classes[0] + " " + editing}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toggleTodo(id)}
          checked={completed || ""}
        />
        <label onDoubleClick={() => editingTodo(id)}>{title}</label>
        <button className="destroy" onClick={() => removeTodo(id)}></button>
      </div>
      <input
        className="edit"
        id={id}
        ref={textEditInput}
        value={editingValue}
        onInput={handleEdit.bind(this, id)}
        onKeyDown={editedTodo.bind(this, id)}
        onBlur={() => onBlurEditTodo(id)}
      ></input>
    </li>
  );
}

export default TodoItem;
