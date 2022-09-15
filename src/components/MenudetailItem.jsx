import React from "react";

const MenudetailItem = ({item}) => {
  const {id, menuName, menuPrice, categoryName, isOrderable, detail:{description, image}} = item
    return (
        <div>
          <div className="">{id}</div>
          <div className="">{menuName}</div>
          <div className="">{menuPrice}</div>
          <div className="">{categoryName}</div>
          <div className="">{isOrderable}</div>
          <div className="">{description}</div>
            <img src={image} alt=""/>
        </div>
    )
}

export default MenudetailItem;
