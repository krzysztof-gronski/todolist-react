import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import About from "./features/about/About";
import TaskPage from "./features/tasks/TaskPage";
import { toAbout, toTask, toTasks } from "./routing";
import Navigation from "./common/Navigation";

const App = () => (
  <BrowserRouter basename="/todolist">
    <Navigation/>

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
