import React from "react";

const MenuItem = ({item}) => {

    const {id, menuName, menuPrice, categoryName, isOrderable} = item

    return (
        <div>
            <div className="">{id}</div>
            <div className="">{menuName}</div>
            <div className="">{menuPrice}</div>
            <div className="">{categoryName}</div>
            <div className="">{isOrderable}</div>
        </div>
    )
}

export default MenuItem;
