import styled, { css } from 'styled-components'; 

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'sucess';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secundary: 'orange',
    danger: 'red',
    sucess: '#4BB543'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: min-content;
    border: none;
    border-radius: 10px;
    margin: 10px;
    color: white;
    padding: 5px;

     ${props => {
        return css`
        background-color: ${buttonVariants[props.variant]} 
        `
    }} 
`