import React, { useEffect, useRef, useState } from "react";
import HeaderInput from "./todos/header/headerInput";
import Main from "./todos/main/main";
import Footer from "./todos/footer/footer";
import FooterInfo from "./todos/footerInfo/footerInfo";
import TodosContext from "./todos/context/context";

function App() {
  const [hashValue, setHash] = useState(window.location.hash);
  const [todoItemValue, setTodoItem] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );
  // alex: useEffect
  localStorage.setItem("value", JSON.stringify(todoItemValue));

  const addNewTodo = (event) => {
    if (event.code === "Enter" && event.target.value.trim()) {
      setTodoItem(
        // alex: could use spread operator
        todoItemValue.concat([
          {
            title: event.target.value,
            id: performance.now(),
            completed: false,
            editing: false,
            editingValue: event.target.value,
          },
        ])
      );
      event.target.value = null;
    }
  };
  const toggleTodo = (id) => {
    setTodoItem(
      todoItemValue.map((elem) => {
        if (elem.id === id) elem.completed = !elem.completed;
        // alex: don't mutate original object, use spread { ...elem, completed }
        return elem;
      })
    );
  };
  const toggleAllTodo = () => {
    const checkAllCompleted = todoItemValue.every((elem) => elem.completed);
    setTodoItem(
      todoItemValue.map((elem) => {
        if (checkAllCompleted) elem.completed = false;
        else elem.completed = true;
        return elem;
      })
    );
  };
  const removeTodo = (id) => {
    setTodoItem(
      todoItemValue.filter((elem) => {
        return elem.id !== id;
      })
    );
  };
  const removeCompleted = () => {
    setTodoItem(
      todoItemValue.filter((elem) => {
        return elem.completed !== true;
      })
    );
  };
  const handleEdit = (id, event) => {
    setTodoItem(
      todoItemValue.map((elem) => {
      // alex: nice!
        if (elem.id === id) elem.editingValue = event.target.value;
        return elem;
      })
    );
  };
  const editingTodo = (id) => {
    setTodoItem(
      todoItemValue.map((elem) => {
        // alex: why toggle instead of true?
        if (elem.id === id) elem.editing = !elem.editing;
        return elem;
      })
    );
  };
  const editedTodo = (id, event) => {
    setTodoItem(
      todoItemValue.map((elem) => {
        // alex: can guard if by id first instead of repeating condition
        if (elem.id === id && event.code === "Enter") {
          elem.title = elem.editingValue;
          elem.editing = false;
        }
        if (elem.id === id && event.code === "Escape") {
          elem.editing = false;
        }
        return elem;
      })
    );
  };
  const onBlurEditTodo = (id) => {
    setTodoItem(
      todoItemValue.map((elem) => {
        if (elem.id === id) elem.editing = false;
        return elem;
      })
    );
  };
  if (hashValue !== window.location.hash) {
    setHash(window.location.hash);
  }

  return (
    <TodosContext.Provider
      value={{
        todoItemValue,
        addNewTodo,
        toggleTodo,
        removeTodo,
        toggleAllTodo,
        removeCompleted,
        editingTodo,
        handleEdit,
        editedTodo,
        onBlurEditTodo,
        hashValue,
      }}
    >
      <>
        <section className="todoapp">
          <HeaderInput />
          {todoItemValue.length > 0 ? (
            <Main todoItemValue={todoItemValue} />
          ) : null}
          {todoItemValue.length > 0 ? (
            <Footer todoItemValue={todoItemValue} />
          ) : null}
        </section>
        <FooterInfo />
      </>
    </TodosContext.Provider>
  );
}

export default App;
