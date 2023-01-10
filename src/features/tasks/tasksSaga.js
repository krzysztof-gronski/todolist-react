import { takeEvery, call, put } from "redux-saga/effects";
import { getSampleTasks, setSampleTasks } from "./tasksSlice";
import { fetchSampleTasks } from "./api";

function* getSampleTasksWorker() {
  try {
    const sampleTasks = yield call(fetchSampleTasks);
    yield put(setSampleTasks(sampleTasks));
  } catch (error) {
    yield call(alert, "Błąd pobierania danych.");
  }
}

export function* watchGetSampleTasks() {
  yield takeEvery(getSampleTasks.type, getSampleTasksWorker);
}
