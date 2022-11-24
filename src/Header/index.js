import "./style.css";
import React from "react";

const Header = ({ headerTitle, body, tasks, hideDoneTasks }) => {
    let headerButtons;
    if (body) {
        if (tasks.length) {
            headerButtons =
                <React.Fragment>
                    <button className="form__button form__button--listHeader">{hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}</button>
                    <button className="form__button form__button--listHeader" disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
                </React.Fragment>;
        }
        return <header className="section__header">
            <h2 className="section__h2--listHeader">{headerTitle}</h2>

            <div className="headerButtons">{headerButtons}</div>
        </header>;
    }
    return <h2 className="section__header">{headerTitle}</h2>;
};

export default Header;