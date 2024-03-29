import styled from "styled-components";

export const StyledHeaderButton = styled.button`
  transition: 1s;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  background: rgba(255, 255, 255, 0);
  padding: 0;

  &.error{
    color: red;
  }

  &.hidden{
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryActive};
  }
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;