import { ThemeProvider } from 'styled-components'; 
import { darkTheme, lightTheme } from './assets/components/styles/themes/default.ts';
import { GlobalStyles, Wrapper } from './assets/components/styles/GlobalStyle.tsx';
import { useState } from 'react';
import { LoginContainer } from './assets/pages/Login/Login.styles.ts';

const App: React.FC = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
        <Wrapper>
        <LoginContainer>
        </LoginContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default App;