import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import htmlStyled from 'styled-components';

import MintNowBackground from 'src/assets/Landing/mint_now.jpg' ;
import Rope from 'src/assets/Landing/rope.png' ;
import ServiceBg from 'src/assets/Landing/services-bg-2.png' ;
import WaveImg from 'src/assets/Landing/wave.svg' ;

export const TopDiv = htmlStyled.div`
    position : relative ;
`

export const MainDiv = htmlStyled.div`
    position : relative;
`

export const StrongBackOverlay = htmlStyled.div`
    position : absolute;
    background : #00000026 ;

    left : 0px;
    top : 0px;

    width : 100%;
    height : 100%;
`

export const MintNowDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    background-image : url('${MintNowBackground}') ;

    width : 100%;

    background-position : center center;

    padding-top : 450px;
    padding-bottom : 250px;

    p {
        text-align : center;
    }
`

export const Row = htmlStyled.div`
    display :flex;
    justify-content : center ;
`

export const MintButton = withStyles({
    root  : {
        fontFamily: "'Playfair Display', Sans-serif",
        borderRadius : '0px !important',
        background : '#E7D58B !important',
        fontSize : '16px !important',
        textTransform : "capitalize !important",
        padding : '5px 20px !important',
        transition : '1s',

        marginRight : '10px !important',

        "&:hover" : {
            background : 'black !important',
            color : 'white !important'
        }
    }
})(Button) ;

export const RopeLine = htmlStyled.div`
    background-image : url('${Rope}');
    background-repeat: repeat no-repeat;
    height : 20px;
    width : 100%;
`

export const WaveDiv = htmlStyled.div`
    display : flex;
    justify-content : center;
`

export const WaveLine = htmlStyled.div`
    mask-image : url('${WaveImg}');

    background : #E7D58B;

    height : 20px;
    width : 25px;
`

export const SmallTitle = htmlStyled.p`
    color: #E7D58B !important;
    font-family: "Playball", Sans-serif;
    font-size: 22px;
    font-weight: 200;
`

export const Title = htmlStyled.p`
    color: #E8B923 !important;
    font-family: "Playfair Display", Sans-serif;
    font-size: 48px;
`

export const TimeDiv = htmlStyled.div`
    width : 80%;

    padding-bottom : 30px;

    display : flex;
    justify-content : center;
    gap : 30px;
`

export const NumberPara = htmlStyled.p`
    background-color : white;
    opacity: 0.7;
    height : 70px;
    width : 150px;

    font-size : 25px;
    font-weight : bold;

    display : flex;
    align-items : center;
    justify-content : center;
`

export const UnitPara = htmlStyled.span`
    padding-left : 10px;
    font-size : 15px;
`