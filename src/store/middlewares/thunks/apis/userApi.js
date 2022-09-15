import {fetcher} from "../../../../utils/fetcherUtils";
import {login} from "../../../reducers/userReducer";

const url = "/user"

export const loginUserApi = (user) => {
    return async (dispatch) => {
        const response = await fetcher.get(url).then(res => res.data)
        /**
         * ID와 비밀번호가 일치하는지 확인 후, 일치하는 객체가 있으면 로그인.
         */
        const findByUser = response.filter((item) => item.id === user.id && item.password === user.password)
        if (findByUser[0]) {
            dispatch(login(findByUser))
            // TODO : then, catch
            return {message: "success"}
        }
        if (!findByUser[0]) {
            return {message: "fail"}
        }
    }
}