import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import About from "./features/about/About";
import TaskPage from "./features/tasks/TaskPage";
import { toAbout, toTask, toTasks } from "./routing";
import Navigation from "./common/Navigation";

const App = () => (
  <HashRouter basename="/todolist-react">
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
  </HashRouter>
);

export default App;
