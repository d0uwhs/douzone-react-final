import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMenuListApi} from "../../middlewares/apis/menulistApi";
import MenuItem from "../../components/MenuItem";

const MenuPage = () => {

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
        dispatch(getMenuListApi());
            /**
             * useEffect Dependency Array #13-4
             */
    },[dispatch])

    return (
        <div>
            {menuList.map((item) =>
                <MenuItem key={item.id} item={item}/>)}
        </div>
    )
}

export default MenuPage;
