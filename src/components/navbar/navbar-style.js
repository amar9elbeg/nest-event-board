import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 8.4vh;
  display: flex;
  align-items: center;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 1px 3px #E1E1E1;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const RouteWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  border: "1.19px solid #000000",
  boxSizing: "border-box",
  borderRadius: "65.3997px",
  width: "170px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export { Wrapper, NavbarWrapper, RouteWrapper, fontStyle, SignUpStyle };
