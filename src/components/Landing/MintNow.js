import * as React from 'react' ;

import { useWalletInfo } from 'src/context/WalletContext';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { 
    MintNowDiv,
    CounterDiv,
    CircularDiv,
    StyledP,
    CounterButton
} from '../styles/MintNow.styles';

import { 
    TitleDiv,
    DescPara,
    StyledButton
} from '../styles/Common.styles';

import axios from 'axios';

import * as Wagmi from "wagmi";
import { ethers } from 'ethers';

import { nftAddr } from 'src/web3/constants';
import nftAbi from 'src/web3/abi/nft.json' ;

const MintNow = () => {
    const {
        balance,
    } = useWalletInfo() ;

    const [minted_amount, setMintedAmount] = React.useState(0) ;
    const [mintable_amount, setMintableAmount] = React.useState(1) ;
    const [max_amount, setMaxAmount] = React.useState(2);
    const [eth_price, setEthPrice] = React.useState(0) ;

    const {data: signer} = Wagmi.useSigner() ;

    const nftInstance = Wagmi.useContract({
		address: nftAddr,
		abi: nftAbi,
		signerOrProvider: signer,
	});

    const handleDecrease = () => {
        if(mintable_amount <= 1) return;
        setMintableAmount(mintable_amount - 1);
    }

    const handleIncrease = () => {
        if(mintable_amount === max_amount || !max_amount) return ;
        setMintableAmount(mintable_amount + 1);
    }

    const handleMint = async () => {
        // return ;
        let chargePrice = ethers.utils.parseUnits('0.0035', 'ether') ;

        let receipt = await nftInstance.mintNFT(mintable_amount, { value: chargePrice * (mintable_amount - 1)});

        console.log(receipt);
    }
    
    React.useEffect(() => {
        async function fecthAmount() {
            let amount = await nftInstance.getMintedAmount() ;

            setMintedAmount(amount.toString()) ;
        }
          
        if(signer) {
            fecthAmount();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signer]);

    React.useEffect(() => {
        console.log(balance);
        setMaxAmount(2 - balance) ;
        setMintableAmount( 2 - balance ) ;
    }, [balance]) ;

    React.useEffect(() => {
        const convertEthToUSE = async () => {
            try {
                if(!eth_price) {
                    let res = await axios.get( "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd" ) ;

                    setEthPrice(res.data.ethereum.usd);
                    console.log(res.data);
                }
            } catch (e) {}
        };
        convertEthToUSE();
    }, []);

    return (
        <MintNowDiv>
            <TitleDiv>
                Silver Mint Pass
            </TitleDiv>
            <CircularDiv>
                <CircularProgressbar 
                    value={Number(Number(minted_amount) / 5555).toFixed(4)} 
                    text={`${Number(Number(minted_amount) / 5555).toFixed(4)}%`} 
                    styles={buildStyles({
                        pathColor: "#FE3301",
                        trailColor: "#132135",
                        textColor: "#FE3301",
                    })}
                />
            </CircularDiv>
            <DescPara>
                {
                    !Number(minted_amount) ? "No NFT mints yet." : `${minted_amount}/5555 already minted`
                }
            </DescPara>
            <CounterDiv>
                <CounterButton onClick={() => handleDecrease()}>
                    -
                </CounterButton>
                <StyledP>
                    { mintable_amount }
                </StyledP>
                <CounterButton onClick={() => handleIncrease()}>
                    +
                </CounterButton>
            </CounterDiv>
            <StyledP>
                Total Cost : {mintable_amount} Ξ { mintable_amount > 0 ? `($${Number(eth_price * (mintable_amount - 1) * 0.0035).toPrecision(3)} USD)` : '0 USD'}
            </StyledP>
            <br/>
            { !mintable_amount && <DescPara>You already have minted the max no. of NFTs allowed per wallet</DescPara> }
            <StyledButton variant='contained' onClick={() => handleMint()} disabled={!mintable_amount}>Mint Now</StyledButton>
        </MintNowDiv>
    )
}

export default MintNow ;