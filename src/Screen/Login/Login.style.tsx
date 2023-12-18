import styled from "styled-components";
import { PINK, WHITE } from "../../constants/colors";
import { BORDER_RADIUS, BOX, PADDING } from "../../constants/sizes";

export const LoginWrapper = styled.div`
  width: ${BOX.LARGE}px;
  display: flex;
  background-color: ${WHITE};
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;
  border-radius: ${BORDER_RADIUS}px;

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
    flex-direction: column-reverse;
    border-radius: 0;
  }
`;

export const LoginForm = styled.div`
  position: relative;
  flex-basis: ${BOX.SMALL}px;
  padding: ${PADDING.EXTRA_LARGE}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${BOX.LARGE}px) {
    flex-grow: 1;
  }
`;

export const LoginSide = styled.div`
  flex-grow: 1;
  background-color: ${PINK};
  padding: 30px;
  border-radius: 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0;

  @media screen and (max-width: ${BOX.LARGE}px) {
    flex-grow: 0;
    border-radius: 0 0 0 ${BORDER_RADIUS}px;
  }

  svg {
    width: 100%;
    margin: auto;
    display: block;

    @media screen and (max-width: ${BOX.LARGE}px) {
      width: 40%;
    }

    @media screen and (max-width: ${BOX.MEDIUM}px) {
      width: 80%;
    }
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
