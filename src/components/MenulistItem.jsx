import React from "react";
import {Link} from "react-router-dom";


const MenulistItem = ({item}) => {

    const {id, menuName, menuPrice, categoryName, isOrderable} = item

    return (
        <div>
            <Link to={`${id}`}>{id}</Link>
            <div className="">{id}</div>
            <div className="">{menuName}</div>
            <div className="">{menuPrice}</div>
            <div className="">{categoryName}</div>
            <div className="">{isOrderable}</div>
        </div>
    )
}

export default MenulistItem;
