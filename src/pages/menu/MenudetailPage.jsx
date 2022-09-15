import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteMenuApi, getMenudetailApi} from "../../store/middlewares/thunks/apis/menulistApi";
import {useNavigate, useParams} from "react-router-dom";
import MenudetailItem from "../../components/MenudetailItem";
import {StickyBottomButton} from "../../components/style/styledButtons";



const MenudetailPage = () => {
    /**
     * props를 통해 id를 받지 않고, URL parameter를 통해 id를 받음.
     */
    const params = useParams();
    const menuSelector = useSelector((state) => state.menuReducer);
    const userSelector = useSelector((state) => state.userReducer);
    const menudetail = menuSelector.menudetail;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMenudetailApi(params.id))
    }, [dispatch])

    const handleOnClickForDelete = () => {
        const choose = window.confirm("삭제 하겠습니까?")
        if (choose) {
            dispatch(deleteMenuApi(params.id)).then(() => {
                alert("삭제완료")
                navigate(-1)
            })
        }
    }

    const handleOnClickForPut = () => {
        navigate(`/menu/modify/${params.id}`)
    }

    /**
     * Optional Chaining을 통해, 조회된 값이 없을 경우. TODO:404 route? 아니면 조회된 항목이 없습니다 표시
     */
    return (
        <div>
            {userSelector.isLogged &&
                <>
                        <StickyBottomButton textColor="black" btnSize="50%" bgColor="#FFFFFF" border="1px solid #AAAAAA"
                                            onClick={handleOnClickForPut}>메뉴 수정</StickyBottomButton>
                        <StickyBottomButton textColor="black" btnSize="50%" bgColor="#FFFFFF" border="1px solid #AAAAAA"
                                            onClick={handleOnClickForDelete}>메뉴 삭제</StickyBottomButton>
                </>
            }


            {menudetail ? <MenudetailItem key={menudetail.id} item={menudetail}/> : <div>조회된 항목이 없습니다.</div>}
        </div>
    )
}

export default MenudetailPage;
