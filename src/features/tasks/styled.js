import styled from "styled-components";

export const HeaderButton = styled.button`
  transition: 1s;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  background: rgba(255, 255, 255, 0);
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;
