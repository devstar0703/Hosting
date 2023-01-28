import * as React from 'react' ;

import { LandingDiv } from './Styles/Landing.styles';

import MintNow from 'src/components/Landing/MintNow';

const Landing = () => {
    return (
        <LandingDiv>
            <MintNow />
        </LandingDiv>
    )
}

export default Landing ;