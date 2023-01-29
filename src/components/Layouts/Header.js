import * as React from 'react' ;

import LogoImg from 'src/assets/deviantLogo.svg' ;

import { NavDiv, StatusPara } from './styles/Header.styles';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import * as Wagmi from 'wagmi' ;

// import { nftAddr } from 'src/web3/constants';
// import nftAbi from 'src/web3/abi/nft.json' ;
import { whiteList_wallets } from 'src/static/variables';

const Header = () => {
    const [grantedRole, setGrantRole] = React.useState(0) ;

    const {data: signer} = Wagmi.useSigner() ;

    // const nftInstance = Wagmi.useContract({
	// 	address: nftAddr,
	// 	abi: nftAbi,
	// 	signerOrProvider: signer,
	// });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkWhiteUser = async () => {
        // let receipt = await nftInstance.isWhiteList();
        // console.log(receipt);

        let address = await signer.getAddress();
        
        if(whiteList_wallets.includes(address)) setGrantRole(1) ;
        else setGrantRole(2)
    }

    React.useEffect(() => {
        if(signer) {
            checkWhiteUser() ;
        }
    }, [checkWhiteUser, signer]) ;

    return (
        <NavDiv>
            <img src={LogoImg} width={50} height={50} alt='logo image' />

            <ConnectButton />
            { grantedRole === 1 && <StatusPara>Whitelist User</StatusPara> }
            { grantedRole === 2 && <StatusPara>Public User</StatusPara> }
        </NavDiv>
    )
}

export default Header ;