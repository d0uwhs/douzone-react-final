import React, {useEffect, useState} from "react";
import useNavigateGuard from "../../hooks/useNavigateGuard";
import {useDispatch, useSelector} from "react-redux";
import {postRegistermenuApi} from "../../store/middlewares/thunks/apis/menulistApi";

const MenuRegisterPage = () => {
    const userSelector = useSelector((state) => state.userReducer)
    const menuSelector = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();

    useNavigateGuard("/login", !userSelector.isLogged)

    const [registerMenu, setRegisterMenu] = useState(
        {
            id: 0,
            menuName: '',
            menuPrice: 0,
            categoryName: '한식',
            isOrderable: false,
            detail: {
                description: '',
                image: ''
            }
        }
    );

    const onChangeHandler = (e) => {
        let {name, value} = e.target;
        switch (name) {
            case 'menuPrice' :
                value = parseInt(value);
                break;

            case 'description' :
                name = 'detail';
                value = {
                    description: value,
                    image: registerMenu.detail.image
                };
                break;
            default:
                break;
        }

        setRegisterMenu(
            {
                ...registerMenu,
                [name]: value
            }
        );
    }

    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const base64 = await convertBase64(file);
        console.log(base64);
        setRegisterMenu(
            {
                ...registerMenu,
                detail: {
                    description: registerMenu.detail.description,
                    image: base64
                }
            }
        );
    }

    /* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    //
    // useEffect(
    //     () => {
    //         /* 메뉴 등록 완료 확인 후 /menu로 이동 */
    //         if (menuSelector.regist) {
    //             alert('메뉴 등록');
    //             navigate(`/menu`);
    //         }
    //     },
    //     [menuSelector, navigate]
    // );

    const onClickHandler = () => {
        /* registMenu에 대한 유효성 검사 후 호출 */
        dispatch(postRegistermenuApi(registerMenu));
    }

    return (
        <>
            <div>
                <label>메뉴 이름 : </label>
                <input type="text" name="menuName" value={registerMenu.menuName} onChange={onChangeHandler}/>
                <br/>
                <label>메뉴 가격 : </label>
                <input type="number" name="menuPrice" value={registerMenu.menuPrice} onChange={onChangeHandler}/>
                <br/>
                <label>카테고리 : </label>
                <select name="categoryName" value={registerMenu.categoryName} onChange={onChangeHandler}>
                    <option>한식</option>
                    <option>일식</option>
                    <option>서양</option>
                    <option>동양</option>
                    <option>커피</option>
                    <option>쥬스</option>
                    <option>기타</option>
                </select>
                <br/>
                <label>판매 여부 : </label>
                <select name="isOrderable" value={registerMenu.isOrderable} onChange={onChangeHandler}>
                    <option value="true">판매 가능</option>
                    <option value="false">판매 불가</option>
                </select>
                <br/>
                <div>
                    <label>설명 : </label>&nbsp;
                    <br/>
                    <textarea name="description" value={registerMenu.detail.description}
                              onChange={onChangeHandler}></textarea>
                </div>
                <br/>

                <label>사진 : </label>
                <input
                    type="file"
                    name="image"
                    accept='image/*'
                    onChange={fileChangeHandler}/>
                <br/>
                <button className="button" onClick={onClickHandler}>메뉴 등록</button>
            </div>
        </>
    );
}

export default MenuRegisterPage;
