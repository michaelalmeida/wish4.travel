import styled from "styled-components";
import { PADDING } from "../../constants/sizes";
import React from "react";

export const InputForTitle = styled.div`
  font-size: 32px;
  padding: ${PADDING.MEDIUM}px;
  border: none;
  outline: none;
  text-align: center;
`;

export const InputTitle = ({ children }: { children: string }) => (
  <InputForTitle role="textbox" contentEditable>
    {children}
  </InputForTitle>
);
