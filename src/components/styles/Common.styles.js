import htmlStyled from 'styled-components' ;

import { Button, styled, TextField } from '@mui/material';

export const TitleDiv = htmlStyled.p`
    font-size : 24px;
    margin-top : 32px;
    color : white;
`

export const DescPara = htmlStyled.p`
    color: #64748b;
    font-size : 16px;
`

export const StyledButton = styled(Button)`
    margin-top : 20px;

    background : #fe3301;
    border-radius : 30px;
    padding: 10px 30px;
    color : white;
    text-transform : capitalize ;

    :hover {
        background : #fe3301; 
    }

    &:disabled {
        background : gray;
        cursor : not-allowed !important;
    }
`


export const StyledTextField = styled(TextField)`

    & .MuiFormHelperText-root {
        font-size : 14px;
        font-weight : bold;
    }

    &.success {
        & .MuiFormHelperText-root {
            color : #18bd18;
        }
    }

    &.error {
        & .MuiFormHelperText-root {
            color : red;
        }
    }

    & .MuiOutlinedInput-root {
        margin-top : 30px;
        background : #1F2025 !important;
        border-radius : 10px;

        & fieldset {
            border-color: none;
        }

        &:hover fieldset {
            border-color: none;
        }

        &.Mui-focused fieldset {
            border : 2px solid red;
        }

    }

    & .MuiInputBase-input {
        background : #1F2025 !important;
        color : white !important;
        border-radius : 10px;
        padding : 15px !important;
    }
`