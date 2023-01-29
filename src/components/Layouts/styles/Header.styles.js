import htmlStyled from 'styled-components' ;

export const NavDiv = htmlStyled.div`
    position : fixed;
    
    width : 100vw;

    box-sizing : border-box;
    
    display :flex;
    justify-content : space-between;
    align-items : center;

    padding : 20px;
`

export const StatusPara = htmlStyled.div`
    color : white;
    background : linear-gradient(180deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F;
    padding : 10px;
    border-radius : 5px;
`