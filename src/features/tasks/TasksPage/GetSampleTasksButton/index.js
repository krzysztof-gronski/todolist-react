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

  // useEffect(() => {
  //   if (loadingError) {

  //     (async () => {
  //       sampleTaskButtonRef.disabled=true;
  //       sampleTaskButtonRef.current.classList.toggle("error");
  //       for (let i = 0; i < 10; i++) {
  //         sampleTaskButtonRef.current.classList.toggle("hidden");
  //         await new Promise((res) => setTimeout(res, 300));
  //       }
  //       sampleTaskButtonRef.current.classList.toggle("error");
  //       dispatch(clearLoadingError());
  //     })();
  //   }
  // }, [loadingError]);

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
