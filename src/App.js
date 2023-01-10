import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import About from "./features/about/About";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
  <BrowserRouter basename="/todolist">
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/about">O autorze</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
