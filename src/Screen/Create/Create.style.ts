import styled from "styled-components";
import { WHITE } from "../../constants/colors";
import { PADDING } from "../../constants/sizes";

export const CreateContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${WHITE};
`;

export const InputTitle = styled.input`
  font-size: 32px;
  padding: ${PADDING.MEDIUM}px;
  border: none;
  outline: none;
`;
