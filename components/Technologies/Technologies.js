import React, { useEffect } from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Aos from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <Section id="tech">
        <SectionDivider />
        <SectionTitle data-aos="fade-right">Technologies</SectionTitle>
        <SectionText data-aos="fade-left">
          I've worked with a range of technologies in the web development world.
          From Backend to Design
        </SectionText>
        <List data-aos="fade-up">
          <ListItem>
            <picture>
              <DiReact size="5rem" />
            </picture>
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                React.js
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <picture>
              <DiFirebase size="5rem" />
            </picture>
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                Node and Databases
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <picture>
              <DiZend size="5rem" />
            </picture>
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Experience with <br />
                tools like Figma
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
        <SectionDivider colorAlt />
      </Section>
    </div>
  );
};

export default Technologies;
