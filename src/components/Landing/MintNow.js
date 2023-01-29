import * as React from 'react' ;

import { Grid, FormGroup, FormControlLabel } from '@mui/material';

import { 
    AirDropButton, BtnGroup, MintButton, MintNowDiv,
    StyledCheckbox,
    TimerDiv, TimeGroup, NumberPara, UnitLabel,
    ImageGroup, ImageCard,
    CoreDiv,
    LinkList, LinkItem,
    WhiteSpan, RedSpan
} from '../styles/MintNow.styles';

import MintNft from '../Modals/MintNft';

import MintPassImg from 'src/assets/mint-pass.jpg';
import ScenceImg from 'src/assets/scene.jpg';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiscordIcon from 'src/assets/discord.svg';
import AirDrop from '../Modals/AirDrop';

let timer ;

const MintNow = () => {
    const linkList = [
        {
            icon : DiscordIcon,
            color : "#7289da",
            img : true
        },
        {
            icon : <LinkedInIcon/>,
            color : "#0EAC99"
        },
        {
            icon : <TwitterIcon/>,
            color : "#ff0000"
        },
        {
            icon : <TelegramIcon/>,
            color: '#0088cc'
        }
    ];

    const [openMintModal, setOpenMintModal] = React.useState(false) ;
    const [openDropModal, setOpenDropModal] = React.useState(false) ;

    const [curDate, setCurDate] = React.useState(new Date()) ;

    const handleOpenMintModal = () => { setOpenMintModal(true) } 
    const handleCloseMintModal = () => { setOpenMintModal(false) } 
    
    const handleOpenDropModal = () => { setOpenDropModal(true) }
    const handleCloseDropModal = () => { setOpenDropModal(false) }

    React.useEffect(() => {
        timer = setInterval(() => {
            setCurDate(new Date())
        }, 1000) ;

        return () => {
            clearInterval(timer);
        }
    }, []) ;

    return (
        <>
            <MintNowDiv>
                <Grid container>
                    <Grid item xs={3}>
                        <ImageGroup>
                            <ImageCard src={ScenceImg} />
                            <ImageCard src={MintPassImg} />
                        </ImageGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <CoreDiv>
                            <TimerDiv>
                                <TimeGroup>
                                    <NumberPara>
                                        { curDate.getDate() }
                                    </NumberPara>
                                    <UnitLabel>
                                        Days
                                    </UnitLabel>
                                </TimeGroup>
                                <TimeGroup>
                                    <NumberPara>
                                        { curDate.getHours() }
                                    </NumberPara>
                                    <UnitLabel>
                                        Hrs
                                    </UnitLabel>
                                </TimeGroup>
                                <TimeGroup>
                                    <NumberPara>
                                        { curDate.getMinutes() }
                                    </NumberPara>
                                    <UnitLabel>
                                        Mins
                                    </UnitLabel>
                                </TimeGroup>
                                <TimeGroup>
                                    <NumberPara>
                                        { curDate.getSeconds() }
                                    </NumberPara>
                                    <UnitLabel>
                                        Seconds
                                    </UnitLabel>
                                </TimeGroup>
                            </TimerDiv>
                            <FormGroup row sx={{mb : '20px'}}>
                                <FormControlLabel
                                    control={
                                        <StyledCheckbox 
                                            type='checkbox'
                                            name="is_enable_fa"
                                        />
                                    }
                                    label={
                                        <div>
                                            <WhiteSpan>I accept the Deviants Mints pass</WhiteSpan>
                                            <RedSpan>&nbsp;Terms of service</RedSpan>
                                        </div>
                                    }
                                />
                            </FormGroup>
                            <BtnGroup>
                                <MintButton onClick={handleOpenMintModal}>Mint Now</MintButton>
                                <AirDropButton onClick={handleOpenDropModal}>Join Airdrop</AirDropButton>
                            </BtnGroup>
                        </CoreDiv>
                    </Grid>
                    <Grid item xs={3}>
                        <LinkList>
                            { linkList.map((item, index) => (
                                <LinkItem color={item.color} key={index}>
                                    { item.img ? <img src={item.icon} alt='no'/> : item.icon }
                                </LinkItem>
                            )) }
                        </LinkList>
                    </Grid>
                </Grid>
                
                
                
            </MintNowDiv>
            <MintNft 
                open={openMintModal}
                handleClose={handleCloseMintModal}
            />

            <AirDrop
                open={openDropModal}
                handleClose={handleCloseDropModal}
            />
        </>
    )
}

export default MintNow;