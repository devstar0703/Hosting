import tagStyled from 'styled-components';

export const SectionTitle = tagStyled.div`
    font-size : 30px;
    font-weight : bold;
    color: black;
    padding-bottom : 10px;
`

export const Row = tagStyled.div`
    display :flex;
    justify-content : space-between ;
    align-items : center;

    padding-left : 1%;
    padding-right : 1%;
`

export const ViewMore = tagStyled.p`
    color :#009688;
    font-size : 15px;
    cursor : pointer;
    font-weight: bold;

    display : flex;
    align-items: center;
`