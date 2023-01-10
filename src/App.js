import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import About from "./features/about/About";


const App = () => (
  <BrowserRouter>
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
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
