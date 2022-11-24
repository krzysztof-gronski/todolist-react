import "./style.css";

const TasksList = ({tasks, hideDoneTasks}) => {
        const tasksListItemClasses = hideDoneTasks ? "tasksList__tasksListItem--hidden" : "";
        return <ul className="tasksList">
                {
                tasks.map(task=>(
                        <li className={`tasksList__tasksListItem ${task.done ? tasksListItemClasses : ""}`} key={task.id}>
                        <button className="tasksList__button"></button>
                        <span className={`${task.done ? "tasksList__tasksListItem--done" : ""}`}>{task.content}</span>
                        <button className="tasksList__button tasksList__button--remove">🗑</button>
                        </li>
                ))
                }
        </ul>;
};

export default TasksList;

  
        