import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TasksListContent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: hsl(120, 100%, 25%);
  color: white;
  padding: 0px;
  text-decoration: none;
  transition: 1s;

  &:hover {
    background-color: hsl(120, 100%, 35%);
    cursor: pointer;
  }
  &:active {
    background-color: hsl(120, 100%, 40%);
  }
`;

export const RemoveButton = styled(Button)`
  background-color: hsl(348, 83%, 47%);

  &:hover {
    background-color: hsl(348, 83%, 57%);
  }
  &:active {
    background-color: hsl(348, 83%, 62%);
  }
`;

export const ListItemContent = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkPrimary};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;
