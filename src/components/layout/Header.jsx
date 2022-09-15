import React from "react";
import {StyledHeader} from "../style/styledHeader";
import {Link} from "react-router-dom";

const Header = ({isLogged}) => {

    return (
        <StyledHeader>


                    <Link to="/">메인</Link>
                    <Link to="/menu">메뉴 보기</Link>
                    {isLogged ?<Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}


        </StyledHeader>
    )
}

export default Header;
