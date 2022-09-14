import React from "react";
import {StyledHeader} from "../style/styledHeader";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <Link to="/">메인</Link>
                    <Link to="/menu">메뉴 보기</Link>
                    <Link to="/login">로그인</Link>
                </li>
            </ul>
        </StyledHeader>
    )
}

export default Header;
