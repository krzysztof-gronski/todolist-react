import React, { useEffect, useState, useRef } from "react";
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "./Container";
import {useTasks} from "./useTasks.js";

function App() {
    const [hideDone, setHideDone] = useState(JSON.parse(localStorage.getItem("hideDone")) || false);
    const inputRef = useRef(null);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
        inputRef.current.focus();
    };

    const {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask}=useTasks(hideDone);

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
                body={<Form addNewTask={addNewTask} inputRef={inputRef}/>}
            />
            <Section
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
                body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} inputRef={inputRef}/>}
            />
        </Container>
    );
}
export default App;
