import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle data-aos="fade-right" main>
        Projects
      </SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree data-aos="fade-right" title={title}></HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo data-aos="fade-up">{description}</CardInfo>
              <div>
                <TitleContent data-aos="fade-up">Stack</TitleContent>
                <TagList data-aos="fade-up">
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks data-aos="fade-right" href={visit}>
                  Code
                </ExternalLinks>
                <ExternalLinks data-aos="fade-left" href={source}>
                  Source
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
