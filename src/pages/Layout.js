import * as React from "react";

import { RouteProvider } from "src/shared/hooks/useRouteData";

import { Routes , Route } from "react-router-dom";

import { connect } from 'react-redux' ;

import Header from "src/components/Layouts/Header";
// import Footer from "src/components/Layouts/Footer";
import Content from "src/components/Layouts/Content";

import Dashboard from "./Dashboard";

import { 
    LayoutMain
} from "./styled/Layout.styled";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'react-circular-progressbar/dist/styles.css';

const Layout = (props) => {

    return (
        <LayoutMain>
            <RouteProvider>
                <Header />
                <Content>
                    <Routes>
                        <Route path="/" element={< Dashboard />} />
                        <Route path="/dashboard" element={< Dashboard />} />
                    </Routes>
                </Content>
                {/* <Footer /> */}
            </RouteProvider>
        </LayoutMain>
    );
}
const mapStateToProps = state => ({
 
}) ;
const mapDispatchToProps = {

} ;
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
