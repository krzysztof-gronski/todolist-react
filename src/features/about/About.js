import React from "react";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../tasks/TasksPage/Header";
import { Emoticon, Paragraph } from "./styled";
import { RegularLink } from "../../common/Link";

function About() {
  return (
    <Container title="O autorze">
      <Section
        header={<Header headerTitle="Krzysztof Groński" />}
        body={
          <>
            <Paragraph>
              Mgr inż. informatyki <Emoticon>👨‍🎓 </Emoticon> ukończone studia
              magistersko-inżynierskie na kierunku{" "}
              <strong>Inżynieria oprogramowania i systemy informatyczne</strong>
              , certyfikowany kurs frontend developera w{" "}
              <RegularLink href="https://youcode.pl">
                <strong>Youcode</strong>
              </RegularLink>
              . Pasjonat technik programistycznych z frameworkiem React (JS) na
              czele.
            </Paragraph>
            <Paragraph>
              Prywatnie miłośnik latynoskiej szkoły tańca w stylu salsy
              kubańskiej, kizomby i bachaty <Emoticon>🕺</Emoticon>
              Na codzień praktyk metod zdrowego odżywiania oraz ćwiczeń jogi w
              celu zachowania długotrwałego zdrowia oraz utrzymania solidnej
              kondycji psycho-fizycznej.
            </Paragraph>
          </>
        }
      />
    </Container>
  );
}
export default About;
