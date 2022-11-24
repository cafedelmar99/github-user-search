import React, { useState } from "react";
import Stats from "./Stats";
import Socials from "./Socials";
import styled from "styled-components";

function Card(props) {
  return (
    <CardHolder modeStatus={props.modeStatus}>
      {props.info.created_at === undefined ? (
        <></>
      ) : (
        <>
          <MainInfo modeStatus={props.modeStatus} info={props.info}>
            <img src={props.info.avatar_url} alt="" />
            <div>
              <h3>{props.info.name}</h3>
              <a href="">@{props.info.login}</a>
              <p>
                Joined{" "}
                {new Date(props.info.created_at).toLocaleString("default", {
                  day: "numeric",
                })}{" "}
                {new Date(props.info.created_at).toLocaleString("default", {
                  month: "short",
                })}{" "}
                {new Date(props.info.created_at).toLocaleString("default", {
                  year: "numeric",
                })}
              </p>
            </div>
          </MainInfo>
          <Description>
            <p>{props.info.bio}</p>
          </Description>
          <Stats modeStatus={props.modeStatus} info={props.info} />
          <Socials modeStatus={props.modeStatus} info={props.info} />
        </>
      )}
    </CardHolder>
  );
}

export default Card;

const CardHolder = styled.div`
  background-color: ${(props) => (props.modeStatus ? "#1E2A47" : "#FFF")};
  margin-top: 16px;
  border-radius: 10px;
  padding: 32px 24px 30px 24px;
  @media (min-width: 768px) {
    max-width: 493px;
    margin: 16px auto 0px auto;
    padding: 40px;
  }
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    @media (min-width: 768px) {
      width: 117px;
      height: 117px;
    }
  }
  & > div {
    margin-left: 20px;
    & > h3 {
      color: ${(props) => (props.modeStatus ? "#FFF" : "#2b3442")};
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      @media (min-width: 768px) {
        font-size: 26px;
        line-height: 38px;
      }
    }
    & > a {
      display: block;
      line-height: 20px;
      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
    & > p {
      font-size: 13px;
      color: ${(props) => (props.modeStatus ? "#FFF" : "#697C9A")};
      font-weight: 400;
      margin-top: 6px;
      line-height: 20px;
      @media (min-width: 768px) {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
`;

const Description = styled.div``;
