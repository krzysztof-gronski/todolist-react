import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../../tasksSlice";
import { TasksListContent, ListItem, Button, RemoveButton, ListItemContent } from "./styled";

const TasksList = () => {
        const tasks = useSelector(selectTasks);
        const hideDone = useSelector(selectHideDone);
        
        const dispatch = useDispatch();

        return <TasksListContent>
                {
                        tasks.map(task => (
                                <ListItem done={task.done} hidden={task.done && hideDone} key={task.id}>
                                        <Button onClick={() => dispatch(toggleTaskDone(task.id))}>{task.done ? "✓" : ""}</Button>
                                        <ListItemContent done={task.done}>
                                                <Link to={`/zadania/${task.id}`}>{task.content}</Link></ListItemContent>
                                        <RemoveButton onClick={() => (dispatch(removeTask(task.id)))}>🗑</RemoveButton>
                                </ListItem>
                        ))
                }
        </TasksListContent>;
};

export default TasksList;


