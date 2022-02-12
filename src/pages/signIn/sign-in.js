import React from "react";
import { Link } from "react-router-dom";
import picture from "../../components/icons/log-in-picture.png";

import {
  Wrapper,
  Input,
  TopPadding,
  Button,
  DividerWrapper,
  Divider,
  H1style,
  TextStyle,
} from "./sign-in-style";

export const SignIn = () => {
  return (
    <Wrapper>
      <div style={{ paddingTop: "50px" }}>
        <h1 style={H1style}>LOG IN</h1>

        <TopPadding>
          <Input type="text" placeholder="Username or email address" />
        </TopPadding>

        <TopPadding>
          <Input type="password" placeholder="Password" />
        </TopPadding>

        <TopPadding>
          <input type="checkbox" />
          <label style={TextStyle}> REMEMBER ME</label>
        </TopPadding>

        <TopPadding>
          <Button>Sign In</Button>
        </TopPadding>

        <TopPadding>
          <label style={TextStyle}>
            Already have an account?
            <Link
              to="/sign-up"
              style={{ textDecoration: "none", color: "#6265FF" }}
            >
              SIGN UP
            </Link>
          </label>
        </TopPadding>

        <DividerWrapper>
          <Divider />
          <h1 style={TextStyle}> or </h1>
          <Divider />
        </DividerWrapper>

        <TopPadding>
          <Button>Sign In with Google</Button>
        </TopPadding>

        <TopPadding>
          <Button>Sign In with Facebook</Button>
        </TopPadding>
      </div>

      <img src={picture} style={{ height: "92vh" }} />
    </Wrapper>
  );
};
