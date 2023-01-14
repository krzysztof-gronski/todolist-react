import styled from "styled-components";

export const RegularLink = styled.a`
  text-decoration: none;
  transition: 1s;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;
