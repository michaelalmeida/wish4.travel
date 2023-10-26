import styled from "styled-components";
import { BORDER_RADIUS_INTERNAL, BOX, PADDING } from "../../constants/sizes";
import { WHITE } from "../../constants/colors";
import backgroundSVG from "../../assets/illustrations/girl_pin_world.svg";

export const HighlightCard = styled.div`
  padding: ${PADDING.MEDIUM}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  border-radius: ${BORDER_RADIUS_INTERNAL}px;
  background-color: ${WHITE};
  background-image: url(${backgroundSVG}) no-repeat center center fixed;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;
