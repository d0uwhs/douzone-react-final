import axios from "axios";
import {API_URL} from "../constants/constants";

/**
 * 공통된 API 요청을 위한 Axios Instance 생성.
 * https://axios-http.com/kr/docs/instance
 */
export const fetcher = axios.create({
    baseURL: API_URL
})