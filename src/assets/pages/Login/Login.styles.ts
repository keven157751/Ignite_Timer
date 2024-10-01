import styled from 'styled-components'; 
import { theme } from '../../components/styles/themes/theme';

export const LoginContainer = styled.div`   
    background-color: ${theme.colors.background_color_main};
    height: 65vh;
    width: 55rem;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`