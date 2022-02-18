import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 8.4vh;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8.4vh;
  border-bottom: 1px solid #dbdbdb;
  box-shadow: 0px 1px 3px #e1e1e1;
`;

const RouteWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 55vw;
`;
const fontStyle = {
  textDecoration: "none",

  fontSize: "20px",
  color: "black",
};

const SignUpStyle = {
  textDecoration: "none",

  fontSize: "20px",
  color: "black",
  border: "1.19px solid #000000",
  boxSizing: "border-box",
  borderRadius: "65.3997px",
  width: "11.1vw",
  height: "6.7vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export { Wrapper, NavbarWrapper, RouteWrapper, fontStyle, SignUpStyle };
