import React, { useEffect, useRef, useState } from "react";
import HeaderInput from "./todos/header/headerInput";
import Main from "./todos/main/main";
import Footer from "./todos/footer/footer";
import FooterInfo from "./todos/footerInfo/footerInfo";
import TodosContext from "./todos/context/context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
  useLocation,
} from "react-router-dom";

function App() {
  const storage = JSON.parse(localStorage.getItem("value"));
  const [hashValue, setHash] = useState(window.location.hash);
  const [value, setValue] = useState(storage || []);
  localStorage.setItem("value", JSON.stringify(value));

  const addNewTodo = (event) => {
    if (event.code === "Enter" && event.target.value.trim()) {
      setValue(
        value.concat([
          {
            title: event.target.value,
            id: performance.now(),
            completed: false,
            editing: false,
            editingValue: event.target.value,
            hash: window.location.hash,
          },
        ])
      );
      event.target.value = null;
    }
  };
  console.log(value.map((e) => e.hash));
  const toggleTodo = (id) => {
    setValue(
      value.map((elem) => {
        if (elem.id === id) elem.completed = !elem.completed;
        return elem;
      })
    );
  };
  const toggleAllTodo = () => {
    let result;
    value.map((elem) => {
      if (elem.completed == false) result = false;
    });
    setValue(
      value.map((elem) => {
        result == false ? (elem.completed = true) : (elem.completed = false);
        return elem;
      })
    );
  };
  const removeTodo = (id) => {
    setValue(
      value.filter((elem) => {
        return elem.id !== id;
      })
    );
  };
  const removeCompleted = () => {
    setValue(
      value.filter((elem) => {
        return elem.completed !== true;
      })
    );
  };
  const handleEdit = (id, event) => {
    setValue(
      value.map((elem) => {
        if (elem.id === id) elem.editingValue = event.target.value;
        return elem;
      })
    );
  };

  const editingTodo = (id) => {
    setValue(
      value.map((elem) => {
        if (elem.id === id) elem.editing = !elem.editing;
        return elem;
      })
    );
  };
  const editedTodo = (id, event) => {
    setValue(
      value.map((elem) => {
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
    setValue(
      value.map((elem) => {
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
        value,
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
      <Router>
        <HashRouter>
          <Switch>
            <>
              <section className="todoapp">
                <HeaderInput />
                {value.length > 0 ? <Main value={value} /> : null}
                {value.length > 0 ? <Footer value={value} /> : null}
              </section>
              <FooterInfo />
            </>
          </Switch>
        </HashRouter>
      </Router>
    </TodosContext.Provider>
  );
}

export default App;
