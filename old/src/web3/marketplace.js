import { ethers } from "ethers";
import Web3 from "web3";

import dmpsMarketplace_contract_abi from './interface/DMPSMarketplace.json' ;

// console.log(dmpsMarketplace_contract_addr);

// let dmpsMarketplace_contract_addr = '0x6EE5E312a63d1d9c58962b363DA757A1F019113C' ;// goreli
let dmpsMarketplace_contract_addr = '0x17AfE32C6c12955323eAa6F7260780A575F2b912' ; // polygon


export const mintNft = async (web3Provider, _mint_option, _minter) => {
    try {
        let price = ethers.utils.parseUnits(Number(0.0035 * (_mint_option - 1)).toString(), 'ether') ;

        const signer = web3Provider.getSigner() ;
        let marketplace = new ethers.Contract(dmpsMarketplace_contract_addr, dmpsMarketplace_contract_abi, signer) ;

        let tx = await marketplace.mintNFT(
            _minter,
            _mint_option - 1,
            {value: price.toString()}
        );

        await tx.wait() ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return false;
    }
}

export const fetchOurNfts = async (web3Provider) => {
    try {
        const signer = web3Provider.getSigner() ;
        let marketplace = new ethers.Contract(dmpsMarketplace_contract_addr, dmpsMarketplace_contract_abi , signer) ;

        let nfts = await marketplace.fetchNFTs() ;

        nfts = await Promise.all(
            nfts.map(async nft => {
                let item = {
                    nft_id : nft.nft_id.toString(),
                    option : nft.option.toString(),
                    minter : nft.minter
                }

                return item ;
            })
        );

        console.log(nfts) ;

        return nfts ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}