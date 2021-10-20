import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/illustrations/scroll.jpg";
import { PlayerNav } from "../../components/playerNav";

const PageContainer = styled.div`
width: 100%;
height: 1200px;
background-image: url(${BackgroundImg});
display: flex;
flex-direction: column;
`;

const BackgroundContainer = styled.div`
width: 100%;
height: 100%;
background-image: url(${BackgroundImg});
background-size: contain;
display: flex;
flex-direction: column;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 1200px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SloganText = styled.h1`
  font-family: Cabin Sketch;
  font-size: 48px;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 36px;
}
`;

export function PlayerPage(props) {
  return(
      <PageContainer>
      <BackgroundFilter>
        <PlayerNav />
        <SloganText> The Solcial Experiment Player Log </SloganText>
      </BackgroundFilter>
      </PageContainer>
    );
}
