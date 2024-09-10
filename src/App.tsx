import { ThemeProvider } from 'styled-components'; 
import { Button } from  './assets/components/button.tsx';

import { defaultTheme } from './assets/components/styles/themes/default.ts';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Button variant="primary" />
    <Button variant="secundary" />
    <Button variant="sucess" />
    <Button variant="danger"/>
    <Button />
    </ThemeProvider>
  )
}
