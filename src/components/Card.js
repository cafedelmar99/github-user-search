import React, { useState } from "react";
import Stats from "./Stats";
import Socials from "./Socials";
import styled from "styled-components";


function Card(props) {
  return (
    <CardHolder>
      {props.info.created_at === undefined ? (
        <></>
      ) : (
        <>
          <MainInfo info={props.info}>
            <img src={props.info.avatar_url} alt="" />
            <div>
              <h3>{props.info.name}</h3>
              <a href="">@{props.info.login}</a>
              <p>
                Joined 
                {" "}
                {new Date(props.info.created_at).toLocaleString("default", {
                    day: "numeric",
                  })}
                {" "}
                {new Date(props.info.created_at).toLocaleString("default", {
                  month: "short",
                })}
                {" "}
                {new Date(props.info.created_at).toLocaleString("default", {
                    year: "numeric",
                  })}
              </p>
            </div>
          </MainInfo>
          <Description>
            <p></p>
          </Description>
          <Stats modeStatus={props.modeStatus} info={props.info}/>
          <Socials modeStatus={props.modeStatus} info={props.info}/>
        </>
      )}
    </CardHolder>
  );
}

export default Card;

const CardHolder = styled.div`
  height: 517px;
  background-color: #fff;
  margin-top: 16px;
  border-radius: 10px;
  padding: 32px 24px 0px 24px;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  & > div {
    margin-left: 20px;
    & > h3 {
      color: #2b3442;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    & > a {
      display: block;
      line-height: 20px;
    }
    &>p{
      font-size: 13px;
      color: #697C9A;
      font-weight: 400;
      margin-top: 6px;
      line-height: 20px;
    }
  }
`;

const Description = styled.div``;

