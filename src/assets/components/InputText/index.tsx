import { forwardRef, InputHTMLAttributes } from "react"
import { styled } from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  errorMessage?: string
}

export const Divmain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1;
`;

export const Divmain2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
	position: relative;
	margin-bottom: 25px;

    input:focus{ 
        border: none;	
        outline: none;
        border-bottom:1px solid green;	
    }

    input:focus ~ label, input:valid ~ label{
        top: -12px;
        font-size: 10px;
    }
`

export const InputMain = styled.input`
    border: 0;
    border-bottom: 1px solid #555;  
    background: transparent;
    width: 100%;
    padding: 8px 0 5px 0;
    font-size: 14px;
    color: #fff;
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...rest }, ref) => {
    return (
        <Divmain>
         {label || errorMessage ? (
          <Divmain2>
            <span>{label}</span>
            <span>{errorMessage}</span>
          </Divmain2>
         ) : null}
         <InputContainer>
          <InputMain {...rest} ref={ref} />
         </InputContainer> 
        </Divmain>  
    )
  },
)