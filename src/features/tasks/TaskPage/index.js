import React from "react";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../TasksPage/Header";
import { useParams } from "react-router-dom";
import { selectTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));

  return (
    <Container title="Szczegóły zadania">
      <Section
        header={
          <Header
            headerTitle={
              task ? task.content : "Nie znaleziono zadania o podanym ID 🤨"
            }
          />
        }
        body={
          !!task && (
            <>
              <strong>Ukończone: </strong>
              {task.done ? "tak" : "nie"}
            </>
          )
        }
      />
    </Container>
  );
};
export default TaskPage;
