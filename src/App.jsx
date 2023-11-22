import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes, privatRoutes } from './routes';
import  DefaultLayout  from './layouts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Path = route.component;

                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Path />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
