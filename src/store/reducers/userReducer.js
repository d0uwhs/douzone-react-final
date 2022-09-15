import {createActions, handleActions} from "redux-actions";
import {deleteCookie, setCookie} from "../../utils/cookieUtils";
import {LOGIN_USER_COOKIE} from "../../constants/constants";

/**
 * 로그인 정보는 하나의 유저의 정보만 들어 있으므로,
 * initialState에 명시적으로 프로퍼티를 적습니다.
 * 비밀번호는 상태로 관리하지 않습니다.
 * @type {{}}
 */
const initialState = {
    id:'',
    nickname:'',
    isLogged:false
};
const reducerName = "user";

/**
 * Reducer의 name을 명시적으로 지정하고, Template Literal로 액션 함수 생성
 */
const LOGIN = `${reducerName}/LOGIN`
const LOGOUT = `${reducerName}/LOGOUT`

/**
 * createActions을 통한 자동 action 생성. #13-3
 * Action 타입을 지정할 때, 지정된 규칙으로 선언해야 한다.
 */
export const {user: {login, logout}} = createActions({
    [LOGIN]: (res) => (res),
    [LOGOUT]: (res) => (res),
})

const userReducer = handleActions(
    {
        [LOGIN]: (state, {payload}) => {
            /**
             * 로그인 한 하나의 객체(로그인 성공한 객체)가 들어온 경우,
             * 상태로 id 프로퍼티와, nickname 프로퍼티를 등록한다.
             */
            if (payload[0]) {
                setCookie(LOGIN_USER_COOKIE, payload)
                state.id = payload[0].id
                state.nickname = payload[0].nickname
                state.isLogged = true
            }
            /**
             * 변경된 state를 return 해야한다. #16-1
             */
            return state
        },
        [LOGOUT]: (state) => {
            deleteCookie(LOGIN_USER_COOKIE)
            // TODO : state를 한번에 바꿀 수 있다.
            state.id = ''
            state.nickname = ''
            state.isLogged = false
            return state
        },
    }, initialState
)


export default userReducer