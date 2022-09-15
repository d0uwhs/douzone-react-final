import React from "react";
import {Wrapper} from "./style/styledWrapper";
import styled from "styled-components";


const MenuName = styled.div`
    font-size: 2em;
`;
const Image = styled.img`
    max-width: 500px;
`;

const FlexWrapper = styled.div`
    display: flex;
`;

const MenudetailItem = ({item}) => {
  const { menuName, menuPrice, categoryName, isOrderable, detail:{description, image}} = item
    return (
        <>
            <FlexWrapper>
            <Image src={image} alt=""/>
            <MenuName>{menuName}</MenuName>
                <div className="">

          <div className="">{categoryName}</div>
          <div className="">{isOrderable?"주문가능":"주문불가"}</div>
          <div className="">{description}</div>
          <div className="">{menuPrice}원</div>
                </div>
            </FlexWrapper>
        </>
    )
}

export default MenudetailItem;
