import React from "react";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../tasks/TasksPage/Header";

function About() {
  return (
    <Container title="O autorze">
      <Section header={<Header headerTitle="Krzysztof Groński" />} />
    </Container>
  );
}
export default About;
