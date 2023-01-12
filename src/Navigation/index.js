import React from "react";
import { StyledNavLink } from "../common/StyledLink/styled";
import { toAbout, toTasks } from "../routing";

const Navigation = () => (
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
);

export default Navigation;
