import {COOKIE_EXPIRE_TIME} from "../constants/constants";

/**
 * JSON Data를 직렬화 하여 쿠키로 만듭니다.
 * 쿠키의 유효시간은 생성 시점으로부터 5분입니다.
 * @param data JSON data
 */
export const setCookie = (cookieName, data = {}) => {
    const expires = new Date(Date.now() + COOKIE_EXPIRE_TIME)
    const idInfo = data
    document.cookie = `${cookieName}=${JSON.stringify(idInfo)}; expires=${expires.toUTCString()}`;
}

/**
 * cookieName 파라메터로 통해 전달된 쿠키의 이름으로 쿠키를 삭제합니다.
 * 쿠키의 만료시간을 현재 시간으로 변경하면 자동으로 삭제됩니다.
 * @param cookieName
 * @param data
 */
export const deleteCookie = (cookieName, data = {}) => {
    const expires = new Date(Date.now())
    const idInfo = data
    document.cookie = `${cookieName}=${JSON.stringify(idInfo)}; expires=${expires.toUTCString()}`;
}

/**
 * setCookies 함수를 통해 만들어진 쿠키를 모두 가져온 뒤, cookieName 파라메터로 통해 전달된 쿠키의 이름으로 쿠키를 반환합니다.
 * @param cookieName
 * @return {*[]}
 */
export const getCookie = (cookieName) => {
    const _getCookies = document.cookie.split('; ')
    const cookieList = []
    for (const getCookie of _getCookies) {
        let c = getCookie.split('=')
        cookieList.push({cookieName: c[0], cookieData: JSON.parse(c[1])})
    }
    return cookieList.filter((item) => item.cookieName === cookieName)
}

/**
 * setCookies 함수를 통해 만들어진 쿠키를 모두 가져온 뒤, 쿠키들을 JSON 형태로 만듭니다. cookieData는 역직렬화 합니다.
 */
export const getAllCookies = () => {
    const _getCookies = document.cookie.split('; ')
    const cookieList = []
    for (const getCookie of _getCookies) {
        let c = getCookie.split('=')
        cookieList.push({cookieName: c[0], cookieData: JSON.parse(c[1])})
    }
    return cookieList
}

