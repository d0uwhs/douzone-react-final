import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const MenulistWrapper = styled.div`
  margin: 0.3em;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  max-height: 500px;
`;

const MenulistItem = ({item}) => {

    const {id, menuName, menuPrice, categoryName, isOrderable, detail: {image}} = item
    return (
        <Link to={`${id}`}>
            <MenulistWrapper>
                <Image src={image} alt=""/>
                <div className="">{menuName}</div>
                <div className="">{menuPrice}원</div>
                <div className="">{categoryName}</div>
                <div className="">{isOrderable?"주문가능":"주문불가"}</div>
            </MenulistWrapper>
        </Link>
    )
}

export default MenulistItem;
