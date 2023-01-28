import * as React from 'react' ;

import { AirDropButton, BtnGroup, MintButton, MintNowDiv,
    TimerDiv, TimeGroup, NumberPara, UnitLabel
} from '../styles/MintNow.styles';

import MintNft from '../Modals/MintNft';

let timer ;

const MintNow = () => {
    const [openMintModal, setOpenMintModal] = React.useState(false) ;
    const [curDate, setCurDate] = React.useState(new Date()) ;

    const handleOpenMintModal = () => { setOpenMintModal(true) } ;
    const handleCloseMintModal = () => { setOpenMintModal(false) } ;

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
                <BtnGroup>
                    <MintButton onClick={handleOpenMintModal}>Mint Now</MintButton>
                    <AirDropButton>Join Airdrop</AirDropButton>
                </BtnGroup>
            </MintNowDiv>
            <MintNft 
                open={openMintModal}
                handleClose={handleCloseMintModal}
            />
        </>
    )
}

export default MintNow;