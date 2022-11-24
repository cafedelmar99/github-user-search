import React from "react";
import styled from "styled-components";

function Stats(props) {
  return (
    <StatsHolder modeStatus={props.modeStatus}>
      <EachStat modeStatus={props.modeStatus}>
        <h6>Repos</h6>
        <p>{props.info.public_repos}</p>
      </EachStat>
      <EachStat modeStatus={props.modeStatus}>
        <h6>Followers</h6>
        <p>{props.info.followers}</p>
      </EachStat>
      <EachStat modeStatus={props.modeStatus}>
        <h6>Following</h6>
        <p>{props.info.following}</p>
      </EachStat>
    </StatsHolder>
  );
}

export default Stats;

const StatsHolder = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props)=> (props.modeStatus ? "#141D2F" : "#F6F8FF")} ;
    border-radius: 10px;
    width: 100%;
    height: 85px;
    margin-top: 40px;
    
`;

const EachStat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &>h6{
        color: ${(props)=> (props.modeStatus ? "#FFF": "#4B6A9B")};
        font-size: 11px;
        font-weight: 400;
        line-height: 16px;
        @media (min-width: 768px){
        font-size: 13px;
      line-height: 19px;
  }
    }
    &>p{
       color: ${(props)=> (props.modeStatus ? "#FFF" : "#2B3442")};
       font-size: 16px;
       font-weight: 700;
       line-height: 24px;
       @media (min-width: 768px){
        font-size: 22px;
      line-height: 32px;
  }
    }
`;