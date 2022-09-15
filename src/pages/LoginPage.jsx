import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUserApi} from "../store/middlewares/thunks/apis/userApi";
import {useNavigate} from "react-router-dom";
import useNavigateGuard from "../hooks/useNavigateGuard";

const LoginPage = () => {

    const navigate = useNavigate();
    const selector = useSelector((state) => state.userReducer)
    /**
     * 로그인 성공 여부를 표시하는 state
     */
    const [errorMsg, setErrorMsg] = useState("");

    /**
     * 로그인이 된 상태면 이전 페이지로 보냄.
     */
    useNavigateGuard("/",selector.isLogged)

    const dispatch = useDispatch()


    const [user, setUser] = useState({
        id: '',
        password: ''
    });

    useEffect(() => {
        setErrorMsg("")
    }, [user])
    /**
     * Input 태그 핸들러
     * @param e
     */
    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setUser(
            {
                ...user,
                [name]: value
            }
        )
    }

    const handleOnSubmit = (e) => {
        /**
         * Submit 기본 이벤트 제거
         */
        e.preventDefault();
        dispatch(loginUserApi(user))
            .then((res) => {
                    if (res.message === "success") {
                        navigate("/")
                    }
                    if (res.message === "fail") {
                        setErrorMsg("아이디 또는 비밀번호가 맞지 않습니다.")
                    }
                }
            )

    }

    return (
        <div>
            <div className="">Login Page</div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="id" value={user.id} required onChange={onChangeHandler}/>
                <input type="password" name="password" value={user.password} required onChange={onChangeHandler}/>
                <div className="">{errorMsg}</div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}

export default LoginPage;
