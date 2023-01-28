import btoa from 'btoa';

export const ipfs_auth =   "Basic " + btoa(process.env.REACT_APP_IPFS_INFURA_ID + ":" + process.env.REACT_APP_IPFS_INFURA_SECRECT);

export const ipfs_origin = 'https://solsapp.infura-ipfs.io/ipfs/';

export const whiteList_wallets = [
    "0x61611Be3dB30D0E960918aC4761d744a8D568647",
    "0xabd43DAA71c365420f7c03ab90140CA5cC70b719",
    "0x1805c49AE4392F1DF411F665fDB5c6bD77b23D4a",
    "0xC4c282C70faABF0043FA2f7548DaCf676cfAb0CC"
]