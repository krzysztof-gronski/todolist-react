import {TasksListContent,ListItem,Button,RemoveButton,ListItemContent} from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
        return <TasksListContent>
                {
                        tasks.map(task => (
                                <ListItem done={task.done} hidden={task.done && hideDone} key={task.id}>
                                        <Button onClick={() => toggleTaskDone(task.id)}>{task.done ? "✓" : ""}</Button>
                                        <ListItemContent done={task.done}>{task.content}</ListItemContent>
                                        <RemoveButton onClick={() => (removeTask(task.id))}>🗑</RemoveButton>
                                </ListItem>
                        ))
                }
        </TasksListContent>;
};

export default TasksList;



