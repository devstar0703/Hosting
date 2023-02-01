import * as React from "react";

import { Routes , Route } from "react-router-dom";

import { connect } from 'react-redux' ;

import { WalletProvider } from 'src/context/WalletContext' ;

import Header from "src/components/Layouts/Header";
import Landing from "./Landing";

import 'react-circular-progressbar/dist/styles.css';

const Layout = (props) => {
    const {
        address,
        balance,
        role
    } = props ;

    return (
        <WalletProvider 
            value={{
                address, 
                balance,
                role
            }}
        >
            <Header />
            <Routes>
                <Route path="/" element={< Landing />} />
                {/* <Route element={<ProtectedRoute />}>
                    <Route path='/solstice/*' element={<Solstice />} />
                </Route>  */}
                {/* <Route path="/*" element={<NotFound />}/> */}
            </Routes>
        </WalletProvider>
        
    );
}
const mapStateToProps = state => ({
    address : state.wallet.address,
    balance : state.wallet.balance,
    role : state.wallet.role
}) ;
const mapDispatchToProps = {

} ;
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
