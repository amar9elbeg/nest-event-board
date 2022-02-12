import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  height: 70px;
  width: 430px;
  border-radius: 30px;
  font-size: 16px;
`;

const TopPadding = styled.div`
  padding-top: 20px;
`;
const Button = styled.button`
  height: 70px;
  width: 430px;
  border-radius: 30px;
  font-size: 20px;
  background-color: #333740;
  color: white;
  img{
      height: 30px;
      width: 30px;
  }
`;

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px;
  padding-top: 20px;
`;

const Divider = styled.hr`
  border-top: 2px solid black;
  border-radius: 5px;
  width: 190px;
  height: 0px;
`;

const H1style = {
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  fontFamily: "Outfit, sans-serif",
  fontFamily: "Teko, sans-serif",
  fontSize: "40px",
  color: "black",
};
const TextStyle = {
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  fontFamily: "Outfit, sans-serif",
  fontFamily: "Teko, sans-serif",
  fontSize: "20px",
  color: "black",
};


export { Wrapper, Input, TopPadding, Button, DividerWrapper, Divider,H1style,TextStyle };
