import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import MenulistItem from "../../components/MenulistItem";
import styled from "styled-components";
import {StickyBottomButton} from "../../components/style/styledButtons";

const MenulistWrapper = styled.div`
  margin: 1em 2em;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr))
`;

const Title = styled.div`
  font-size: 2em;
  text-align: center;
`;

const MenuSearchPage = () => {
    const [searchParams] = useSearchParams();
    const menuSelector = useSelector(state => state.menuReducer.menulist);
    const menuName = searchParams.get('menuName');

    const [searchMenuList, setSearchMenuList] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setSearchMenuList(menuSelector.filter(menu => menu.menuName.match(menuName)))
    }, [menuName]);

    const handleOnClick = () => {
        navigate(-1)
    }

    return (
        <>
            <StickyBottomButton textColor="black" btnSize="100%" bgColor="#FFFFFF" border="1px solid #AAAAAA"
                                type="submit" onClick={handleOnClick}>뒤로가기</StickyBottomButton>
            <Title>검색 결과</Title>
            <MenulistWrapper>
                {searchMenuList && searchMenuList.map(item => <MenulistItem key={item.id} item={item}/>)}
            </MenulistWrapper>
        </>
    );
}

export default MenuSearchPage;