import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUserApi} from "../store/middlewares/thunks/apis/userApi";
import {useNavigate} from "react-router-dom";
import useNavigateGuard from "../hooks/useNavigateGuard";
import {StickyBottomButton} from "../components/style/styledButtons";
import styled from "styled-components";
import {StyledInput} from "../components/style/styledInput";

const Title = styled.div`
  text-align: center;
  font-size: 2em;
`;

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
    useNavigateGuard("/", selector.isLogged)

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
                        navigate(-1)
                    }
                    if (res.message === "fail") {
                        setErrorMsg("아이디 또는 비밀번호가 맞지 않습니다.")
                    }
                }
            )

    }

    return (
        <div>
            <Title>Login Page</Title>
            <form onSubmit={handleOnSubmit}>
                <div className="">
                    ID :
                    <StyledInput type="text" name="id" value={user.id} required onChange={onChangeHandler}/>
                </div>
                <div className="">
                    PW :
                    <StyledInput type="password" name="password" value={user.password} required
                                 onChange={onChangeHandler}/>
                </div>
                <div className="">{errorMsg}</div>
                <StickyBottomButton textColor="black" btnSize="100%" bgColor="#FFFFFF" border="1px solid #AAAAAA"
                                    type="submit">LOGIN</StickyBottomButton>
            </form>
        </div>
    )
}

export default LoginPage;
