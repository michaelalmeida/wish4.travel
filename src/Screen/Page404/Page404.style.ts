import styled from "styled-components";
import { WHITE } from "../../constants/colors";
import { BORDER_RADIUS, BOX, PADDING } from "../../constants/sizes";

export const Page404Wrapper = styled.div`
  padding: ${PADDING.LARGE}px;
  width: ${BOX.LARGE}px;
  display: flex;
  background-color: ${WHITE};
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;
  border-radius: ${BORDER_RADIUS}px;
  min-height: 200px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
    height: 100vh;
  }
`;
