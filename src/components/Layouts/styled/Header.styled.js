import tagStyled from 'styled-components' ;

export const HeaderBody = tagStyled.div`

`

export const HeaderTop = tagStyled.div`
    width : 100%;
    height : ${props => props.theme.layout.header}px;
    box-sizing : border-box ;

    display : flex;
    justify-content : space-between ;
    align-items : center;
    
    gap : 10px;

    padding : 10px 2%;

    background : black;

    svg {
        color : white;
        font-size : 30px;
    }
`

export const Title = tagStyled.p`
    font-size : 30px;
    font-weight : bold;
    color: white;
    
    display : flex;
    align-items : center;

    margin : 0px;
`
export const BackgroundDiv = tagStyled.div`
    background-image : url('${props => props.image}') ;
    background-position : center;
    background-size : cover;

    height : 600px;

    position : relative;
`

export const BackOverlay = tagStyled.div`
    background : #00000099 ;

    width : 100%;
    height : 100%;

    box-sizing : border-box;

    left : 0px;
    top : 0px;

    display : flex;
    flex-direction : column ;
    justify-content : flex-end;

    padding-left : 3%;
    padding-right : 3%;
    padding-bottom : 250px;

    p {
        margin : 0px;
    }
`
export const Prefix = tagStyled.p`
    font-size : 13px;
    color : lightgray;
    text-transform : uppercase;
`

export const Location = tagStyled.p`
    color :white;
    font-size : 44px;
    font-weight : bold;
`
export const Train = tagStyled.p`
    font-size : 20px;
    color: rgba(255, 255, 255, 0.5);
`

export const Route = tagStyled.p`
    font-size : 16px;
    color: white;

    display : flex;
    align-items : center;
    gap : 20px;

    padding-top: 30px;
`
export const InfoRow = tagStyled.div`
    padding-top : 30px;

    display : flex;
    align-items : center;
    gap : 20px;
`
export const InfoItem = tagStyled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`

export const InfoDetail = tagStyled.div`

`

export const Desc = tagStyled.p`
    color: rgba(255, 255, 255, 0.5);
    font-size :13px;
`

export const Status = tagStyled.p`
    color: rgb(255, 255, 255);
    font-size : 16px;
`
export const IconDiv = tagStyled.div`
    svg {
        color :white;
        font-size : 30px;
    }
`

export const Row = tagStyled.div`
    display : flex;
    justify-content : space-between ;
    align-items : flex-end;
`

export const ArrowRow = tagStyled.div`
    display : flex;
    gap : 10px;

    svg {
        color : white;
        font-size : 25px;
    }
`

export const HeaderCarousel = tagStyled.div`
    width : 100%;
    box-sizing : border-box;

    position : absolute;
    left : 0px;
    bottom : 0px;

    & .swiper {
        // width: 100%;
        height: 100%;
    }

    & .swiper-slide {
        width : 350px;
        height : 210px;

        overflow : hidden ;

        position : relative;

        :hover {
            & .image {
                transform: scale(1.2);
            }
        }
    }
`

export const LinkItem = tagStyled.div`
    background-image : url(${props => props.image}) ;
    background-position : center;
    background-size : cover;

    transition : 0.3s;

    height : 100%;
    width : 100%;
`

export const LinkBackOverlay = tagStyled.div`
    width : 100%;
    height : 100%;

    background : #00000045 ;

    padding-left : 10px;
    padding-bottom : 20px;
    
    position : absolute;

    left : 0px;
    top : 0px;

    display : flex;
    flex-direction : column;
    justify-content : flex-end;
`

export const LinkDesc = tagStyled.p`
    color : white;
    font-size : 1.1rem;
`