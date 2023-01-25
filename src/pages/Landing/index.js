import * as React from 'react' ;

import { connect } from 'react-redux' ;

import MintNow from 'src/components/Landing/MintNow';
import OurNFT from 'src/components/Landing/OurNFT';

import { 
    LandingRoot
} from './index.styles';

const Landing = (props) => {
    return (
        <LandingRoot>
            <MintNow />
            <OurNFT />
        </LandingRoot>
    )
}


const mapStateToProps = state => ({
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Landing) ;

