/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react' ;

import { connect } from 'react-redux' ;
import { ConnectWallet } from 'src/redux/actions/wallet' ;

import LogoImg from 'src/assets/logo.svg' ;

import { NavDiv, StatusPara } from './styles/Header.styles';

import swal from 'sweetalert';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import * as Wagmi from 'wagmi' ;

import { nftAddr } from 'src/web3/constants';
import nftAbi from 'src/web3/abi/nft.json' ;
import { whiteList_wallets } from 'src/static/variables';

const Header = (props) => {
    const {
        ConnectWallet
    } = props ;

    const [grantedRole, setGrantRole] = React.useState(0) ;

    const {data: signer} = Wagmi.useSigner() ;

    const nftInstance = Wagmi.useContract({
		address: nftAddr,
		abi: nftAbi,
		signerOrProvider: signer,
	});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkWhiteUser = async () => {
        // let receipt = await nftInstance.isWhiteList();
        // console.log(receipt);

        let address = await signer.getAddress();
        
        if(whiteList_wallets.includes(address)) setGrantRole('whitelist') ;
        else setGrantRole('public') ;
    }

    const walletInfo = async () => {
        let address = await signer.getAddress() ;

        let balance = await nftInstance.balanceOf(address) ;
        let isWhite = await nftInstance.isWhiteList(address) ;

        let role ;

        if(isWhite) role = "whitelist" ;
        else role = "public" ;

        await ConnectWallet(address, balance.toString(), role) ;
    }
    
    React.useEffect(() => {
        if(signer) {
            checkWhiteUser() ;
            walletInfo() ;
            return ;
        }

        setGrantRole(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkWhiteUser, signer]) ;

    return (
        <NavDiv>
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={LogoImg} width={250} height={100} alt='logo image' />

            <ConnectButton />
            {/* { grantedRole === 1 && <StatusPara>Whitelist User</StatusPara> }
            { grantedRole === 2 && <StatusPara>Public User</StatusPara> } */}
        </NavDiv>
    )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    ConnectWallet
}
export default connect(mapStateToProps, mapDispatchToProps)(Header) ;