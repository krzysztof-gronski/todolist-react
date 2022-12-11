
import React, { useEffect, useState } from "react";
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "./Container";

function App() {
    const [hideDone, setHideDone] = useState(JSON.parse(localStorage.getItem("hideDone")) || false);
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem("hideDone", JSON.stringify(hideDone));
    }, [hideDone]);

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
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return (

        <Container>
            <Section
                header={<Header headerTitle="Dodaj nowe zadanie" tasks={tasks} />}
                body={<Form addNewTask={addNewTask} />}
            />
            <Section
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
                body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
            />
        </Container>
    );
}
export default App;
