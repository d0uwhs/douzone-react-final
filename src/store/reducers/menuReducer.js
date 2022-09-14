import {createActions, handleActions} from "redux-actions";

const initialState = {};
const reducerName = "menu";

/**
 * Reducer의 name을 명시적으로 지정하고, Template Literal로 액션 함수 생성
 */
const GET_MENULIST = `${reducerName}/GET_MENULIST`

/**
 * createActions을 통한 자동 action 생성. #13-3
 * Action 타입을 지정할 때, 지정된 규칙으로 선언해야 한다.
 */
export const {menu: {getMenulist}} = createActions({
    [GET_MENULIST]: (res) => ({menulist: res})
})

const menuReducer = handleActions(
    {
        /**
         * menulistApi -> axios 를 통해 받아온 데이터를 state에 등록합니다.
         * @param state
         * @param payload
         * @return {*}
         */
        [GET_MENULIST]: (state, {payload}) => {
            return payload
        }
    }, initialState
)


export default menuReducer