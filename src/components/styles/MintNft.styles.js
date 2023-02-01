import { styled } from "@mui/material/styles";

import htmlStyled from 'styled-components';

import { Button, Paper, TextField } from "@mui/material";

import BackImg from 'src/assets/background-min.png';

export const CloseDiv = htmlStyled.div`
    position : absolute;
    border-radius : 50%;

    width : 40px;
    height : 40px;

    top : 10px;
    right : 20px;

    background-color: #ffffff7a;

    display : flex;
    justify-content : center;
    align-items : center;

    cursor : pointer;
    transition : 0.3s;
    
    :hover {
        background-color : white;
    }
`

export const BackImgDiv = htmlStyled.div`
    background-image : url('${BackImg}') ;
    background-size : 100% 240%;
    background-repeat : no-repeat no-repeat;
    background-position : top center;

    height : 120px;
    width : 100%;
`

export const StyledPaper = styled(Paper)`
    background-color : black ;
    
    .MuiDialogContent-root {
        position : relative;

        padding : 0px ;

        display : flex;
        flex-direction : column;
        align-items : center;

        padding-bottom : 30px;
    }
`

export const TitlePara = htmlStyled.p`
    color : white;
    text-align : center;

    padding-top : 30px;
    padding-bottom : 10px;

    font-size : 30px;
    font-weight : bold;
`

export const DescPara = htmlStyled.p`
    font-size : 16px;
    color : #4a494b;

    text-align : center;
`

export const PassPriceDiv = htmlStyled.div`
    padding-left : 40px;
`

export const FreeMintDiv = htmlStyled.div`
    width : 100%;

    display : flex;
    flex-direction : column;
    align-items : center;

    border-right : 1px solid #4a494b;
`

export const FormDiv = htmlStyled.div`
    width : 100%;

    box-sizing: border-box;

    padding-left : 20px;
    padding-right: 20px;
`

export const FormGroup = htmlStyled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;

    width : 100%;

    box-sizing: border-box;

    padding : 15px 25px;

    border : 1px solid rgb(18 20 23);
    border-radius: 20px;

    margin-bottom : 20px;
`

export const Label = htmlStyled.p`
    color : white;
    font-size : 20px;
    text-align : center;
`

export const InputForm = styled(TextField)`

`

export const AmountDiv = htmlStyled.div`
    display : flex;
    align-items :  center;
`;

export const DecButton = styled(Button)`
    color : white;
    background-color : #39314c;
    border-top-right-radius : 0px;
    border-bottom-right-radius: 0px;

    width : 20px !important;
    padding : 0px !important;

    min-width : 40px;
    height: 40px;

    &:hover {
        background : #39314c;
    }

    font-size : 20px;

    border : 1px solid gray;
`

export const IncButton = styled(Button)`
    color : white;
    background-color : #39314c;
    border-top-left-radius : 0px;
    border-bottom-left-radius: 0px;

    width : 20px !important;
    padding : 0px !important;

    min-width : 40px;
    height: 40px;
    font-size : 20px;

    &:hover {
        background : #39314c;
    }

    border : 1px solid gray;
`

export const NumberPara = htmlStyled.p`
    color : white;
    background : #4c4866d1;

    width : 35px;
    height : 35px;

    display : flex;
    align-items: center;
    justify-content: center;
`

export const PricePara = htmlStyled.p`
    color : white;
    font-size : 25px;
    font-weight: bold;
`