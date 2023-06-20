import React, { useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Form,
  FormContainer,
  FormGroup,
  TextArea,
  Label,
  Input,
  Button,
} from "./AcomplishmentsStyles";
// import { headers } from "next/dist/client/components/headers";

const Acomplishments = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Message:</Label>
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </Section>
  );
};

export default Acomplishments;
