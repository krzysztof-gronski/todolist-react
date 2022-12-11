import React from "react";
import {SectionHeader,ListHeader,ButtonsHeader,ListHeaderButton} from "./styled";

const Header = ({ headerTitle, body, tasks, hideDone, toggleHideDone, setAllDone }) => {
    let headerButtons;
    if (body) {
        if (tasks.length) {
            headerButtons =
                <React.Fragment>
                    <ListHeaderButton onClick={toggleHideDone}>{hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}</ListHeaderButton>
                    <ListHeaderButton disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>Ukończ wszystkie</ListHeaderButton>
                </React.Fragment>;
        }
        return <SectionHeader>
            <ListHeader>{headerTitle}</ListHeader>
            <ButtonsHeader>{headerButtons}</ButtonsHeader>
        </SectionHeader>;
    }
    return <SectionHeader>{headerTitle}</SectionHeader>;
};

export default Header;