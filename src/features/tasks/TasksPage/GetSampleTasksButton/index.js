import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSampleTasks, selectLoading } from "../../tasksSlice";
import { StyledHeaderButton } from "../HeaderButton";

export const GetSampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <StyledHeaderButton
      disabled={loading}
      onClick={() => dispatch(fetchSampleTasks())}
    >
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </StyledHeaderButton>
  );
};
