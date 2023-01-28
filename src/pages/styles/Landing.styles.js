import htmlStyled from 'styled-components' ;

import BackImg from 'src/assets/background-min.png' ;

export const LandingDiv = htmlStyled.div`
    background-image : url('${BackImg}');
    background-position : center center;
    background-repeat : no-repeat no-repeat;
    background-size : fit-content fit-content;

    width : 100vw;
    height : 100vh;

    display : flex;
    flex-direction : column;
    justify-content : center;
`

