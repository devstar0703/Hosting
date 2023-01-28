import { Button } from '@mui/material';

import { styled } from '@mui/material/styles';

import htmlStyled from 'styled-components' ;

export const MintNowDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`
export const BtnGroup = htmlStyled.div`
    display : flex;
    gap : 20px;
`
export const MintButton = styled(Button)`

    background-color : #fdfdfdc2;
    border-radius: 20px;
    padding : 5px 20px;

    color : black;

    font-weight : bold;
    font-size : 12px;

    &:hover {
        background-color : white;
    }
`

export const AirDropButton = styled(Button)`
    background-color : red;
    border-radius : 20px;
    padding : 5px 20px;

    color : white;
    font-weight : bold;
    font-size : 12px;
`
export const TimerDiv = htmlStyled.div`
    display : flex;
    justify-content : center;
    gap : 20px;

    padding-bottom : 25px;
`

export const TimeGroup = htmlStyled.div`
    display : flex;
    flex-direction : column;
    gap : 10px;

    align-items : center;
`

export const NumberPara = htmlStyled.p`
    font-size : 18px;
    width : 50px;
    height : 50px;

    border-radius : 5px;

    background-color: white;
    color : black;
    font-weight : bold;

    display : flex;
    justify-content : center;
    align-items : center;
`

export const UnitLabel = htmlStyled.p`
    color: white;
    font-size : 15px;
    font-weight : bold;
`