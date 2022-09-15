import React from "react";
import useNavigateGuard from "../../hooks/useNavigateGuard";
import {useSelector} from "react-redux";

const MenuRegisterPage = () => {
    const selector = useSelector((state) => state.userReducer)
    useNavigateGuard("/login",!selector.isLogged)
    return (
        <div>
          Register
        </div>
    )
}

export default MenuRegisterPage;
