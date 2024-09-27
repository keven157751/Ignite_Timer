import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: 'Arial', sans-serif;
  }
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;