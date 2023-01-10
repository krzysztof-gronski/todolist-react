import { createSlice } from "@reduxjs/toolkit";
import { getSavedHideDone, getSavedTasks } from "../../common/localStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getSavedTasks(),
    hideDone: getSavedHideDone(),
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
    getSampleTasks: () => {},
    setSampleTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
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
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectAreEveryTasksDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;
