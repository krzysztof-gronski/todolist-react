
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "./Container";

let tasks = [
    { id: 1, content: "some task", done: true},
    { id: 2, content: "some taskrerer", done: true}
];
let hideDone = false;

function App() {
    return (

        <Container className="container">
            <Section
                header={<Header headerTitle="Dodaj nowe zadanie" tasks={tasks}/>}
                body={<Form />}
            />
            <Section
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} hideDone={hideDone}/>}
                body={<TasksList tasks={tasks} hideDone={hideDone}/>}
            />
        </Container>
    );
}
export default App;
