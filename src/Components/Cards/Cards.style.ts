import styled from "styled-components";
import { BORDER_RADIUS_INTERNAL, BOX, PADDING } from "../../constants/sizes";
import { MAIN_COLOR, WHITE } from "../../constants/colors";

export const HighlightCard = styled.div`
  padding: ${PADDING.LARGE}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 120px;
  border-radius: ${BORDER_RADIUS_INTERNAL}px;
  background-color: ${WHITE};

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;

export const HighlightCardContent = styled.div`
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

export const HighlightCardAction = styled.div`
  margin-left: 10px;
  display: inline;
  color: ${MAIN_COLOR};
  cursor: pointer;
  transition: all 0.5s ease;

  svg {
    margin-right: 10px;
  }
`;
