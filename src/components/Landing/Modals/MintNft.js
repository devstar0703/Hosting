import * as React from 'react' ;

import { connect } from 'react-redux';
import { MintDmpsNFT, UploadNftToIpfs } from 'src/redux/actions/nft';

import { useWalletInfo } from 'src/contexts/WalletContext';

import { Dialog, DialogContent, DialogTitle, Divider } from '@mui/material';

import {  toast } from 'react-toastify/dist/react-toastify';

import {
    MintNftDiv,
    IncreaseButton,
    DecreaseButton,
    NumberDiv,
    SettingDiv,
    AmountDiv,
    Label,
    useStyles
} from '../Styles/MintNft.styles';

import { MintButton } from '../Styles/MintNow.styles';

import { whiteList_wallets } from 'src/constants/static';

const MintNft = (props) => {
    const {
        open, handleClose,
    } = props ;

    const {
        web3Provider, 
        walletAddress
    } = useWalletInfo() ;

    const classes = useStyles() ;

    const [mint_option, setMintOption] = React.useState(1) ;

    const plusOption = () => {
        if(whiteList_wallets.includes(walletAddress) && mint_option === 7) return ;
        if(!whiteList_wallets.includes(walletAddress) && mint_option === 2) return ;

        setMintOption(mint_option + 1) ;
    }

    const minusOption = () => {
        if(mint_option === 1) return ;

        setMintOption(mint_option - 1) ;
    }

    const handleMintNft = async () => {

        let id = toast.loading("Mint NFT Tx is pending...") ;

        await MintDmpsNFT(web3Provider, mint_option, walletAddress) ;

        toast.update(id, { render: "Mint NFT Tx is successful", type: "success", autoClose: 5000, isLoading: false });
    
        handleClose() ;
    }

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            classes={{
                paper: classes.paper
            }}
            sx={{backdropFilter: 'blur(4px)'}}
        >
            <DialogTitle>
                Mint NFT.
            </DialogTitle>
            <Divider />
            <DialogContent>
                <MintNftDiv>
                    <SettingDiv>
                        <DecreaseButton variant='contained' onClick={() => minusOption()}>-</DecreaseButton>
                        <NumberDiv>{mint_option}</NumberDiv>
                        <IncreaseButton variant='contained' onClick={() => plusOption()}>+</IncreaseButton>
                    </SettingDiv>
                    <AmountDiv>
                        <Label>Price : {0.0035 * (mint_option - 1)} Ether</Label>   
                    </AmountDiv>
                    <MintButton fullWidth onClick={() => handleMintNft()}>Mint</MintButton>
                </MintNftDiv>
            </DialogContent>
        </Dialog>
    )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(MintNft) ;