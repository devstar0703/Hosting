import * as React from 'react' ;

import { useTheme } from '@mui/styles';

import { 
    HeaderBody, HeaderTop, HeaderCarousel,
    Title,
    BackgroundDiv, 
    BackOverlay,
    Prefix, Train, Location,Route,
    InfoRow, InfoItem, InfoDetail,
    IconDiv, Status, Desc,
    LinkItem, LinkBackOverlay, LinkDesc,
    Row, ArrowRow
} from './styled/Header.styled';

import MenuIcon from '@mui/icons-material/Menu';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import Carousel1 from 'src/assets/header/carousel_1.png';

import RouteImage from 'src/assets/header/route.png';
import AccessImage from 'src/assets/header/internet_access.png';
import FoodImage from 'src/assets/header/food.png';
import AltitudeImage from 'src/assets/header/altitude.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';

const Header = () => {
    const theme = useTheme() ;

    const linkList = [
        {
            desc : "Check route info",
            to : '/check-route',
            image : RouteImage
        },
        {
            desc : 'Altitude',
            to : '/altitude',
            image : AltitudeImage
        },
        {
            desc : 'Internet Access',
            to : '/internet-access',
            image : AccessImage
        },
        {
            desc : "Enjoy our delicious food",
            to : "/enjoy-food",
            image : FoodImage
        }
    ];

    const [swiperCtrl, setSwiperCtrl] = React.useState(null) ;
    const [currentIndex, setCurrentIndex] = React.useState(0) ;

    React.useEffect(() => {
        console.log(currentIndex);
        swiperCtrl?.slideTo(currentIndex) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]) ;

    const goToNextSlide = () => {
        if(swiperCtrl?.isEnd) return ;
        setCurrentIndex(currentIndex + 1) ;
    }

    const goToPrevSlide = () => {
        if(swiperCtrl?.isBeginning) return ;
        setCurrentIndex(currentIndex - 1) ;
    }
    return (
        <>
            <HeaderBody>
                <HeaderTop  theme={theme}> 
                    <MenuIcon />
                    <Title><RssFeedIcon/>Rave</Title>
                    <MenuIcon />
                </HeaderTop>
                
                <BackgroundDiv
                    image={Carousel1}
                >
                    <BackOverlay>
                        <Prefix>welcome to the</Prefix>
                        <Location>Bernina Express</Location>
                        <Train>BEX 951 Chur - Tirano</Train>
                        <Route><LocationOnIcon/>Chur - Tirano</Route>
                        <Row>
                            <InfoRow>
                                <InfoItem>
                                    <IconDiv><SpeedOutlinedIcon /></IconDiv>
                                    <InfoDetail>
                                        <Status>42 km/h</Status>
                                        <Desc>Speed</Desc>
                                    </InfoDetail>
                                </InfoItem>
                                <InfoItem>
                                    <IconDiv><LandscapeOutlinedIcon /></IconDiv>
                                    <InfoDetail>
                                        <Status>766 m</Status>
                                        <Desc>Altitude</Desc>
                                    </InfoDetail>
                                </InfoItem>
                                <InfoItem>
                                    <IconDiv><AvTimerIcon /></IconDiv>
                                    <InfoDetail>
                                        <Status>242 of 286 MB</Status>
                                        <Desc>Data of Usage</Desc>
                                    </InfoDetail>
                                </InfoItem>
                            </InfoRow>
                            <ArrowRow>
                                <ArrowBackOutlinedIcon 
                                    onClick={goToPrevSlide}
                                />
                                <ArrowForwardOutlinedIcon 
                                    onClick={goToNextSlide}
                                />
                            </ArrowRow>
                        </Row>
                        <HeaderCarousel>
                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={0}
                                pagination={{
                                clickable: true,
                                }}
                                onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
                                onSwiper={setSwiperCtrl}
                            >
                                {
                                    linkList.map((link, index) => (
                                        <SwiperSlide key={index}>
                                            <LinkItem image={ link.image } className='image' >
                                                
                                            </LinkItem>
                                            <LinkBackOverlay>
                                                <LinkDesc>{ link.desc }</LinkDesc>
                                            </LinkBackOverlay>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </HeaderCarousel>
                    </BackOverlay>
                </BackgroundDiv>
            </HeaderBody>
        </>
    )
}

export default Header;