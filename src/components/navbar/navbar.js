import React from "react";
import { Link } from "react-router-dom";
import NestSchoolLogo from "../icons/nest-school-logo";
import {
  Wrapper,
  NavbarWrapper,
  RouteWrapper,
  fontStyle,
  SignUpStyle,
} from "./navbar-style";

export const Navbar = () => {
  return (
    <Wrapper>
      <NavbarWrapper>
        
        <NestSchoolLogo />

        <RouteWrapper>
          <Link to="/" style={fontStyle}>
            <div> Home </div>
          </Link>
          <Link to="events" style={fontStyle}>
            <div> Events </div>
          </Link>
          <Link to="honor-students" style={fontStyle}>
            <div> Honor students </div>
          </Link>
          <Link to="sign-up" style={SignUpStyle}>
            <div> Sign up </div>
          </Link>
        </RouteWrapper>
        
      </NavbarWrapper>
    </Wrapper>
  );
};
