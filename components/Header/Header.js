import Link from "next/link";
import React, { useState, useEffect } from "react";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import Image from "next/image";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import NavSlider from "../NavSlider/NavSlider";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavSliderOpen, setIsNavSliderOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavSlider = () => {
    setIsNavSliderOpen(!isNavSliderOpen);
    console.log(isNavSliderOpen);
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <Div1>
        <Link href="/">
          <Image
            alt="logo"
            width={90}
            height={60}
            src="/logo-no-background.png"
          />
        </Link>
      </Div1>
      {!isMobile && (
        <>
          <Div2 style={{ display: "flex", gap: "30px" }}>
            <li>
              <Link href="#projects">
                <NavLink>Projects </NavLink>{" "}
              </Link>
            </li>
            <li>
              <Link href="#tech">
                <NavLink>Tech </NavLink>{" "}
              </Link>
            </li>
            <li>
              <Link href="#about">
                <NavLink>About</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <NavLink>Contact</NavLink>
              </Link>
            </li>
          </Div2>
          <Div3>
            <SocialIcons href="https://github.com/daddyaezzy/">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/daddyaezzy/">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </Div3>
        </>
      )}
      {isMobile && (
        <>
          <FaBars
            size="3rem"
            style={{ cursor: "pointer" }}
            onClick={toggleNavSlider}
          />
          {isNavSliderOpen && (
            <NavSlider
              isOpen={isNavSliderOpen}
              toggleNavSlider={toggleNavSlider}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Header;
