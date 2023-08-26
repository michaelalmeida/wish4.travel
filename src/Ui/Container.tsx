import styled from "styled-components";
import { BOX } from "../constants/sizes";

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
