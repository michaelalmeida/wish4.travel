import styled from "styled-components";
import { WHITE } from "../../constants/colors";
import { BOX, PADDING } from "../../constants/sizes";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  //  background-color: ${WHITE};
  padding: ${PADDING.MEDIUM}px;
  justify-content: center;

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 200px;
`;

export const AvatarWrapper = styled.div`
  margin-left: 30px;
  display: flex;
`;

export const QuickActions = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  flex-basis: 200px;
`;
