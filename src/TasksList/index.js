import "./style.css";

const TasksList = ({tasks, hideDone, removeTask}) => {
        const tasksListItemClasses = hideDone ? "tasksList__tasksListItem--hidden" : "";
        return <ul className="tasksList">
                {
                tasks.map(task=>(
                        <li className={`tasksList__tasksListItem ${task.done ? tasksListItemClasses : ""}`} key={task.id}>
                        <button className="tasksList__button"></button>
                        <span className={`${task.done ? "tasksList__tasksListItem--done" : ""}`}>{task.content}</span>
                        <button className="tasksList__button tasksList__button--remove" onClick={()=>(removeTask(task.id))}>🗑</button>
                        </li>
                ))
                }
        </ul>;
};

export default TasksList;

  
        