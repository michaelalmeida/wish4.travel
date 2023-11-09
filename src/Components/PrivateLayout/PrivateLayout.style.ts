import styled from "styled-components";
import { BORDER_RADIUS, BOX } from "../../constants/sizes";
import { WHITE } from "../../constants/colors";
import { BOX_SHADOW } from "../../Ui/constants";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  min-height: 100vh;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: ${BOX.LARGE_SCREEN}px;
  gap: 30px;
  background-color: ${WHITE};
  border-radius: ${BORDER_RADIUS}px;
  box-sizing: border-box;
  box-shadow: ${BOX_SHADOW};

  @media screen and (max-width: ${BOX.LARGE_SCREEN}px) {
    margin: 0;
    padding: 30px;
    width: 100%;
    border-radius: 0;
  }

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: ${BOX.SCREEN}px;

  @media screen and (max-width: ${BOX.LARGE_SCREEN}px) {
    width: 100%;
  }
`;
