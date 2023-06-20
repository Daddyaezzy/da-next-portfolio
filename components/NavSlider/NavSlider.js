import React from "react";
import Link from "next/link";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  Container,
  NavToggle,
  NavItems,
  NavItem,
  Div4,
  Div5,
} from "./NavSliderStyles";
import { FaTimes } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import Image from "next/image";

const NavSlider = ({ toggleNavSlider }) => {
  return (
    <Container>
      <Div4>
        <Link href="/">
          <Image
            alt="logo"
            width={80}
            height={50}
            src="/logo-no-background.png"
          />
        </Link>
        <NavToggle onClick={toggleNavSlider}>
          <FaTimes size="2.5rem" style={{ color: "skyblue" }} />
        </NavToggle>
      </Div4>
      <NavItems>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link href="/projects">Projects</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">Contact</Link>
        </NavItem>
      </NavItems>
      <Div5>
        <SocialIcons href="https://github.com/daddyaezzy/">
          <AiFillGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b">
          <AiFillLinkedin size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/daddyaezzy/">
          <AiFillInstagram size="2.5rem" />
        </SocialIcons>
      </Div5>
    </Container>
  );
};

export default NavSlider;
