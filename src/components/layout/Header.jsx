import React from "react";
import {StyledHeader} from "../style/styledHeader";
import {Link} from "react-router-dom";

const Header = ({isLogged}) => {

    return (
        <StyledHeader>
            <ul>
                <li>
                    <Link to="/">메인</Link>
                    <Link to="/menu">메뉴 보기</Link>
                    {isLogged ?<Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
                </li>
            </ul>
        </StyledHeader>
    )
}

export default Header;
