import { Button, Checkbox } from '@mui/material';

import { styled } from '@mui/material/styles';

import htmlStyled from 'styled-components' ;

export const MintNowDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    width : 100%;
    
    padding : 0px 50px;
`

export const StyledCheckbox = styled(Checkbox)`
    svg {
        color: red;
        font-size: 30px;
    }
`

export const WhiteSpan = htmlStyled.span`
    font-weight : bold;
    color: white;
`
export const RedSpan = htmlStyled.span`
    color : red;
    font-weight : bold;
`

export const BtnGroup = htmlStyled.div`
    display : flex;
    gap : 20px;
`
export const MintButton = styled(Button)`
    background-color : #fdfdfdc2;
    border-radius: 30px;
    padding : 12px 32px;

    color : black;

    font-weight : bold;
    font-size : 16px;

    &:hover {
        background-color : white;
    }
`

export const AirDropButton = styled(Button)`
    background-color : red;
    border-radius : 30px;
    padding : 12px 32px;

    color : white;
    font-weight : bold;
    font-size : 16px;
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

export const ImageCard = htmlStyled.div`
    background-image : url('${props => props.src}');
    height : 160px;
    
    min-width : 250px;
    max-width : 330px;

    border-radius : 10px;

    background-size : cover;
    background-repeat : no-repeat no-repeat;
    background-position : center center;
`

export const ImageGroup = htmlStyled.div`
    display : flex;
    flex-direction : column;

    gap : 20px;
`

export const CoreDiv = htmlStyled.div`
    width : 100%;
    height : 100%;

    display : flex;
    flex-direction : column;

    justify-content : center;
    align-items : center;
`

export const LinkList = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-end;
    justify-content :center;

    gap : 40px;
    height: 100%;

    cursor : pointer;
`
export const LinkItem = htmlStyled.div`
    svg {
        color : ${props => props.color};
        width: 24px;
        height : 24px
    }

    img {
        width : 24px;
        height : 24px;
    }
`