import styled from "styled-components";
import { BLACK, WHITE } from "../constants/colors";

interface TypographyProps {
  white?: boolean;
  marginBottom?: boolean;
  variation?: "thin" | "regular" | "bold";
}

export const H1 = styled.h1<TypographyProps>`
  font-size: 4.2rem;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.white ? WHITE : BLACK)};
  font-weight: ${(props) => (props.variation === "thin" ? 300 : 700)};
  margin-bottom: ${(props) => (props.marginBottom ? "30px" : 0)}; ;
`;

export const H2 = styled.h1<TypographyProps>`
  font-size: 3.2rem;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.white ? WHITE : BLACK)};
  font-weight: ${(props) => (props.variation === "thin" ? 300 : 700)};
  margin-bottom: ${(props) => (props.marginBottom ? "30px" : 0)}; ;
`;

export const P = styled.p<TypographyProps>`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.white ? WHITE : BLACK)};
  font-weight: 400;
  margin-bottom: ${(props) => (props.marginBottom ? "30px" : 0)};
  line-height: 150%;
  margin-bottom: ${(props) => (props.marginBottom ? "30px" : 0)}; ;
`;
