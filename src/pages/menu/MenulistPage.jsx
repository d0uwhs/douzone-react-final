import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMenulistApi} from "../../store/middlewares/thunks/apis/menulistApi";
import MenulistItem from "../../components/MenulistItem";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {StickyBottomButton} from "../../components/style/styledButtons";
import {StyledInput} from "../../components/style/styledInput";


const MenulistWrapper = styled.div`
  margin: 1em 2em;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr))
`;

const SearchWrapper = styled.div`
    display: flex;
`;

const SearchInput = styled.input`
    width: 100%;
`;

const MenulistPage = () => {



    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const handleOnFind = () => {
        navigate(`/menu/search?menuName=${searchValue}`);
    }

    const dispatch = useDispatch();

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
        <>
            {userSelector.isLogged &&
                <>

            <SearchWrapper>
                <SearchInput placeholder="검색하기" type="search" name="menuName" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                             onKeyDown={(e) => {
                                 if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                                     handleOnFind()}}}
                />
                <StickyBottomButton textColor="black" btnSize="20%" bgColor="#FFFFFF" border="1px solid #AAAAAA" onClick={handleOnFind}>검색</StickyBottomButton>
                    <Link to={"register"}><StickyBottomButton textColor="black" btnSize="100%" bgColor="#FFFFFF" border="1px solid #AAAAAA">등록하기</StickyBottomButton></Link>
            </SearchWrapper>
                </>
            }
        <MenulistWrapper>
            {menuList ? menuList.map((item) =>
                <MenulistItem key={item.id} item={item}/>) : <div> 조회된 상품이 없습니다. </div>}
        </MenulistWrapper>
        </>
    )
}

export default MenulistPage;
