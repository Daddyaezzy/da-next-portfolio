import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  transition: transform 0.3s ease-in-out;
  z-index: 99;
  animation: ${({ isOpen }) => (isOpen ? slideOut : slideIn)} 0.3s ease-in-out;
`;

export const NavToggle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const Div4 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  padding: 20px 5px 30px 5px;
`;
export const Div5 = styled.div`
  display: flex;
  gap: 20px;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 20px 5px 30px 5px;
`;

export const NavItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: skyblue;
    font-size: 1.5rem;
    padding: 1rem;
    display: block;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid gray;

    &:hover {
      background-color: #f4f4f4;
      color: black;
    }
  }
`;
