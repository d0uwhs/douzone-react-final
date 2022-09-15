import {fetcher} from "../../../../utils/fetcherUtils";
import {deleteMenu, getMenudetail, getMenulist, postRegistermenu, putMenu} from "../../../reducers/menuReducer";

const url = "/menu"

/**
 * 전체 메뉴 목록을 가져옵니다.
 * @return {(function(*): Promise<void>)|*}
 */
export const getMenulistApi = () => {
    return async (dispatch) => {
        const response = await fetcher.get(url).then(res => res.data);
        dispatch(getMenulist(response))
    }
}

/**
 * 해당하는 id값에 대한 상세 메뉴를 가져옵니다.
 * @return {(function(*): Promise<void>)|*}
 */
export const getMenudetailApi = (id) => {
    return async (dispatch) => {
        const response = await fetcher.get(`${url}/${id}`).then(res => res.data);
        dispatch(getMenudetail(response))
    }
}
/**
 * 해당하는 menu 객체를 이용하여 JSON-Server에 등록합니다.
 * @param menu
 * @return {(function(*): Promise<void>)|*}
 */
export const postRegistermenuApi = (menu) => {
    return async (dispatch) => {
        const response = await fetcher.post(url,menu)
        dispatch(postRegistermenu(response))
    }
}

export const deleteMenuApi = (id) => {
    return async (dispatch) => {
        const response = await fetcher.delete(`${url}/${id}`).then(res => res.data);
        dispatch(deleteMenu(response))
    }
}

export const putMenuApi = (modifyMenu, paramsId) => {
    return async (dispatch) => {
        const response = await fetcher.put(`${url}/${paramsId}`,modifyMenu).then(res => res.data);
        dispatch(putMenu(response))
    }
}