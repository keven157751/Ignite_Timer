import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
    variant?: ButtonVariant;
    children?: String;
}

export function Button({ variant = 'primary', children = ''}: ButtonProps) {
    return <ButtonContainer variant={variant}> {children} </ButtonContainer>
}
