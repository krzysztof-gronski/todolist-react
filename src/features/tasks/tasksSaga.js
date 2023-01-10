import { takeEvery, call, put, select, takeLatest } from "redux-saga/effects";
import {
  getSampleTasks,
  selectHideDone,
  selectTasks,
  setSampleTasks,
} from "./tasksSlice";
import { fetchSampleTasks } from "./api";
import { saveHideDone, saveTasks } from "../../common/localStorage";

function* getSampleTasksWorker() {
  try {
    const sampleTasks = yield call(fetchSampleTasks);
    yield put(setSampleTasks(sampleTasks));
  } catch (error) {
    yield call(alert, "Błąd pobierania danych.");
  }
}

function* saveState() {
  const tasks = yield select(selectTasks);
  const hideDone = yield select(selectHideDone);
  yield call(saveTasks, tasks);
  yield call(saveHideDone, hideDone);
}

export function* tasksSaga() {
  yield takeLatest(getSampleTasks.type, getSampleTasksWorker);
  yield takeEvery("*", saveState);
}
