import React from "react";
import styled from "styled-components";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Header(props) {
  const ChangeColor = () => {
    props.setModeStatus(!props.modeStatus);
  };

  return (
    <HeaderHolder modeStatus={props.modeStatus}>
      <Name modeStatus={props.modeStatus}>devfinder</Name>
      <Lights modeStatus={props.modeStatus}>
        <p>{props.modeStatus ? "light" : "dark"}</p>
        <img
          onClick={ChangeColor}
          src={props.modeStatus ? sun : moon}
          alt="ie"
        />
      </Lights>
    </HeaderHolder>
  );
}

const HeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.modeStatus ? "#141D2F" : "#F6F8FF")};
  @media (min-width: 768px){
   max-width: 573px;
   margin: auto;
  }
`;

const Name = styled.h1`
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => (props.modeStatus ? "#FFF" : "#222731")};
`;

const Lights = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-size: 13px;
    color: ${(props) => (props.modeStatus ? "#FFF" : "#4B6A9B")};
    margin-right: 16px;
    text-transform: uppercase;
    :hover{
      color: ${(props) => (props.modeStatus ? "#90A4D4" : "#222731")};
    }
  }
  & > svg {
  }
`;

export default Header;
