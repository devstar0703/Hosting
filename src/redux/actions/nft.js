import ActionTypes from "./actionTypes";

import { create as ipfsHttpClient } from 'ipfs-http-client' ;

import { ipfs_auth } from '../../constants/static';

import { fetchOurNfts, mintNft } from "src/web3/marketplace";

const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization : ipfs_auth,
    },
}) ;

export const UploadNftToIpfs = async (raw) => {
    // return "error path";

    try {

        let added = await client.add(
            raw,
            {
                progress : async (prog) => {
                    console.log(prog);
                }
            }
        );

        return added.path ;
    } catch(err) {
        console.log(err) ;
        return false;
    }
}
export const MintDmpsNFT = async (web3Provider, mint_method, name, description, price, ipfs_hash, owner) => {
    try {
        await mintNft(web3Provider, mint_method, name, description,price,ipfs_hash, owner) ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}
export const FetchOurNfts =  (web3Provider) => async dispatch => {
    try {
        let nfts = await fetchOurNfts(web3Provider);

        await dispatch({
            type : ActionTypes.FetchOurNfts,
            payload : nfts
        });

        console.log(nfts) ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}