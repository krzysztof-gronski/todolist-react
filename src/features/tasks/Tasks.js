import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Section from "../../common/Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks.js";
import { selectTasks } from "./tasksSlice";
import { addNewTask } from "./tasksSlice";

function Tasks() {
    const [hideDone, setHideDone] = useState(JSON.parse(localStorage.getItem("hideDone")) || false);
    const inputRef = useRef(null);
    const   tasks   = useSelector(selectTasks);
    alert(tasks.tasks);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
        inputRef.current.focus();
    };

    const { removeTask, toggleTaskDone, setAllDone } = useTasks(hideDone);

    useEffect(() => {
        inputRef.current.focus();
    }, [hideDone]);

    useEffect(() => {
        inputRef.current.focus();
    }, [tasks]);

    return (

        <Container>
            <Section
                header={<Header headerTitle="Dodaj nowe zadanie" tasks={tasks} />}
                body={<Form inputRef={inputRef} />}
            />
            <Section
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
                body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} inputRef={inputRef} />}
            />
        </Container>
    );
}
export default Tasks;
