import styled from "styled-components";
import { PADDING } from "../../constants/sizes";

export const InputForTitle = styled.input`
  width: 100%;
  font-size: 32px;
  padding: ${PADDING.MEDIUM}px;
  border: none;
  outline: none;
  text-align: center;
  box-sizing: border-box;
`;

// export const InputTitle = ({ children }: { children: string }) => (
//   <InputForTitle role="textbox" contentEditable suppressContentEditableWarning>
//     {children}
//   </InputForTitle>
// );

export const Label = styled.label`
  font-size: 1.8rem;
  margin: 0;
  padding: 0;
  display: block;
`;

export const Item = styled.label`
  display: block;
  margin-bottom: 20px;
`;
