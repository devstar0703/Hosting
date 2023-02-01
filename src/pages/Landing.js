import * as React from 'react' ;

import { LandingDiv,BackOverlay } from './styles/Landing.styles';

import { 
    Grid 
} from '@mui/material';

import MintNow from 'src/components/Landing/MintNow';
import CheckWhiteList from 'src/components/Landing/CheckWhiteList';

const Landing = () => {
    return (
        <LandingDiv>
            <BackOverlay>
                <Grid container>
                    <Grid item xs={4}>
                        <CheckWhiteList />
                    </Grid>
                    <Grid item xs={4}>
                        <MintNow />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
            </BackOverlay>
        </LandingDiv>
    )
}

export default Landing ;