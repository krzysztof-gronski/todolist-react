import "./style.css";

const Container = ({ children }) => (
    <main className="container">
        <header className="header">
            <h1> Lista zadań </h1>
        </header>
        {children}
    </main>
);

export default Container;