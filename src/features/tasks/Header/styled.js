import styled from "styled-components";

export const SectionHeader = styled.header`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  border-bottom: 1px solid #ddd;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const ListHeader = styled.h2`
  margin-block-end: 0;
  margin-block-start: 0;
`;

export const ButtonsHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;
