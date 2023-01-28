import * as React from 'react' ;

import LogoImg from 'src/assets/deviantLogo.svg' ;

import { NavDiv } from './Styles/Header.styles';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
    return (
        <NavDiv>
            <img src={LogoImg} width={50} height={50} alt='logo image' />
            <ConnectButton />
        </NavDiv>
    )
}

export default Header ;