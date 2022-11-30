
import React,{useState} from "react";
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "./Container";

let tasks = [
    { id: 1, content: "some task", done: true},
    { id: 2, content: "some taskrerer", done: true}
];

function App() {
    const [hideDone, setHideDone] = useState(false);
    
    const toggleHideDone = () => {
        setHideDone(hideDone=>!hideDone);
    };

    return (

        <Container className="container">
            <Section
                header={<Header headerTitle="Dodaj nowe zadanie" tasks={tasks}/>}
                body={<Form />}
            />
            <Section
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone }/>}
                body={<TasksList tasks={tasks} hideDone={hideDone}/>}
            />
        </Container>
    );
}
export default App;
