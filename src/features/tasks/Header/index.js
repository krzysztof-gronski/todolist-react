import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { SectionHeader, ListHeader, ButtonsHeader, ListHeaderButton } from "./styled";

const Header = ({ headerTitle, body }) => {
    let headerButtons;
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (body) {
        if (tasks.length) {
            headerButtons =
                <React.Fragment>
                    <ListHeaderButton onClick={() => dispatch(toggleHideDone())}>{hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}</ListHeaderButton>
                    <ListHeaderButton disabled={tasks.every(({ done }) => done)} onClick={() => dispatch(setAllDone())}>Ukończ wszystkie</ListHeaderButton>
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