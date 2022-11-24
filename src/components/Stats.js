import React from "react";
import styled from "styled-components";

function Stats(props) {
  return (
    <StatsHolder>
      <EachStat>
        <h6>Repos</h6>
        <p>{props.info.public_repos}</p>
      </EachStat>
      <EachStat>
        <h6>Followers</h6>
        <p>{props.info.followers}</p>
      </EachStat>
      <EachStat>
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
    background-color: #F6F8FF;
    border-radius: 10px;
    width: 280px;
    height: 85px;
    margin-top: 40px;
`;

const EachStat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &>h6{
        color: #4B6A9B;
        font-size: 11px;
        font-weight: 400;
        line-height: 16px;
    }
    &>p{
       color:#2B3442;
       font-size: 16px;
       font-weight: 700;
       line-height: 24px;
    }
`;