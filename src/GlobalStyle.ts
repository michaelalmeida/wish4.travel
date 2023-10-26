import { createGlobalStyle } from "styled-components";
import { BACKGROUND, BLACK, MAIN_COLOR } from "./constants/colors";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${BLACK};
    background-color: ${BACKGROUND};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }

  a {
    color: ${MAIN_COLOR};
    text-decoration: none;
    transition: all 0.5s ease;
  }
  
  div {
      box-sizing: border-box;
  }

  [class*="ant-btn"] {
    box-shadow: 0 0 0;
  }
  

`;

export default GlobalStyle;
