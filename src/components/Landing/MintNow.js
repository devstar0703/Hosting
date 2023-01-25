import * as React from 'react' ;

import { useWalletInfo } from 'src/contexts/WalletContext';

import MetamaskConn from 'src/components/Common/Wallets/MetamaskConn';

import Header from 'src/components/Layouts/Header';

import { 
    MintButton,
    MintNowDiv,
    RopeLine,
    TopDiv,
    MainDiv, StrongBackOverlay,
    Row
} from './Styles/MintNow.styles';
import MintNft from './Modals/MintNft';

const MintNow = (props) => {

    const {
        isWalletConnected
    } = useWalletInfo() ;

    const [isOpenMintModal, setOpenMintModal] = React.useState(false) ;
    
    const handleOpenMintModal = () => { setOpenMintModal(true) }
    const handleCloseMintModal = () => { setOpenMintModal(false) }

    return (
        <TopDiv>
            <StrongBackOverlay/>
            <MainDiv>
                <MintNowDiv>
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