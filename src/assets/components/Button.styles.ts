import styled, { css } from 'styled-components'; 

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'sucess';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secundary: 'orange',
    danger: 'red',
    sucess: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 100px;

    background-color: ${props => props.theme.primary}

    /* ${props => {
        return css`
        background-color: ${buttonVariants[props.variant]} 
        `
    }} */
`