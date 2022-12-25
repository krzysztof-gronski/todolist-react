import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Section from "../../common/Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks.js";
import { selectTasks } from "./tasksSlice";

function Tasks() {
    const inputRef = useRef(null);
    const { tasks } = useSelector(selectTasks);
    const { removeTask, setAllDone } = useTasks();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} setAllDone={setAllDone} />}
                body={<TasksList tasks={tasks} removeTask={removeTask} inputRef={inputRef} />}
            />
        </Container>
    );
}
export default Tasks;
