import styled from "styled-components";
import { BOX } from "../constants/sizes";
import { WHITE } from "../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;

export const ScreenContainer = styled.div`
  display: flex;
  width: ${BOX.SCREEN}px;

  @media screen and (max-width: ${BOX.SCREEN}px) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${WHITE};
`;
