import {Main} from "./styled";

const Container = ({ children }) => (
    <Main>
        <header>
            <h1> Lista zadań </h1>
        </header>
        {children}
    </Main>
);

export default Container;