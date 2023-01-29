import htmlStyled from 'styled-components';
import { styled } from '@mui/material/styles';
import { TextField, Paper, Button } from '@mui/material';

export const StyledPaper = styled(Paper)`
    background-color : black ;
    
    .MuiDialogContent-root {
        position : relative;

        display : flex;
        flex-direction : column;
        align-items : center;

        padding : 20px 20px;
    }
`

export const DescPara = htmlStyled.p`
    max-width : 450px;
    text-align : center;
    color: white;

    font-size : 18px;
`

export const StyledTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
        margin-top : 30px;
        margin-bottom : 30px;

        background : #1F2025 !important;

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
        border-radius : 5px;
    }
`

export const RedSpan = htmlStyled.span`
    color: red;
`

export const RVVDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    width : 100%;
`

export const AmountPara = htmlStyled.p`
    font-size : 30px;
    font-weight : bold;
    color : white;
`

export const Label = htmlStyled.p`
    color : #4a494b;
    font-size : 14px;
`

export const ConfirmButton = styled(Button)`
    background-color: white;
    padding : 16px 48px;
    border-radius : 30px;
    color : black;

    &:hover {
        background-color : white;
    }

    margin-bottom : 20px;
`