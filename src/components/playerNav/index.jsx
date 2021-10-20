import React from "react";
import styled from "styled-components";
import { ButtonPlayer } from "../button";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  @media screen and (max-width: 480px) {
    height: 85px;
}
  `;

const BrandContainer = styled.div`
  margin-left: 1%;
`;


const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 4%;
  margin-top: 2%;
`;


export function PlayerNav(props) {

  return (
    <NavbarContainer>
    <AccessibilityContainer>
      <Link to="/">
      <ButtonPlayer> Back </ButtonPlayer>
      </Link>
    </AccessibilityContainer>
    </NavbarContainer>
  );

}
