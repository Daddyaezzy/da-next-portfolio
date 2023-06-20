import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents/index";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const email = "pulumbu11@gmail.com";

const handleEmailClick = () => {
  window.location.href = `mailto:${email}`;
};

const Hero = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle data-aos="fade-down" main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText data-aos="fade-left">
          HELLO, I'M FAJOBI ANSELM I'M A WEB DEVELOPER IN NIGERIA,WITH A
          MASTERING IN THE ART OF INNOVATION, COMMUNICATING WITH IMPACT, AND
          LEADING WITH EXCELLENCE
        </SectionText>
        <Button data-aos="fade-right" onClick={handleEmailClick}>
          Email Me
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
