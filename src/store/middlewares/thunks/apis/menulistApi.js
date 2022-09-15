import {fetcher} from "../../../../utils/fetcherUtils";
import {getMenudetail, getMenulist, postRegistermenu} from "../../../reducers/menuReducer";

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

export const postRegistermenuApi = (menu) => {
    return async (dispatch) => {
        const response = await fetcher.post(url,menu)
        dispatch(postRegistermenu(response))
    }
}