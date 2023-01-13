import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAreEveryTasksDone,
  selectAreTasksEmpty,
  selectHideDone,
  toggleHideDone,
  setAllDone,
} from "../../tasksSlice";
import { GetSampleTasksButton } from "../GetSampleTasksButton";
import { StyledHeaderButton } from "../HeaderButton";
import { SectionHeader, ListHeader, ButtonsHeader } from "./styled";

const Header = ({ headerTitle, body, sampleTasksFlag }) => {
  let headerButtons;
  const areEveryTasksDone = useSelector(selectAreEveryTasksDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  if (body) {
    if (!areTasksEmpty) {
      headerButtons = (
        <>
          <StyledHeaderButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </StyledHeaderButton>
          <StyledHeaderButton
            disabled={areEveryTasksDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </StyledHeaderButton>
        </>
      );
    }
    return (
      <SectionHeader>
        <ListHeader>{headerTitle}</ListHeader>
        <ButtonsHeader>{headerButtons}</ButtonsHeader>
      </SectionHeader>
    );
  } else if (sampleTasksFlag) {
    return (
      <SectionHeader>
        <ListHeader>{headerTitle}</ListHeader>
        <GetSampleTasksButton/>
      </SectionHeader>
    );
  }
  return (
    <SectionHeader>
      <ListHeader>{headerTitle}</ListHeader>
    </SectionHeader>
  );
};

export default Header;
