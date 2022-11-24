import React from "react";
import styled from "styled-components";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";
import location from "../assets/icon-location.svg";
import link from "../assets/icon-website.svg";

function Socials(props) {
  return (
    <SocialsHolder>
      <SocialsHalf>
        <SocialsEach>
          <img src={location} alt=""/>
          <p>{props.info.location===null ? "Not Available" : props.info.location}</p>
        </SocialsEach>
        <SocialsEach>
          <img src={link} alt=""/>
          <p>{props.info.blog===null ? "Not Available" : props.info.blog}</p>
        </SocialsEach>
      </SocialsHalf>
      <SocialsHalf>
        <SocialsEach>
          <img src={twitter} alt=""/>
          <p>{props.info.twitter_username===null ? "Not Available" : props.info.twitter_username}</p>
        </SocialsEach>
        <SocialsEach>
          <img src={company} alt=""/>
          <p>{props.info.company===null ? "Not Available" : props.info.company}</p>
        </SocialsEach>
      </SocialsHalf>
    </SocialsHolder>
  );
}

export default Socials;

const SocialsHolder = styled.div``;

const SocialsHalf = styled.div``;

const SocialsEach = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  &>img{
    width: 20px;
  }
  &>p{
    margin-left: 10px;
  }
`;
