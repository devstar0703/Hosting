import * as React from 'react' ;

import { Link } from 'react-router-dom';

import {
    HeaderDiv,
    LogoImg,
    NavList,
    MenuList
} from '../Styles/Header.styles' ;

const Header = () => {
    const menuList = [
        {
            label : "Home",
            link : "/#"
        },
        {
            label : "Our NFTs",
            link : '/#'
        }
    ];

    return (
        <HeaderDiv>
            <LogoImg src={''} />
            <NavList>
                <MenuList>
                    {
                        menuList.map((item, index) => (
                            <Link key={index} to={item.link}>
                                {item.label}
                            </Link>
                        ))
                    }
                </MenuList>
            </NavList>
        </HeaderDiv>
    )
}

export default Header ;