import React, { useRef, useContext, useEffect, useDebugValue } from "react";
import TodosContext from "../context/context";

function TodoItem({ id }) {
  const {
    toggleTodo,
    removeTodo,
    editingTodo,
    handleEdit,
    editedTodo,
    onBlurEditTodo,
    todosItemsValue,
  } = useContext(TodosContext);

  const textEditInput = useRef(null);

  useEffect(() => {
    textEditInput.current.focus();
  });

  const classes = [];
  let completed;
  let title;
  let editingValue;
  
  todosItemsValue.forEach((elem) => {
    if (elem.id === id) {
      if (elem.completed === true) classes.push("completed");
      if (elem.editing === true) classes.push("editing");

      completed = elem.completed;
      title = elem.title;
      editingValue = elem.editingValue;
    }
  });
  return (
    <li className={classes.join(" ")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toggleTodo(id)}
          checked={completed}
        />
        <label onDoubleClick={() => editingTodo(id)}>{title}</label>
        <button className="destroy" onClick={() => removeTodo(id)}></button>
      </div>
      <input
        className="edit"
        id={id}
        ref={textEditInput}
        value={editingValue}
        onInput={(event) => handleEdit(id, event)}
        onKeyDown={(event) => editedTodo(id, event)}
        onBlur={() => onBlurEditTodo(id)}
      ></input>
    </li>
  );
}

export default TodoItem;
