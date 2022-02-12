import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const RouteWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 55vw;
`;
const fontStyle = {
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  fontFamily: "Outfit, sans-serif",
  fontFamily: "Teko, sans-serif",
  fontSize: "20px",
  color: "black",
};

const SignUpStyle = {
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  fontFamily: "Outfit, sans-serif",
  fontFamily: "Teko, sans-serif",
  fontSize: "20px",
  color: "black",
  border: "2px solid black",
  borderRadius: "10px",
};
export { Wrapper, NavbarWrapper, RouteWrapper, fontStyle, SignUpStyle };
