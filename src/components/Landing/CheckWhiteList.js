import * as React from 'react' ;

import { 
    CheckWhiteListDiv,
} from '../styles/CheckWhiteList.styles';

import { 
    DescPara,
    TitleDiv,
    StyledButton,
    StyledTextField
} from '../styles/Common.styles';

import * as Wagmi from "wagmi";

import { nftAddr } from 'src/web3/constants';
import nftAbi from 'src/web3/abi/nft.json' ;

const CheckWhiteList = () => {
    const [checkable_addr, setCheckableAddr] = React.useState('');
    const [user_role, setUserRole] = React.useState('not-checked') ;

    const {data: signer} = Wagmi.useSigner() ;

    const nftInstance = Wagmi.useContract({
		address: nftAddr,
		abi: nftAbi,
		signerOrProvider: signer,
	});

    const handleCheckRole = async () => {
        let role = await nftInstance.isWhiteList(checkable_addr) ;

        if(role) setUserRole('whitelist');
        else setUserRole('not-whitelist');
    }

    return (
        <CheckWhiteListDiv>
            <TitleDiv>
                Whitelist Checker
            </TitleDiv>
            <br/>
            <DescPara>
                Please enter your wallet address to check your status
            </DescPara>
            <StyledTextField 
                className={user_role === 'whitelist' ? 'success' : 'error'}
                placeholder='Wallet Address'
                fullWidth
                value={checkable_addr}
                onChange={(e) => setCheckableAddr(e.target.value)}
                helperText={
                    user_role === 'not-whitelist' 
                    ? "❌ Sorry, you are not on the whitelist."
                    : (
                        user_role === 'whitelist' 
                        ? "Congratulations, you are on the Whitelist"
                        : ""
                    )
                }
            />
            <StyledButton onClick={() => handleCheckRole()}>
                Check Address
            </StyledButton>
        </CheckWhiteListDiv>
    )
}

export default CheckWhiteList;