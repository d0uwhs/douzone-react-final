import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMenulistApi} from "../../store/middlewares/thunks/apis/menulistApi";
import MenulistItem from "../../components/MenulistItem";
import {Link, useNavigate} from "react-router-dom";

const MenulistPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menuSelector = useSelector((state) => {
        return (state.menuReducer)
    })

    const userSelector = useSelector((state) => {
        return (state.userReducer)
    })

    const menuList = menuSelector.menulist;

    useEffect(
        () => {
            dispatch(getMenulistApi());
            /**
             * 리덕스는 기본적으로 액션 '객체' 만 전달 가능. #13-2
             * Redux Thunk Middleware를 통한 함수를 dispatch.
             */

            /**
             * useEffect Dependency Array #13-4
             */
        }, [dispatch])

    return (
        <div>
            { userSelector.isLogged &&
                <>
                    <Link to={"register"}>메뉴 등록하기</Link>
                </>
            }
            {menuList ? menuList.map((item) =>
                <MenulistItem key={item.id} item={item}/>) : <div> 조회된 상품이 없습니다. </div>}
        </div>
    )
}

export default MenulistPage;
