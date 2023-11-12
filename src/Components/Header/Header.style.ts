import styled from "styled-components";
import { BOX, PADDING } from "../../constants/sizes";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: ${PADDING.MEDIUM}px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
    padding: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  margin-bottom: ${PADDING.MEDIUM}px;
  display: flex;
`;

export const QuickActions = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: ${PADDING.SMALL}px;
`;
