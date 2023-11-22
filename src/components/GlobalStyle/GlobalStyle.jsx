import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --primary: #fe2c55;
    --black: #000;
    --white: #fff;
    --text-color: #333;
    --font-family: 'ProximaNova', sans-serif;

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
    font-family: var(--font-family);
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    color: var(--text-color);
    overflow-y: overlay;

    // Custom Tippy tooltip
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

  //  Scrollbar CSS
  html ::-webkit-scrollbar {
    border-radius: 0px;
    width: 8px;
  }

  html *::-webkit-scrollbar {
    border-radius: 0;
    width: 8px;
  }


  html ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(22, 24, 35, 0.06);
  }

  html *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(22, 24, 35, .06);
  }


  html ::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: rgba(0, 0, 0, 0);
  }

  html *::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0);
  }


  button, input, [tabindex] {
    outline: none;
    border: none;
  }

  a[href] {
    color: var(--text-color);
    text-decoration: none;
  }

  // Fonts embedded 
  @font-face {
    font-family: ProximaNova;
    src: url('/assets/fonts/Proxima-Nova-Regular.woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: ProximaNova;
    src: url('/assets/fonts/ProximaNova-Semibold.woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: ProximaNova;
    src: url('/assets/fonts/Proxima-Nova-Bold.woff');
    font-weight: 700;
  }

  @font-face {
    font-family: SofiaPro;
    src: url('/assets/fonts/sofiapro-bold.woff');
    font-weight: 700;
  }
`;

export default GlobalStyle;
