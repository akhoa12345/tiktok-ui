import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --primary: #fe2c55;
    --black: #000;
    --white: #fff;
    --text-color: #333;

    // Default layout 
    --default-layout-header-height: 60px;
    --default-layout-width: 1150px;
    --default-layout-horizontal-spacer: 24px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 65.5%
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    color: var(--text-color);

    .tippy-box {
      border-radius: 8px;
      font-weight:600;
      font-size:1.6rem;
      line-height:2.2rem;
      background-color: rgba(84,84,84,0.92);
    }

    .tippy-arrow {
      color: rgba(84,84,84,0.92);
    }

    .tippy-content {
      padding: 8px 9px;
    }

    .tippy-box[data-placement^="bottom"] > .tippy-arrow:before {
      top:-8px;
    }
  }

  button, input, [tabindex] {
    outline: none;
    border: none;
  }

  a[href] {
    color: var(--text-color);
    text-decoration: none;
  }
`;

export default GlobalStyle;
