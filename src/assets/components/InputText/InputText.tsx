import { InputMain, InputContainer} from "./InputText.styles"

interface InputProps {
    children?: String;
}

export function Input({children = ''}:InputProps) {
    return (  
    <>
        <InputContainer>
            <InputMain>
            </InputMain>
        </InputContainer>
    </>
    )
}