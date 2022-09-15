









---
## #13



### 참고자료
[Redux Actions Official Docs](https://redux-actions.js.org/)

[Redux Official Style Guide](https://redux.js.org/style-guide/)

---
## Issues

### 1. 

> npm WARN deprecated redux-devtools-extension@2.13.9: Package moved to @redux-devtools/extension.

[@redux-devtools/extension](https://www.npmjs.com/package/@redux-devtools/extension)


Deprecated된 라이브러리 이므로, 대신 아래의 의존 라이브러리 설치

```npm i @redux-devtools/extension```

### 2.

>Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.

dispatch를 하기 위해서는 **순수 액션 객체** 만 전달할수 있다. **함수를 전달** 하기 위해선 ```redux-thunk``` 미들웨어를 이용해야 한다.

>## redux-thunk 는 뭘 하는 미들웨어일까?
>가장 간단히 설명하자면, 이 미들웨어는 객체 대신 함수를 생성하는 액션 생성함수를 작성 할 수 있게 해줍니다. **리덕스에서는 기본적으로는 액션 객체를 디스패치합니다.** 
> 
>일반 액션 생성자는, 다음과 같이 파라미터를 가지고 액션 객체를 생성하는 작업만합니다.
> 
> [Velopert Advanced Redux Docs](https://redux-advanced.vlpt.us/2/01.html)


### 3. 

```jsx
const GET_MENULIST = `${reducerName}/GET_MENULIST`;

...

export const {menu: { getMenulist }} = createActions({
    [GET_MENULIST]: (res) => ({menulist: res})
})
```
action이 호출이 되지 않아 변수명을 잘못 선언했나 싶어 확인했는데,
createActions를 통한 자동으로 액션 생성을 할 때, 생성되는 액션 이름에는 규칙이 있었다.

> Action의 타입을 상단에서 선언을 할 때, 언더바를 기준으로, camelCase 형태로 액션 함수가 생성이 된다.
> 
> ex : GET_MENULIST = getMenulist

[Redux Actions Docs](https://redux-actions.js.org/api/createaction#createactionsactionmap-identityactions)

### 4.


> React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array

useEffect hooks는 dependency array에 빈 배열을 넣으면, 컴포넌트가 마운트 될 시에만 hooks 내 함수가 실행이 된다.

[Understanding exhaustive-deps](https://bobbyhadz.com/blog/react-hooks-exhaustive-deps#:~:text=The%20%22react%2Dhooks%2Fexhaustive,render%20or%20disable%20the%20rule.)

---
## #14



### 참고자료

---
## Issues

### 1.
```jsx
loginUser ? console.log(`Login Test`) : console.log(`Not login Test`);
```
빈 배열은 falsy한 값이 아니다.

[MDN Falsy](https://developer.mozilla.org/ko/docs/Glossary/Falsy)

---
## #16



### 참고자료

---
## Issues

### 1.
```jsx
const userReducer = handleActions(
    {
        [LOGIN]: (state, {payload}) => {
            if (payload[0]) {
                ...
                state.isLogged = true
                return state //
            }
            /**
             * 변경된 state를 return 해야한다. #16-1
             */
            return state
        },
        ...
```

상태를 변화시킨 후, 변경된 상태를 반환해야 한다.

