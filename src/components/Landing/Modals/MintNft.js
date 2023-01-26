import * as React from 'react' ;

import { connect } from 'react-redux';
import { MintDmpsNFT, UploadNftToIpfs } from 'src/redux/actions/nft';

import { useWalletInfo } from 'src/contexts/WalletContext';

import { Dialog, DialogContent, DialogTitle, Divider, InputLabel, FormControl, FormControlLabel, RadioGroup, TextField } from '@mui/material';

import {  toast } from 'react-toastify/dist/react-toastify';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {
    MintNftDiv,
    AssetPreview,
    MethodRadio,
    useStyles
} from '../Styles/MintNft.styles';

import { MintButton } from '../Styles/MintNow.styles';

const MintNft = (props) => {
    const {
        open, handleClose,
    } = props ;

    const {
        web3Provider, 
        walletAddress
    } = useWalletInfo() ;

    const classes = useStyles() ;

    const [mint_method, setMintMethod] = React.useState('free') ;
    const [uploadedFile, setUploadedFile] = React.useState({raw : "", preview : ""}) ;
    const [nft_name, setNftName] = React.useState('');
    const [nft_desc, setNftDesc] = React.useState('') ;
    const [nft_price, setNftPrice] = React.useState(0) ;

    const handleUploadAsset = (e) => {
        if(e.target.files.length) {
            setUploadedFile({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            })
        }    
    }

    const handleMintNft = async () => {
        let id = toast.loading("Uploading Asset To IPFS...") ;

        let ipfs_hash = await UploadNftToIpfs(uploadedFile.raw);

        if(!ipfs_hash)  {
            toast.update(id, { render: "Uploading is failed", type: "error", autoClose: 1000, isLoading: false });
            return ;
        }

        toast.update(id, { render: "Uploading is successful", type: "success", autoClose: 1000, isLoading: false });

        id = toast.loading("Mint NFT Tx is pending...") ;

        await MintDmpsNFT(web3Provider, mint_method ,nft_name, nft_desc, nft_price, ipfs_hash, walletAddress) ;

        toast.update(id, { render: "Mint NFT Tx is successful", type: "success", autoClose: 5000, isLoading: false });
    }

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            classes={{
                paper: classes.paper
            }}
            sx={{backdropFilter: 'blur(4px)'}}
        >
            <DialogTitle>
                Mint Your Own NFT.
            </DialogTitle>
            <Divider />
            <DialogContent>
                <MintNftDiv>
                    <InputLabel htmlFor='upload-asset'>
                        <AssetPreview>
                            { uploadedFile.preview ?
                            <img src={uploadedFile.preview} /> 
                            : <CloudUploadIcon /> }
                        </AssetPreview>
                    </InputLabel>
                    <input 
                        multiple
                        type="file"
                        id="upload-asset"
                        style={{ display: "none" }}
                        onChange={handleUploadAsset}
                    />

                  

                    <TextField 
                        value={nft_name}
                        onChange={(e) => setNftName(e.target.value)}
                        fullWidth
                        size={'small'}
                        placeholder='Enter your nft name.'
                        label='NFT name'
                    />

                    <TextField
                        value={nft_desc}
                        onChange={(e) => setNftDesc(e.target.value)}
                        fullWidth
                        size='small'
                        placeholder='Enter your nft description.'
                        label="NFT description"
                    />

                    <TextField 
                        value={nft_price}
                        onChange={(e) => setNftPrice(e.target.value)}
                        fullWidth
                        type='number'
                        size={'small'}
                        placeholder='Enter your nft price.'
                        label='Price'
                    />

                    <FormControl sx={{mt : '20px' , mb : '20px'}} fullWidth>
                        <RadioGroup
                            value={mint_method}
                            onChange={(e) => setMintMethod(e.target.value)}
                        >
                            <FormControlLabel value="free" control={<MethodRadio/>} label="Free" />
                            <FormControlLabel value="payable" control={<MethodRadio/>} label="Payable" />
                        </RadioGroup>
                    </FormControl>
                    {/* <Slider
                        value={royalty}
                        aria-label="Royalty"
                        valueLabelDisplay="auto"
                        color={'primary'}
                        onChange={(e) => setRoyalty(e.target.value)}
                        min={1}
                        max={30}
                    /> */}

                    <MintButton fullWidth onClick={() => handleMintNft()}>Mint Now</MintButton>
                </MintNftDiv>
            </DialogContent>
        </Dialog>
    )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(MintNft) ;