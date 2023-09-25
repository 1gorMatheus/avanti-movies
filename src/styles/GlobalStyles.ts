import { createGlobalStyle } from "styled-components";
import { colors } from "../configs/colors";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      color: ${colors.text};
      font-size: 62.5%;
      font-family: "Open Sans",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell,  "Helvetica Neue", sans-serif;
    }

    body {
      background-color: ${colors.background};
    }

    a,
    a:hover,
    a:visited {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
`;

export default GlobalStyle;
