import { createGlobalStyle } from 'styled-components';

import { theme } from './themes/theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${theme.font.sizes.xxxxsmall};
  }

  body {
    background-color: ${theme.colors.neutral_300};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, 
  input, 
  textarea, 
  button {
    font-family: 'Helvetica Neue', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;