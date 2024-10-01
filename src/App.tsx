import { ThemeProvider } from 'styled-components'; 
import { darkTheme, lightTheme } from './assets/components/styles/themes/default.ts';
import { GlobalStyles } from './assets/components/styles/GlobalStyle.tsx';
import { useState } from 'react';
import { Login } from './assets/pages/Login/Login.tsx';

const App: React.FC = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Login />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App;