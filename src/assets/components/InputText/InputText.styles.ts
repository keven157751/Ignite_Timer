import styled from 'styled-components'; 
import { theme } from '../styles/themes/theme';

const inputVariants = {
    search: Boolean,
    email: Boolean,
    password: Boolean
}

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
`