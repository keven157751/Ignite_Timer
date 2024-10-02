import type { ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children?: String;
}

export function Button({ variant = 'primary', children = ''}: ButtonProps) {
    return <ButtonContainer variant={variant}> {children} </ButtonContainer>
}