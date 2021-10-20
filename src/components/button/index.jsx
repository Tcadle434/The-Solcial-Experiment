import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({small}) => (small ? "16px 20px " : "14px 22px")};
  border-radius: 5px;
  background-color: ${({pink}) => (pink ? "#FFFFFF" : "#ff4782")};
  color: ${({pink}) => (pink ? "#ff4782" : "#FFFFFF")};
  font-weight: normal;
  font-size: 20px;
  font-family: Saira Condensed Medium;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  margin-bottom: 4em;

  &:hover {
    background-color: #000000;
    border: none;
    color: #FFFFFF;
  }

  @media screen and (min-width: 1024px) and (max-width: 1680px) {
  font-size: 20px;
  padding: ${({small}) => (small ? "16px 20px " : "14px 22px")};

}

  @media screen and (max-width: 480px) {
  font-size: 16px;
  padding: ${({small}) => (small ? "12px 10px " : "16px 22px")};
}
`;

const ButtonWrapperPlayer = styled.button`
  padding: ${({small}) => (small ? "16px 20px " : "14px 22px")};
  border-radius: 5px;
  background-color: transparent;
  color: #FFFFFF;
  font-weight: normal;
  font-size: 20px;
  font-family: Saira Condensed Medium;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  margin-bottom: 4em;

  &:hover {
    background-color: #000000;
    border: none;
    color: #FFFFFF;
  }

  @media screen and (min-width: 1024px) and (max-width: 1680px) {
  font-size: 20px;
  padding: ${({small}) => (small ? "16px 20px " : "14px 22px")};

}

  @media screen and (max-width: 480px) {
  font-size: 16px;
  padding: ${({small}) => (small ? "12px 10px " : "16px 22px")};
}
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export function ButtonPlayer(props) {
  return <ButtonWrapperPlayer {...props}>{props.children}</ButtonWrapperPlayer>;
}
