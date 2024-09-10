import { ThemeProvider } from 'styled-components'; 
import { Button } from  './assets/components/button.tsx';

import { defaultTheme } from './assets/components/styles/themes/default.ts';

export function App() {
  return (
    <header>
      <ThemeProvider theme={defaultTheme}>
        <Button variant='primary'> Primeira Cor </Button>
        <Button variant='secundary'> Segunda Cor </Button>
        <Button variant='sucess'> Sucesso </Button>
        <Button variant='danger'> Errado </Button>
      </ThemeProvider>
    </header>
  )
}
