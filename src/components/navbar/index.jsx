import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;

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
  margin-right: 2%;
  margin-top: 2%;
`;


export function Navbar(props) {

  return (
    <NavbarContainer>
    <BrandContainer>
    </BrandContainer>
    <AccessibilityContainer>
      <Link to="/players">
      <Button pink> Player List </Button>
      </Link>
    </AccessibilityContainer>
    </NavbarContainer>
  );

}
