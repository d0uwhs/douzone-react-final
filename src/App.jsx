import React, {useEffect, useState} from "react";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import {getCookie} from "./utils/cookieUtils";
import {LOGIN_USER_COOKIE} from "./constants/constants";
import {loginUserApi} from "./store/middlewares/thunks/apis/userApi";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch()
    const [isLogged, setIsLogged] = useState(false);

    /**
     * Cookie 를 통해, 로그인 정보 유지, expireDate를 통해 로그인 만료시간을 설정합니다.
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
     * https://ko.javascript.info/cookie
     *
     */
    useEffect(() => {
        /**
         * 최초 앱이 실행될 때, 쿠키를 통해 로그인 정보를 쿠키로부터 가져옵니다.
         * 쿠키의 만료시간이 지나지 않으면,
         * 다시 한번 로그인을 하여 로그인 시간을 연장합니다.
         * 실제 프로젝트에선 쿠키 정보에 비밀번호를 평문으로 저장하는 것은 매우 위험하므로
         * 해싱, 토큰 방식(JWT) 등으로 처리합니다.
         *
         * @type {*[]}
         * @private
         */
        const _getCookie = getCookie(LOGIN_USER_COOKIE)

        /**
         * 조건연산자 특성을 이용하여 _getCookie 값이 있을 경우에만
         * 다음 조건연산을 수행합니다.
         *
         */
        if (_getCookie && _getCookie[0].cookieData[0].id) {
            /**
             * 쿠키 내에 저장된 유저의 정보를 가져옵니다.
             * @type {{password, id}}
             */
            const user = {id: _getCookie[0].cookieData[0].id, password: _getCookie[0].cookieData[0].password}
            dispatch(loginUserApi(user)).then(() => {
                setIsLogged(true)
            })
        }
        /**
         * 빈 배열은 Falsy한 값이 아니다. #14-1
         */
    }, [])
    return (
        <>
            <Header isLogged={isLogged}/>
            <Layout/>
            <Footer/>
        </>
    );
};

export default App;