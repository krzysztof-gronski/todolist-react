import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAreEveryTasksDone, selectAreTasksEmpty, selectHideDone, toggleHideDone, setAllDone } from "../tasksSlice";
import {
  SectionHeader,
  ListHeader,
  ButtonsHeader,
  ListHeaderButton,
} from "./styled";

const Header = ({ headerTitle, body }) => {
  let headerButtons;
  const areEveryTasksDone = useSelector(selectAreEveryTasksDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);
  
  const dispatch = useDispatch();

  if (body) {
    if (!areTasksEmpty) {
      headerButtons = (
        <React.Fragment>
          <ListHeaderButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </ListHeaderButton>
          <ListHeaderButton
            disabled={areEveryTasksDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </ListHeaderButton>
        </React.Fragment>
      );
    }
    return (
      <SectionHeader>
        <ListHeader>{headerTitle}</ListHeader>
        <ButtonsHeader>{headerButtons}</ButtonsHeader>
      </SectionHeader>
    );
  }
  return <SectionHeader>{headerTitle}</SectionHeader>;
};

export default Header;
