import React from "react";
import styled from "styled-components/macro";
import { ImPencil2 } from "react-icons/im";
import { GiToken, GiDramaMasks, GiOpenTreasureChest } from "react-icons/gi";

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #FFFFFF;
  height: 500px;
  width: 350px;
  margin: 20px 20px;
  border: 4px solid #000000;
  border-radius: 20px;

  @media screen and (max-width: 480px) {
    align-items: center;
    width: 95%;

  }
`;

const Title = styled.h2`
    display: flex;
    text-align: center;
    flex-direction: column;
    font-family: Allerta Stencil;
    font-size: 24px;
    font-weight: normal;
    color: #000000;
    max-width: 75%;

    @media screen and (max-width: 480px) {
      font-size: 20px;
      font-weight: normal;
    }
`;

const Details = styled.p`
    display: flex;
    text-align: center;
    flex-direction: column;
    font-family: Saira Condensed Light;
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    max-width: 90%;

    @media screen and (max-width: 480px) {
      font-size: 18px;
      font-weight: normal;
    }
`;


const TokenImg = styled(GiToken)`
  color: #000000!important;
  height: 6em;
  width: 6em;
  padding-top: 15px;
`;

const GamesImg = styled(GiDramaMasks)`
  color: #000000!important;
  height: 6em;
  width: 6em;
  padding-top: 15px;
`;

const RewardsImg = styled(GiOpenTreasureChest)`
  color: #000000!important;
  height: 6em;
  width: 6em;
  padding-top: 15px;
`;

export function FeatureNFT(props) {
const { title, description1, description2 } = props;

  return (
        <FeatureContainer>
        <Title> {title} </Title>
        <TokenImg />
        <Details> {description1} </Details>
        <Details> {description2} </Details>
        </FeatureContainer>
  );
}

export function FeatureGame(props) {
const { title, description1, description2 } = props;

  return (
        <FeatureContainer>
        <Title> {title} </Title>
        <GamesImg />
        <Details> {description1} </Details>
        <Details> {description2} </Details>
        </FeatureContainer>
  );
}

export function FeatureReward(props) {
const { title, description1, description2 } = props;

  return (
        <FeatureContainer>
        <Title> {title} </Title>
        <RewardsImg />
        <Details> {description1} </Details>
        <Details> {description2} </Details>
        </FeatureContainer>
  );
}
