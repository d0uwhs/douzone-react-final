import React from "react";
import styled from "styled-components";


/**
 * Error Page.
 * 에러 코드와, 에러 메시지를 받아 출력함.
 * @param errorCode
 * @param errorMsg
 * @return {JSX.Element}
 * @constructor
 */
const ErrorPage = ({errorCode, errorMsg}) => {

    const ErrorTitle = styled.div`
        text-align: center;
    `;

    return (
        <div>
            <ErrorTitle>Error!</ErrorTitle>
        </div>
    )
}

export default ErrorPage;
