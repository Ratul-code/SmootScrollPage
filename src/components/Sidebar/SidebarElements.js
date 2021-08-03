import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  align-items: center;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: -1%;
  right: -2.2%;
  transform: translate(-100%, 60%);
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 18vh 0;
  gap: 10vh;
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #01b571;
    transition: all 0.2s ease-in-out;
  }
`;
export const SidebtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background-color: #01b571;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #010606;
  }
`;
