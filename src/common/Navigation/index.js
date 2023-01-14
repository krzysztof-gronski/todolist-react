import React from "react";
import { toAbout, toTasks } from "../../routing";
import { Item, List, StyledNavLink } from "./styled";

const Navigation = () => (
  <nav>
    <List>
      <Item>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={toAbout()}>O autorze</StyledNavLink>
      </Item>
    </List>
  </nav>
);

export default Navigation;
