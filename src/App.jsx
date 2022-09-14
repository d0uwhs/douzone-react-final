import React, {useEffect} from "react";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";

const App = () => {
    useEffect(() => {
        document.cookie = `123; path=/; expires=`

    },[])
    return (
        <>
        <Header/>
        <Layout/>
        <Footer/>
        </>
    );
};

export default App;