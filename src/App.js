
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "./Container";

let tasks = [
    { id: 1, content: "some task", done: true},
    { id: 2, content: "some taskrerer", done: true}
];
let hideDoneTasks = false;

function App() {
    return (

        <Container>
            <Section
                header={<Header headerTitle="Dodaj nowe zadanie" tasks={tasks}/>}
                body={<Form />}
            />
            <Section
                header={<Header headerTitle="Lista zadań" body={true} tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
                body={<TasksList tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
            />
        </Container>
    );
}
export default App;
