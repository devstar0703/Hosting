import * as React from 'react' ;

import { Dialog, DialogContent,  } from '@mui/material';

import { PricePara, StyledPaper, BackImgDiv, TitlePara, FormGroup, Label, IncButton, DecButton, NumberPara, AmountDiv } from '../Styles/MintNft.styles';

import { MintButton } from '../Styles/MintNow.styles';

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
	const account = Wagmi.useAccount();

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
                <BackImgDiv />
                <TitlePara>
                    Buy Deviants Mints Pass NFT
                </TitlePara>
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
                    <PricePara>{0.035 * (mint_amount - 1) } ETH</PricePara>
                </FormGroup>
                <MintButton variant='contained' onClick={() => handleMint()}>Mint Now</MintButton>
            </DialogContent>
        </Dialog>
    )
}

export default MintNft;