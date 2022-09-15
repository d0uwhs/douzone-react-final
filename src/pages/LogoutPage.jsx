import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/reducers/userReducer";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLogged} = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (!isLogged) {
      console.log('login')
      navigate("/")
    }
    if (isLogged) {
      console.log('logout')
      dispatch(logout())
      navigate("/")
    }
  })
    return (
        <div>
        </div>
    )
}

export default LogoutPage;
