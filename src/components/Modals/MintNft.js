import * as React from 'react' ;

import { Dialog, DialogContent, Grid,  } from '@mui/material';

import { 
    PricePara, StyledPaper, BackImgDiv, TitlePara, 
    FreeMintDiv, PassPriceDiv,
    FormGroup, Label, IncButton, DecButton, 
    NumberPara, AmountDiv,
    FormDiv,
    DescPara,
    CloseDiv
} from '../styles/MintNft.styles';

import { MintButton } from '../styles/MintNow.styles';

import CloseIcon from '@mui/icons-material/Close';

import * as Wagmi from "wagmi";

import { nftAddr } from 'src/web3/constants';
import nftAbi from 'src/web3/abi/nft.json' ;

import { ethers } from 'ethers';

const MintNft = (props) => {
    const {
        open,
        handleClose
    } = props ;

    const [mint_amount, setMintAmount] = React.useState(1) ;

    const {data: signer} = Wagmi.useSigner() ;

    const nftInstance = Wagmi.useContract({
		address: nftAddr,
		abi: nftAbi,
		signerOrProvider: signer,
	});

    const handleDecrease = () => {
        if(mint_amount === 1) return;
        setMintAmount(mint_amount-1);
    }

    const handleIncrease = () => {
        if(mint_amount === 2) return ;
        setMintAmount(mint_amount+1);
    }

    const handleMint = async () => {
        let chargePrice = ethers.utils.parseUnits('0.0035', 'ether') ;

        let receipt = await nftInstance.mintNFT(mint_amount, { value: chargePrice * (mint_amount - 1)});

        console.log(receipt);
        
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={StyledPaper}
            fullWidth
        >
            <DialogContent>
                <CloseDiv onClick={handleClose}><CloseIcon/></CloseDiv>
                <BackImgDiv />
                <TitlePara>
                    Buy Deviants Mints Pass NFT
                </TitlePara>
                <DescPara>
                    Select the amount of the Deviants you would like to mint.
                </DescPara>
                <Grid container sx={{mt : 5, mb : 5}}>
                    <Grid item xs={5}>
                        <FreeMintDiv>
                            <DescPara>Free Mint</DescPara>
                            <Label>1 Free</Label>
                        </FreeMintDiv>
                    </Grid>
                    <Grid item xs={7}>
                        <PassPriceDiv>
                            <DescPara>Public Mint Pass price:</DescPara>
                            <Label>  0 * 0.0035 ETH</Label>
                        </PassPriceDiv>
                    </Grid>
                </Grid>
                <FormDiv>
                    <FormGroup>
                        <Label>Amount</Label>
                        <AmountDiv>
                            <DecButton onClick={() => handleDecrease()}>-</DecButton>
                            <NumberPara>{mint_amount}</NumberPara>
                            <IncButton onClick={() => handleIncrease()}>+</IncButton>
                        </AmountDiv>
                    </FormGroup>
                    <FormGroup>
                        <Label>Final Mint Price</Label>
                        <PricePara>{0.0035 * (mint_amount - 1) } ETH</PricePara>
                    </FormGroup>
                </FormDiv>
                <MintButton variant='contained' onClick={() => handleMint()}>Mint Now</MintButton>
            </DialogContent>
        </Dialog>
    )
}

export default MintNft;