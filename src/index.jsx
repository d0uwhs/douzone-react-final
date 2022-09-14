import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
/**
 * Reset CSS
 */
import './index.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    /**
     * Browser Router 적용.
     */
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App/>}/>
        </Routes>
    </BrowserRouter>
);