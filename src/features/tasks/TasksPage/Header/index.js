import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAreEveryTasksDone,
  selectAreTasksEmpty,
  selectHideDone,
  toggleHideDone,
  setAllDone,
  fetchSampleTasks,
} from "../../tasksSlice";
import { SectionHeader, ListHeader, ButtonsHeader } from "./styled";
import { HeaderButton } from "../../styled";

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
          <HeaderButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </HeaderButton>
          <HeaderButton
            disabled={areEveryTasksDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </HeaderButton>
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
        <HeaderButton onClick={() => dispatch(fetchSampleTasks())}>
          Pobierz przykładowe zadania
        </HeaderButton>
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
