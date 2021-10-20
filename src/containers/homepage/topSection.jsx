import React from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import BannerImg from "../../assets/illustrations/solcial_exp_banner.png";
import { Navbar } from "../../components/navbar";
import { Button } from "../../components/button";
import { FeatureNFT, FeatureGame, FeatureReward } from "../../components/feature";


const TopContainer = styled.div`
  width: 100%;
  height: 1400px;

  @media screen and (max-width: 480px) {
    height: 750px;

}
`;

const BannerImgStyled = styled.img`
  width: 32em;
  height: 8em;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 20em;
    height: 5em;
  }
`;

const SloganText = styled.h1`
  font-family: Allerta Stencil;
  font-size: 48px;
  font-weight: 400;
  color: #000000;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 36px;
}
`;

const SubText = styled.h2`
  font-family: Saira Condensed Light;
  font-size: 28px;
  font-weight: 200;
  color: #000000;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 18px;
}
`;

const GameText = styled.h2`
  font-family: Cabin Sketch;
  font-size: 42px;
  font-weight: 400;
  color: #000000;
  text-align: center;
  margin-top: 2em;
  margin-block-end: 0.2em;

  @media screen and (max-width: 480px) {
    font-size: 40px;
}
`;

const GameTextName = styled.h2`
  font-family: Cabin Sketch;
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  text-align: center;
  margin-block-start: 0.1em;

  @media screen and (max-width: 480px) {
    font-size: 36px;
}
`;

const GameSubText = styled.p`
  font-family: Cabin Sketch;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  text-align: center;
  margin-block-start: 0.1em;

  @media screen and (max-width: 480px) {
    font-size: 18px;
}
`;

const ClauseText = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: Cabin Sketch;
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  margin-block-end: 0.2em;

  @media screen and (max-width: 480px) {
    font-size: 36px;
}
`;

const ClauseSubText = styled.p`
  display: flex;
  flex-direction: column;
  font-family: Cabin Sketch;
  font-size: 20px;
  font-weight: 200;
  color: #000000;
  margin-block-start: 0.1em;

  @media screen and (max-width: 480px) {
    font-size: 24px;
}
`;

const InitialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 760px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
}

  @media screen and (max-width: 880px) {
    flex-direction: column;
}
`;

const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;

const Video = styled.video`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8em auto;

  @media screen and (max-width: 480px) {
    width: 100%;
}

@media screen and (max-width: 880px) {
  width: 100%;
}
`;

const styles = {
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'},
    pink: {color: '#ff4782', fontWeight: 'bold'},
};


export function TopSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return(
  <Element name="topSection">
    <TopContainer>
      <Navbar/>
      <InitialContainer>
        <BannerImgStyled src={BannerImg}/>
        <TextContainer>
          <SloganText>The Solcial Experiment</SloganText>
          <SubText> A series of <span style={styles.pink}>mental challenges</span> and <span style={styles.pink}>tests of willpower</span> on Solana. How far will you make it?</SubText>
          <Button> Join The Discord </Button>
        </TextContainer>
      </InitialContainer>

      <FeaturesContainer>
        <FeatureNFT
          title="The NFTs"
          description1="NFTs will be released in correspondance with a game. Purchase of that NFT deems you elligible to participate in the associated competition"
          description2="These are mutable and subject to change. Failing to advance vs winning may have different effects on the physical appearance and metadata of your NFT as you progress"
        />

        <FeatureGame
          title="The Experiments"
          description1="These are not videogames. These are challenges that take Luck, Patience and Willpower in order to win"
          description2="Each game will be unique and released separately. The rules of the current game can always be found here on our website"
        />

        <FeatureReward
          title="The Rewards"
          description1="Each game has a varied rewards system, but there is a common theme. Winning SOL. Nearly all of the mint funds are funneled back to the winner(s)"
          description2="On top of monetary rewards, you will keep your NFT as a prize, and the winning wallet addresses will be tracked on our Winners Log"
        />
      </FeaturesContainer>

      <GamesContainer>
        <GameText> Experiment 1 </GameText>
        <GameTextName> Hold The Key </GameTextName>
        <GameSubText> The objective of the game is simple. Mint one of our Key NFTs and <span style={styles.pink}>Hold</span>. Do so for 4 weeks and you are guarunteed to receive back the full mint price, thus resulting in a <span style={styles.pink}>free</span> NFT. When the time period has finished, the NFT will transform</GameSubText>
        <ClauseText> Clause 1: </ClauseText>
        <ClauseSubText> A player must purchase an NFT from The Solcial Experiment - Experiment 1 line. Exact mint price decided via Fair Launch Protocol</ClauseSubText>
        <ClauseText> Clause 2: </ClauseText>
        <ClauseSubText> A player receives SOL back weekly as long as their NFT is delisted. A snapshot will be taken randomly at some point during the week and payouts follow the below scheme: </ClauseSubText>
        <ClauseSubText> Hold for all 4 weeks and receive the full price of the mint back. 50% returned week one, 30% week two, 15% week three, 5% week four. If your NFT is listed at the time of the snapshot, you will not be elligible for that weeks return </ClauseSubText>
        <ClauseText> Clause 3: </ClauseText>
        <ClauseSubText> At the end of the time period, a player's NFT is subject to transform into something unique. Players who competed will be logged in our Player Log</ClauseSubText>
        <GameTextName> We only profit if you can't hold. Game on </GameTextName>
      </GamesContainer>
    </TopContainer>
  </Element>
  );
}
