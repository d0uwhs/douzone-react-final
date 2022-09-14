import {fetcher} from "../../utils/fetcherUtils";
import {getMenulist} from "../../store/reducers/menuReducer";

export const getMenuListApi = () => {
    return async (dispatch) => {
        const response = await fetcher.get('/menu').then(res => res.data);
        dispatch(getMenulist(response))
    }
}