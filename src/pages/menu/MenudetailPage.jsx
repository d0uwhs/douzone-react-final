import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMenudetailApi} from "../../store/middlewares/thunks/apis/menulistApi";
import {useParams} from "react-router-dom";
import MenudetailItem from "../../components/MenudetailItem";

const MenudetailPage = () => {
    /**
     * props를 통해 id를 받지 않고, URL parameter를 통해 id를 받음.
     */
    const params = useParams();
    const selector = useSelector((state) => state.menuReducer);
    const menudetail = selector.menudetail;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenudetailApi(params.id))
    }, [dispatch])

    /**
     * Optional Chaining을 통해, 조회된 값이 없을 경우. TODO:404 route? 아니면 조회된 항목이 없습니다 표시
     */
    return (
        <div>
            {menudetail ? <MenudetailItem item={menudetail}/> : <div>조회된 항목이 없습니다.</div>}
        </div>
    )
}

export default MenudetailPage;
