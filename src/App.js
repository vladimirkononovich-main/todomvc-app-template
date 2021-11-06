import React, { useEffect, useRef, useState } from "react";
import HeaderInput from "./todos/header/headerInput";
import Main from "./todos/main/main";
import Footer from "./todos/footer/footer";
import FooterInfo from "./todos/footerInfo/footerInfo";
import TodosContext from "./todos/context/context";

function App() {
  const [hashValue, setHash] = useState(window.location.hash);
  const [todosItemsValue, setTodosItems] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(todosItemsValue));
  });

  const newTodo = (todoTitle) => {
    setTodosItems([
      ...todosItemsValue,
      {
        title: todoTitle,
        id: performance.now(),
        completed: false,
        editing: false,
        editingValue: todoTitle,
      },
    ]);
  };
  const toggleTodo = (id) => {
    setTodosItems(
      todosItemsValue.map((elem) => {
        if (elem.id === id) return { ...elem, completed: !elem.completed };
        return elem;
      })
    );
  };
  const toggleAllTodo = () => {
    setTodosItems(
      todosItemsValue.map((elem) => {
        if (todosItemsValue.every((elem) => elem.completed)) {
          return { ...elem, completed: false };
        } else {
          return { ...elem, completed: true };
        }
      })
    );
  };
  const removeTodo = (id) => {
    setTodosItems(
      todosItemsValue.filter((elem) => {
        return elem.id !== id;
      })
    );
  };
  const removeCompleted = () => {
    setTodosItems(
      todosItemsValue.filter((elem) => {
        return elem.completed !== true;
      })
    );
  };
  const handleEdit = (id, event) => {
    setTodosItems(
      todosItemsValue.map((elem) => {
        if (elem.id === id) {
          return { ...elem, editingValue: event.target.value };
        }
        return elem;
      })
    );
  };
  const editingTodo = (id) => {
    setTodosItems(
      todosItemsValue.map((elem) => {
        if (elem.id === id) {
          return { ...elem, editing: true };
        }
        return elem;
      })
    );
  };
  const editedTodo = (id, event) => {
    setTodosItems(
      todosItemsValue.map((elem) => {
        if (elem.id === id) {
          if (event.code === "Enter" && elem.editingValue.trim()) {
            return { ...elem, title: elem.editingValue, editing: false };
          }
          if (event.code === "Escape") {
            return { ...elem, editing: false };
          }
        }
        return elem;
      })
    );
  };
  const onBlurEditTodo = (id) => {
    setTodosItems(
      todosItemsValue.map((elem) => {
        if (elem.id === id) {
          return { ...elem, editing: false };
        }
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
        todosItemsValue,
        newTodo,
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
          {todosItemsValue.length > 0 ? <Main /> : null}
          {todosItemsValue.length > 0 ? <Footer /> : null}
        </section>
        <FooterInfo />
      </>
    </TodosContext.Provider>
  );
}

export default App;
