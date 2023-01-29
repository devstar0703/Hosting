import * as React from 'react' ;

import { LandingDiv,BackOverlay } from './styles/Landing.styles';

import MintNow from 'src/components/Landing/MintNow';

const Landing = () => {
    return (
        <LandingDiv>
            <BackOverlay>
                <MintNow />
            </BackOverlay>
        </LandingDiv>
    )
}

export default Landing ;