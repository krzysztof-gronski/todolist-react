
import React, { useState } from "react";
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "./Container";

function App() {
    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, content: "some task", done: true },
        { id: 2, content: "some taskrerer", done: true }
    ]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(
            task => task.id !== id
        ));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task, done: !task.done
                };
            };
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks=>tasks.map(task=>({
            ...task,
            done: true,
        })))
    };

    return (

        <Container className="container">
            <Section
                header={<Header headerTitle="Dodaj nowe zadanie" tasks={tasks} />}
                body={<Form />}
            />
            <Section
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone}/>}
                body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone}/>}
            />
        </Container>
    );
}
export default App;
