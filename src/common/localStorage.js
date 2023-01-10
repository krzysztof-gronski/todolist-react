export const getSavedTasks = () => {
  return JSON.parse(localStorage.getItem("todolist/tasks")) || [];
};

export const getSavedHideDone = () => {
  return localStorage.getItem("todolist/hideDone") || false;
};

export const saveTasks = (tasks) => {
    localStorage.setItem("todolist/tasks",JSON.stringify(tasks));
};

export const saveHideDone = (hideDone) => {
    localStorage.setItem("todolist/hideDone",hideDone);
};
