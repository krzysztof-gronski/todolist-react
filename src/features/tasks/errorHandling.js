import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearLoadingError } from "./tasksSlice";

export const useLoadingErrorAlert = (loadingError, sampleTaskButtonRef) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingError) {
      (async () => {
        sampleTaskButtonRef.disabled = true;
        sampleTaskButtonRef.current.classList.toggle("error");
        for (let i = 0; i < 10; i++) {
          sampleTaskButtonRef.current.classList.toggle("hidden");
          await new Promise((res) => setTimeout(res, 300));
        }
        sampleTaskButtonRef.current.classList.toggle("error");
        dispatch(clearLoadingError());
      })();
    }
  });
};
