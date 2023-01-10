import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import { watchGetSampleTasks } from "./features/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: { tasks: tasksReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchGetSampleTasks);
