import React, {useEffect} from "react";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";

const App = () => {
    /**
     * Cookie 를 통해, 로그인 정보 유지, expireDate를 통해 로그인 만료시간을 설정합니다.
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
     * https://ko.javascript.info/cookie
     *
     */
    useEffect(() => {
    }, [])
    return (
        <>
            <Header/>
            <Layout/>
            <Footer/>
        </>
    );
};

export default App;