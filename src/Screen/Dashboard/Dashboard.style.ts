import styled from "styled-components";
import { BACKGROUND, YELLOW } from "../../constants/colors";
import { BORDER_RADIUS, PADDING } from "../../constants/sizes";

export const DashboardWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-grow: 1;
`;

export const Content = styled.div`
  box-sizing: border-box;
  margin: ${PADDING.LARGE}px 0;
  padding: ${PADDING.EXTRA_LARGE}px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${BACKGROUND};
  border-radius: ${BORDER_RADIUS}px;
`;

export const Stats = styled.div`
  padding: 10px;
  flex-basis: 200px;
  display: flex;
  border-radius: 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0;
  background-color: ${YELLOW};
  flex-direction: column;
`;
