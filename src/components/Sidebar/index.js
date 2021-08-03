import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebtnWrapper,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon isOpen={props.isOpen} onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={props.toggle} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={props.toggle} to="discover">
            Discover
          </SidebarLink>
          <SidebarLink onClick={props.toggle} to="services">
            Services
          </SidebarLink>
          <SidebarLink onClick={props.toggle} to="signup">
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebtnWrapper>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
