import htmlStyled from 'styled-components' ;

import { Button, styled } from '@mui/material';

export const MintNowDiv = htmlStyled.div`
    p {
        text-align : center;
    }

    background : black;
    border-radius : 20px;
    padding : 20px 40px;
    color: white;

    display :flex;
    flex-direction : column;
    align-items : center;

    max-width : 385px;
`

export const CircularDiv = htmlStyled.div`
    width : 105px;
    height : 105px;

    margin-top : 40px;
    margin-bottom : 20px;
`

export const CounterDiv = htmlStyled.div`
    margin-top : 40px;
    margin-bottom : 30px;

    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 300px;
`

export const CounterButton = htmlStyled.button`
    background-color : black;
    color : white;
    font-size : 20px;
    font-weight : bold;
    cursor : pointer;
    width : 40px;
    height : 40px;
`

export const StyledP = htmlStyled.p`
    font-size : 20px;
    color: white;
    font-weight : bold ;
`