import htmlStyled from 'styled-components' ;

import BackImg from 'src/assets/background-min.png' ;

export const LandingDiv = htmlStyled.div`
    background-image : url('${BackImg}');
    background-position : center center;
    background-repeat : no-repeat no-repeat;
    background-size : cover;

    width : 100vw;
    height : 100vh;

    display : flex;
    flex-direction : column;
    justify-content : center;

    & .MuiGrid-container  {
        & .MuiGrid-item {
            display : flex;
            justify-content : center;
            align-items : flex-end;
        }
    }
`

export const BackOverlay = htmlStyled.div`
    background-color : #00000054;

    height : 100%;
    
    display : flex;
    align-items : center;

    padding-left : 2%;
    padding-right : 2%;
`

