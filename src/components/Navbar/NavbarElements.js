import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
position: sticky;
top: 0;
  background:${({NavScroll})=>(NavScroll?"#000":"transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  transition: 0.8s all ease;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
  @media only screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media only screen and (max-width: 768px) {
    margin-top: -80px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const MobileMenuIcon = styled(FaBars)`
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  /* margin-left: 22px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 75px;
  font-size: 1rem;
  transition: all .2s ease-in-out;
  &:hover{
    color: #01bf71;
    font-size: 1.1rem;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  @media screen and(max-width:768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  /* white-space:nowrap; */
  background-color: #01bf71;
  padding: 0.7rem 1.1rem;
  font-size: 1rem;
  color: #010606;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s all ease-in-out;

  &:hover {
    transition: 0.2s all ease-in-out;
    background-color: #cde9dd;
    color: #010606;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
