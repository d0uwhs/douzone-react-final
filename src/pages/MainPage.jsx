import React, {useState} from "react";

import styled from "styled-components";

const Time = styled.div`
    text-align: center;
  font-weight: 700;
  font-size: 2em;
`;

const MainPage = () => {
    const [time, setTime] = useState();

    setTimeout(() => {setTime(
        new Date(Date.now()).toLocaleString()
    )},500)

    return (
        <Time>
            {time}
        </Time>
    )
}

export default MainPage;
