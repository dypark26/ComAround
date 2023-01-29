import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    @font-face {
        font-family: 'Pretendard-Light';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

  body {
    font-family: "Pretendard-Light";
    line-height: 1.5;
  }

`;

export default GlobalStyle;
