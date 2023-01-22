import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Header from "./Header";
import Container from "../../../common/Container";
import { selectTasks } from "../tasksSlice";
import Search from "./Search";

function TasksPage() {
  const inputRef = useRef(null);
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [tasks]);

  return (
    <Container title={"Lista zadań"}>
      debugging test 0.0.2
      <Section
        header={
          <Header headerTitle="Dodaj nowe zadanie" sampleTasksFlag={true} />
        }
        body={<Form inputRef={inputRef} />}
      />
      <Section
        header={
          <Header headerTitle="Wyszukiwarka"/>
        }
        body={<Search/>}
      />
      <Section
        header={<Header headerTitle="Lista zadań" body={true} />}
        body={<TasksList inputRef={inputRef} />}
      />
    </Container>
  );
}
export default TasksPage;
