import { createGlobalStyle } from 'styled-components';

import { theme } from './themes/theme';

export const GlobalStyles = createGlobalStyle`
  * {
    /* margin: 0;
    padding: 0; */
    box-sizing: border-box;
    /* /* outline: none; */
  }

  html {
    font-size: ${theme.font.sizes.xxxxsmall};
  }

  body {
    background-color: ${theme.colors.background_color_main};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: 'Helvetica Neue', sans-serif;;
  }

  button {
    cursor: pointer;
  }
`;