import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadingErrorAlert } from "../../errorHandling";
import {
  fetchSampleTasks,
  selectStatus,
} from "../../tasksSlice";
import { StyledHeaderButton } from "../HeaderButton";

export const GetSampleTasksButton = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const sampleTaskButtonRef = useRef(null);
  useLoadingErrorAlert(status, sampleTaskButtonRef);
  
  return (
    <StyledHeaderButton
      disabled={status==="loading"}
      onClick={() => dispatch(fetchSampleTasks())}
      ref={sampleTaskButtonRef}
    >
      {status==="error"
        ? "Błąd pobierania danych!"
        : status==="loading"
        ? "Ładowanie..."
        : "Pobierz przykładowe zadania"}
    </StyledHeaderButton>
  );
};
