import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMenulistApi} from "../../middlewares/apis/menulistApi";
import MenulistItem from "../../components/MenulistItem";

const MenulistPage = () => {

    const dispatch = useDispatch();

    const selector = useSelector((state) => {
        return (state.menuReducer)
    })


    const menuList = selector.menulist;

    useEffect(
        () => {
            /**
             * 리덕스는 기본적으로 액션 '객체' 만 전달 가능. #13-2
             * Redux Thunk Middleware를 통한 함수를 dispatch.
             */
            dispatch(getMenulistApi());
            /**
             * useEffect Dependency Array #13-4
             */
        }, [dispatch])

    return (
        <div>
            {menuList ? menuList.map((item) =>
                <MenulistItem key={item.id} item={item}/>) : <div> 조회된 상품이 없습니다. </div> }
        </div>
    )
}

export default MenulistPage;
