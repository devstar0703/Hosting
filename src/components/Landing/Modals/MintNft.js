import * as React from 'react' ;

import { connect } from 'react-redux';
import { MintDmpsNFT, FetchOurNfts } from 'src/redux/actions/nft';

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

import Loading from 'react-loading-components';

import NFTAsset from 'src/assets/Landing/silver_pass_key.jpg';

const MintNft = (props) => {
    const {
        open, handleClose,
        nfts,
        FetchOurNfts
    } = props ;

    const {
        web3Provider, 
        walletAddress
    } = useWalletInfo() ;

    const classes = useStyles() ;

    const [mint_option, setMintOption] = React.useState(1) ;
    const [loading, setLoading] = React.useState(false) ;
    const [mintable, setMintable] = React.useState(false) ;

    const plusOption = () => {
        if(mint_option === 2) return ;

        setMintOption(mint_option + 1) ;
    }

    const minusOption = () => {
        if(mint_option === 1) return ;

        setMintOption(mint_option - 1) ;
    }

    const handleMintNft = async () => {

        if(nfts) console.log(nfts.filter(nft => nft.minter === walletAddress)) ;

        setLoading(true);

        let id = toast.loading("Mint NFT Tx is pending...") ;

        await MintDmpsNFT(web3Provider, mint_option, walletAddress) ;

        toast.update(id, { render: "Mint NFT Tx is successful", type: "success", autoClose: 5000, isLoading: false });
    
        await FetchOurNfts(web3Provider) ;

        setLoading(false);

        handleClose() ;
    }

    React.useEffect(() => {
        if(nfts) {
            let minted_nfts = nfts.filter(nft => nft.minter === walletAddress) ;

            if(minted_nfts.length) setMintable(false) ;
        }
    }, [nfts]) ;

    React.useEffect(() => {
        if(web3Provider) FetchOurNfts(web3Provider);
    }, [web3Provider]) ;

    return (
        <Dialog
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
                    {
                        mintable ? <>
                            <SettingDiv>
                                <DecreaseButton variant='contained' onClick={() => minusOption()}>-</DecreaseButton>
                                <NumberDiv>{mint_option}</NumberDiv>
                                <IncreaseButton variant='contained' onClick={() => plusOption()}>+</IncreaseButton>
                            </SettingDiv> 
                            <AmountDiv>
                                <Label>Price : {0.0035 * (mint_option - 1)} Ether</Label>   
                            </AmountDiv>
                        </>
                        : <img src={NFTAsset} width={150} height={150}/>
                    }
                    
                    <MintButton fullWidth onClick={() => handleMintNft()} disabled={loading || !mintable}>
                        {loading && <Loading type='oval' width={20} height={20} fill='#E8B923'/>} &nbsp; Mint
                    </MintButton>
                </MintNftDiv>
            </DialogContent>
        </Dialog>
    )
}
const mapStateToProps = state => ({
    nfts : state.nft.nfts
})
const mapDispatchToProps = {
    FetchOurNfts
}
export default connect(mapStateToProps, mapDispatchToProps)(MintNft) ;