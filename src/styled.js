import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  .body {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    font-family: "Montserrat", sans-serif;
    max-height: 100%;
  }
`;

export const mainTheme = {
    colors: {
        bodyBackground: "#eee",
        primary: "hsl(180, 100%, 25%)",
        primaryHover: "hsl(180, 100%, 30%)",
        primaryActive: "hsl(180, 100%, 35%)",
    },
    breakpoints: {
        mobile: 767,
    },
};	