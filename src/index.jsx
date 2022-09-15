import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
/**
 * Reset CSS
 */
import './index.css'
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/LoginPage";
import MenulistPage from "./pages/menu/MenulistPage";
import MainPage from "./pages/MainPage";
import MenudetailPage from "./pages/menu/MenudetailPage";
import {Provider} from "react-redux";
import store from "./store/store";
import LogoutPage from "./pages/LogoutPage";
import MenuRegisterPage from "./pages/menu/MenuRegisterPage";


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    /**
     * Browser Router 적용.
     */
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="" element={<App/>}>
                    <Route path="" element={<Layout/>}>
                        {/*Main*/}
                        {/*index를 사용하지 않고, 명시적으로 URL에 대한 Component를 반환함.*/}
                        <Route path="" element={<MainPage/>}/>
                        {/*Menu*/}
                        <Route path="menu">
                            <Route path="" element={<MenulistPage/>}/>
                            <Route path=":id" element={<MenudetailPage/>}/>
                            <Route path="register" element={<MenuRegisterPage/>}/>
                        </Route>
                        {/*Error*/}
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
                </Route>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="logout" element={<LogoutPage/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>
);