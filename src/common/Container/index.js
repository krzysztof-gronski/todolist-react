import { Main } from "./styled";

const Container = ({ children, title }) => (
  <Main>
    <header>
      <h1> {title} </h1>
    </header>
    {children}
  </Main>
);

export default Container;
