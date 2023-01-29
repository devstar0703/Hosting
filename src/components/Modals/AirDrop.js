import * as React from 'react';

import { Dialog, DialogContent, Grid } from '@mui/material';
import { CloseDiv, TitlePara } from '../styles/MintNft.styles';
import { StyledPaper, DescPara, StyledTextField, RVVDiv, Label, AmountPara, ConfirmButton } from '../styles/AirDrop.styles';
import { RedSpan } from '../styles/MintNow.styles';

import CloseIcon from '@mui/icons-material/Close';

import * as Wagmi from 'wagmi';

import { nftAddr } from 'src/web3/constants';
import nftAbi from 'src/web3/abi/nft.json' ;

const AirDrop  = (props) => {
    const {
        open, handleClose
    } = props ;

    const [hedra_addr, setHedraAddr] = React.useState('');

    const {data: signer} = Wagmi.useSigner() ;

    const nftInstance = Wagmi.useContract({
		address: nftAddr,
		abi: nftAbi,
		signerOrProvider: signer,
	});

    const handleAirDrop = async () => {
        console.log('airDrop', hedra_addr);
        // let receipt = await nftInstance.airDrop(hedra_addr, );

        // console.log(receipt);
        
        setHedraAddr('');
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
                <CloseDiv><CloseIcon/></CloseDiv>
                <TitlePara>Add your Hedra wallet</TitlePara>
                <DescPara >
                    Congratulations you are eligible for the $RVV Token Airdrop! Please Enter your Hedra wallet address to receive the $RVV Airdrop Rewards.
                </DescPara>
                <StyledTextField 
                    fullWidth
                    size='medium'
                    placeholder='Hedra Wallet'
                    value={hedra_addr}
                    onChange={(e) => setHedraAddr(e.target.value)}
                />
                <DescPara>
                    If you don't have a hedra wallet create one quickly over here. <RedSpan>https://www.bladewallet.io/astronova/</RedSpan>
                </DescPara>
                <Grid container sx={{mt : 5, mb : 5}}>
                    <Grid item xs={6}>
                        <RVVDiv>
                            <Label>Own 3 Mint Pass</Label>
                            <AmountPara>20,000 $RVV</AmountPara>
                        </RVVDiv>
                    </Grid>
                    <Grid item xs={6}>
                        <RVVDiv>
                            <Label>Own 1 Mint Pass</Label>
                            <AmountPara>3000 $RVV</AmountPara>
                        </RVVDiv>
                    </Grid>
                </Grid>

                <ConfirmButton onClick={handleAirDrop}>Confirm</ConfirmButton>

                <Label><RedSpan>*</RedSpan>Venting: 40% at TGE, remaining tokens with 6 month linear unlock.</Label>
            </DialogContent>
        </Dialog>
    )
}

export default AirDrop ;