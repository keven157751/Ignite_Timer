import { ButtonContainer } from "./Button.styles"

interface ButtonProps {
    color?: 'primary' | 'secundary' | 'danger' | 'success'
}

export function Button({ color = 'primary'}: ButtonProps) {
    return <ButtonContainer>Enviar</ButtonContainer>
}