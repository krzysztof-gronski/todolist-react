import { createSlice } from "@reduxjs/toolkit";
import { getSavedHideDone, getSavedTasks } from "../../common/localStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getSavedTasks(),
    hideDone: getSavedHideDone(),
    status: "idle",
    sampleTaskButtonRef: null,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskIndex }) => {
      const index = tasks.findIndex(({ id }) => id === taskIndex);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskIndex }) => {
      const index = tasks.findIndex(({ id }) => id === taskIndex);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => (task.done = true));
    },
    fetchSampleTasks: (state) => {
      state.status="loading";
    },
    fetchSampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.status="success";
    },
    fetchSampleTasksError: (state) => {
      state.status="error";
    },
    clearLoadingError: (state) => {
      state.status="idle";
    },
    setSampleTaskButtonRef: (state, { payload: sampleTaskButtonRef }) => {
      state.sampleTaskButtonRef = sampleTaskButtonRef;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  getSampleTasks,
  setSampleTasks,
  fetchSampleTasks,
  fetchSampleTasksSuccess,
  fetchSampleTasksError,
  clearLoadingError,
  setSampleTaskButtonRef,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectAreEveryTasksDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return selectTasks(state).filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};
export const selectStatus = (state) => selectTasksState(state).status;
export const selectSampleTaskButtonRef = (state) =>
  selectTasksState(state).sampleTaskButtonRef;

export default tasksSlice.reducer;
