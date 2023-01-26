import {
  takeEvery,
  call,
  put,
  select,
  takeLatest,
  delay,
} from "redux-saga/effects";
import {
  fetchSampleTasks,
  fetchSampleTasksError,
  fetchSampleTasksSuccess,
  selectHideDone,
  selectTasks,
} from "./tasksSlice";
import { getSampleTasks } from "./api";
import { saveHideDone, saveTasks } from "../../common/localStorage";

function* getSampleTasksWorker() {
  try {
    yield delay(1000);
    const sampleTasks = yield call(getSampleTasks);

    if (typeof sampleTasks === "string") {
      throw new Error("ihg");
    }  //yield put(fetchSampleTasksError());

    else yield put(fetchSampleTasksSuccess(sampleTasks));
  } catch (error) {
    yield put(fetchSampleTasksError());
  }
}

function* saveState() {
  const tasks = yield select(selectTasks);
  const hideDone = yield select(selectHideDone);

  yield call(saveTasks, tasks);
  yield call(saveHideDone, hideDone);
}

export function* tasksSaga() {
  yield takeLatest(fetchSampleTasks.type, getSampleTasksWorker);
  yield takeEvery("*", saveState);
}
