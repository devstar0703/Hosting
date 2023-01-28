import * as React from "react";

import { Routes , Route } from "react-router-dom";

import Header from "src/components/Layouts/Header";
import Landing from "./Landing";

const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={< Landing />} />
                {/* <Route element={<ProtectedRoute />}>
                    <Route path='/solstice/*' element={<Solstice />} />
                </Route>  */}
                {/* <Route path="/*" element={<NotFound />}/> */}
            </Routes>
        </>
        
    );
}

export default React.memo(Layout);
