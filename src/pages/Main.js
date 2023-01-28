import * as React from 'react' ;

// Router
import { BrowserRouter , Routes , Route } from 'react-router-dom';

const Layout = React.lazy(() => import('./Layout')) ;

const Main = () => {
    return (
        <BrowserRouter>
            {/* <LanguageProvider> */}
                {/* <Provider store={store}> */}
                    {/* <ThemeProvider theme={theme}> */}
                        {/* <CssBaseline /> */}
                        <React.Suspense fallback={<React.Fragment />} >
                            <Routes>
                                <Route path="*" element={<Layout />} />
                            </Routes>
                        </React.Suspense>
                    {/* </ThemeProvider> */}
                {/* </Provider> */}
            {/* </LanguageProvider> */}
        </BrowserRouter>
    )
}

export default Main ;