import { createGlobalStyle } from 'styled-components';
import { responsive } from './responsive';
// normalize.css

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }

  img,
  svg {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  ::-webkit-scrollbar-track {
    background:transparent;
    border-radius: 6px;
    right: 2px;
    position: absolute;
  }
 
  ::-webkit-scrollbar-thumb {
    background: rgb(72, 79, 87); 
    border-radius: 6px;
  }

  body {
    margin: 0;
    overflow: auto;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    background-color: ${({ theme }) => theme.bgColor};
    font-family: ${({ theme }) => theme.DEFAULT_FONT};
    transition: background-color 0.2s;
  }

  #root{
    width: 100%;    
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  em {
    font-style: normal;
    display: inline-block;
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }

  pre {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }

  a, button {
    cursor: pointer;
    background-color: transparent;
    text-decoration: none;
  }

  path, circle {
    transition: 0.1s;
  }

  b,
  strong {
    font-weight: 500;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    appearance: button;
    transition: 0.2s;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; 
    appearance: textfield; 
    outline-offset: -2px; 
  }

  [type=""]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }

  [hidden] {
    display: none;
  }

  @media ${responsive.sm} {
    body {
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      overflow-y: scroll; 
      background-color: ${({ theme }) => theme.bgColor_mobile};

      ::-webkit-scrollbar {
        display: none;
      }
    }

    ::-webkit-scrollbar {
      display: none
    }
  }
`;
