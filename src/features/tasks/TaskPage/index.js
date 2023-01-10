import React from "react";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../TasksPage/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));
  alert(task);
  return (
    <Container title="Szczegóły zadania">
      <Section header={<Header headerTitle={task.content} />} />
    </Container>
  );
}
export default TaskPage;
