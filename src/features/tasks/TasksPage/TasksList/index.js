import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toTask } from "../../../../routing";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import {
  TasksListContent,
  ListItem,
  Button,
  RemoveButton,
  ListItemContent,
  StyledLink,
} from "./styled";

const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <TasksListContent>
      {tasks.map((task) => (
        <ListItem done={task.done} hidden={task.done && !!hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <ListItemContent done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
          </ListItemContent>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </RemoveButton>
        </ListItem>
      ))}
    </TasksListContent>
  );
};

export default TasksList;
