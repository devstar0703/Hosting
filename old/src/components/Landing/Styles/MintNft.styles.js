import htmlStyled from 'styled-components' ;

import { makeStyles, withStyles } from '@mui/styles';

import { Button, Radio } from '@mui/material';

export const useStyles = makeStyles(() => ({
    paper : {
        fontFamily : 'Bahnschrift SemiBold',
        
        backgroundColor : 'white !important',
        borderRadius : '15px !important',
        boxShadow : "7px 4px 20px 1px rgb(101 117 243 / 68%), 4px -7px 13px 5px rgb(101 117 243 / 68%), 7px 8px 20px 8px rgb(48 175 70 / 67%) !important",

        "& .MuiDialogTitle-root" : {
            color : 'gray'
        },
    }
}));

export const MintNftDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    gap : 20px;

    padding : 10px;
`

export const SettingDiv = htmlStyled.div`
    display : flex;
    justify-content : center;
    width : 100%;
`
export const NumberDiv = htmlStyled.div`
    border-top : 1px solid lightgray;
    border-bottom : 1px solid lightgray;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 20px;
    font-weight : bold;
    width : 50px;
`
export const IncreaseButton = withStyles({
    root : {
        boxShadow : 'none !important',
        border : '1px solid lightgray !important',
        color : 'black !important',
        background : 'white !important',
        borderTopLeftRadius : '0px !important',
        borderBottomLeftRadius : '0px !important'
    }
})(Button) ;
export const DecreaseButton = withStyles({
    root : {
        boxShadow : 'none !important',
        border : '1px solid lightgray !important',
        color : 'black !important',
        background : 'white !important',
        borderTopRightRadius : '0px !important',
        borderBottomRightRadius : '0px !important'
    }
})(Button) ;

export const AmountDiv = htmlStyled.div`
    display : flex;
    justify-content : center;
`

export const Label = htmlStyled.p`
    font-size : 20px;
    font-weight :  bold;
`