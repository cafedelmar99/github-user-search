import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import search from "../assets/icon-search.svg";

function Input(props) {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const [error, setError] = useState(false);
  const handleClick = async () => {
    try {
      const { data } = await axios?.get(
        `https://api.github.com/users/${input}`
      );
      props.setInfo(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <InputHolder modeStatus={props.modeStatus}>
      <>
      <img src={search} />
      <Search
        onChange={handleChange}
        modeStatus={props.modeStatus}
        type="text"
        placeholder="Search Github username"
      />
      </>
      {error ? <p>No results</p> : null}
      <SearchButton onClick={handleClick} modeStatus={props.modeStatus}>
        Search
      </SearchButton>
    </InputHolder>
  );
}
const InputHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  background-color: ${(props) => (props.modeStatus ? "#1E2A47" : "#FFF")};
  border-radius: 10px;
  & > img {
    width: 20px;
    height: 20px;
    margin-left: 16px;
  }
  &>p{
    color: red;
    font-size: 15px;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    max-width: 573px;
    margin: 35px auto 0px auto;
  }
`;

const Search = styled.input`
  height: 60px;
  font-size: 13px;
  font-weight: 400;
  border: none;
  max-width:40%;
  background-color: ${(props) => (props.modeStatus ? "#1E2A47" : "#FFF")};
  color: ${(props) => (props.modeStatus ? "white" : "#4B6A9B")};
  ::placeholder {
    text-align: center;
    color: ${(props) => (props.modeStatus ? "white" : "#4B6A9B")};
    font-size: 13px;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-left: 20px;
    ::placeholder {
      text-align: start;
    }
  }
`;

const SearchButton = styled.button`
  width: 84px;
  height: 50px;
  background-color: #0079ff;
  border-radius: 10px;
  border: none;
  margin-right: 7px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  :hover {
    background-color: #60abff;
  }
  @media (min-width: 768px) {
    width: 106px;
    margin-left: 20px;
    font-size: 16px;
  }
`;

export default Input;
