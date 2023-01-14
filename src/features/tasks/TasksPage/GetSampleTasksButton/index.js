import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadingErrorAlert } from "../../errorHandling";
import {
  fetchSampleTasks,
  selectLoading,
  selectLoadingError,
} from "../../tasksSlice";
import { StyledHeaderButton } from "../HeaderButton";

export const GetSampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  let loadingError = useSelector(selectLoadingError);
  const sampleTaskButtonRef = useRef(null);
  useLoadingErrorAlert(loadingError, sampleTaskButtonRef);
  
  return (
    <StyledHeaderButton
      disabled={loading}
      onClick={() => dispatch(fetchSampleTasks())}
      ref={sampleTaskButtonRef}
    >
      {loadingError
        ? "Błąd pobierania danych!"
        : loading
        ? "Ładowanie..."
        : "Pobierz przykładowe zadania"}
    </StyledHeaderButton>
  );
};
