import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import About from "./features/about/About";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink } from "./styled";
import { toAbout, toTask, toTasks } from "./routing";

const App = () => (
  <BrowserRouter basename="/todolist">
    <nav>
      <ul>
        <li>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAbout()}>O autorze</StyledNavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAbout()}>
        <About />
      </Route>
      <Route path="/">
        <Redirect to={toTasks()}/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
