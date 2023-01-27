import * as React from 'react' ;

import { useWalletInfo } from 'src/contexts/WalletContext';

import MetamaskConn from 'src/components/Common/Wallets/MetamaskConn';

import Header from 'src/components/Layouts/Header';

import { Grid } from '@mui/material';

import { 
    MintButton,
    MintNowDiv,
    RopeLine,
    TopDiv,
    MainDiv, StrongBackOverlay,
    Row,
    TimeDiv,
    NumberPara,
    UnitPara
} from './Styles/MintNow.styles';

import MintNft from './Modals/MintNft';

const MintNow = (props) => {

    const {
        isWalletConnected
    } = useWalletInfo() ;

    const [isOpenMintModal, setOpenMintModal] = React.useState(false) ;
    const [cur_date, setCurDate] = React.useState(new Date());
    
    const handleOpenMintModal = () => { setOpenMintModal(true) }
    const handleCloseMintModal = () => { setOpenMintModal(false) }

    React.useEffect(() => {
        setInterval(() => {
            setCurDate(new Date());
        }, 1000);
    }, []) ;

    return (
        <TopDiv>
            <StrongBackOverlay/>
            <MainDiv>
                <MintNowDiv>
                    <TimeDiv>
                        <NumberPara>{cur_date.getDate()} <UnitPara>Days</UnitPara></NumberPara>
                        <NumberPara>{cur_date.getHours()} <UnitPara>Hours</UnitPara></NumberPara>
                        <NumberPara>{cur_date.getMinutes()} <UnitPara>Mins</UnitPara></NumberPara>
                        <NumberPara>{cur_date.getSeconds()} <UnitPara>Seconds</UnitPara></NumberPara>
                    </TimeDiv>
                    <Row>
                        <MintButton disabled={!isWalletConnected} onClick={() => handleOpenMintModal()}>Mint Now</MintButton>
                        <MetamaskConn />
                    </Row>
                </MintNowDiv>
                <RopeLine />
            </MainDiv>
            <Header />

            <MintNft 
                open={isOpenMintModal}
                handleClose={handleCloseMintModal}
            />
        </TopDiv>
    )
}

export default MintNow;