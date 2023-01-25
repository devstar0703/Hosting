import { ethers } from "ethers";
import Web3 from "web3";

import dmpsMarketplace_contract_abi from './interface/DMPSMarketplace.json' ;

// console.log(dmpsMarketplace_contract_addr);

let dmpsMarketplace_contract_addr = '0x6EE5E312a63d1d9c58962b363DA757A1F019113C' ;

export const mintNft = async (web3Provider, _mint_method, _name, _description, _price, _uri, _owner) => {
    try {
        let listingPrice = ethers.utils.parseUnits('0.0035', 'ether') ;

        const signer = web3Provider.getSigner() ;
        let marketplace = new ethers.Contract(dmpsMarketplace_contract_addr, dmpsMarketplace_contract_abi, signer) ;

        if(_mint_method === 'payable') await marketplace.mintNftPayable(
            _name,
            _description,
            _uri,
            ethers.utils.parseUnits(_price, 'ether'),
            {value: listingPrice.toString()}
        );

        if(_mint_method === 'free') await marketplace.mintNftFree(
            _name,
            _description,
            _uri,
            ethers.utils.parseUnits(_price, 'ether')
        )

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
                    name : nft.nft_name,
                    description : nft.nft_description,
                    uri : nft.nft_uri,
                    price : ethers.utils.formatUnits(nft.nft_price.toString(), 'ether')
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