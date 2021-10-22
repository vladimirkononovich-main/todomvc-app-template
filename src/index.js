import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
  useLocation,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HashRouter>
        <Switch>
          <App />
        </Switch>
      </HashRouter>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
