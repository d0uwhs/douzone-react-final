import {COOKIE_EXPIRE_TIME} from "../constants/constants";

/**
 * JSON Data를 직렬화 하여 쿠키로 만듭니다.
 * 쿠키의 유효시간은 생성 시점으로부터 30분 입니다.
 * @param data JSON data
 */
export const setCookie = (cookieName, data = {}) => {
    const expires = new Date(Date.now() + COOKIE_EXPIRE_TIME)
    const json = data
    document.cookie = `${cookieName}=${JSON.stringify(json)}; expires=${expires.toUTCString()}`;
}

/**
 * cookieName 파라메터로 통해 전달된 쿠키의 이름으로 쿠키를 삭제합니다.
 * 쿠키의 만료시간을 현재 시간으로 변경하면 자동으로 삭제됩니다.
 * @param cookieName
 * @param data
 */
export const deleteCookie = (cookieName, data = {}) => {
    const expires = new Date(Date.now())
    const json = data
    document.cookie = `${cookieName}=${JSON.stringify(json)}; expires=${expires.toUTCString()}`;
}

/**
 * setCookies 함수를 통해 만들어진 쿠키를 모두 가져온 뒤, cookieName 파라메터로 통해 전달된 쿠키의 이름으로 쿠키를 반환합니다.
 * @param cookieName
 * @return {*[]}
 */
export const getCookie = (cookieName) => {
    const _getCookies = document.cookie.split('; ')
    if (_getCookies[0]) {
        const cookieList = []
        for (const getCookie of _getCookies) {
            let c = getCookie.split('=')
            cookieList.push({cookieName: c[0], cookieData: c[1] ? JSON.parse(c[1]) : null})
        }
        return cookieList.filter((item) => item.cookieName === cookieName)
    }
    return null
}

/**
 * setCookies 함수를 통해 만들어진 쿠키를 모두 가져온 뒤, 쿠키들을 JSON 형태로 만듭니다. cookieData는 역직렬화 합니다.
 */
export const getAllCookies = () => {
    const _getCookies = document.cookie.split('; ')
    if (_getCookies[1]) {
        const cookieList = []
        for (const getCookie of _getCookies) {
            let c = getCookie.split('=')
            cookieList.push({cookieName: c[0], cookieData: c[1] ? JSON.parse(c[1]) : null})
        }
        return cookieList
    }
    return null
}

