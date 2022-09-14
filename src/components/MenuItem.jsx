import React from "react";

const MenuItem = ({id, menuName, menuPrice, categoryName, isOrderable}) => {

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
