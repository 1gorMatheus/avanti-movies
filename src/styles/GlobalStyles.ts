import { createGlobalStyle } from "styled-components";
import { colors } from "../configs/colors";

const GlobalStyle = createGlobalStyle`

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
      background: radial-gradient(0%, #FF00C7, 100%, #7000FF)
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
