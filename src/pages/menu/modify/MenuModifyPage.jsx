import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {putMenuApi} from "../../../store/middlewares/thunks/apis/menulistApi";

const MenuModifyPage = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);
    const menu = result.menudetail;

    const [modifyMenu, setModifyMenu] = useState(
        {
            id: params.id,
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
        let name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case 'menuPrice' :
                value = parseInt(value);
                break;
            case 'isOrderable' :
                break;
            case 'description' :
                name = 'detail';
                value = {
                    description: value,
                    image: modifyMenu.detail.image
                };
                break;
            default:
                break;
        }

        setModifyMenu(
            {
                ...modifyMenu,
                id: params.id,
                [name]: value
            }
        );
    }

    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setModifyMenu(
            {
                ...modifyMenu,
                detail: {
                    description: modifyMenu.detail.description,
                    image: base64
                }
            }
        );
    }

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

    useEffect(
        () => {
            if (JSON.stringify(result) === '{}') {
                navigate(`/menu/${params.id}`)
            }
        },
        [result]
    );

    useEffect(
        () => {
            if (JSON.stringify(result) === '{}') {
                navigate(`/menu/${params.id}`)
            } else {
                setModifyMenu(
                    {
                        ...modifyMenu,
                        id: params.id,
                        menuName: menu.menuName,
                        menuPrice: menu.menuPrice,
                        categoryName: menu.categoryName,
                        isOrderable: menu.isOrderable,
                        detail: {
                            description: menu.detail.description,
                            image: menu.detail.image
                        }
                    }
                );

            }
        },
        []
    );


    const onClickHandler = () => {
        dispatch(putMenuApi(modifyMenu, params.id)).then(() => {
            /* 메뉴 수정 완료 확인 후 /menu로 이동 */
            alert('메뉴 수정');
            navigate(-1);
        });
    }

    return (
        <>
            <div className="">
                <h2>{params.id}번 메뉴 수정</h2>
                <label>메뉴이름 : </label>
                <input type="text" name="menuName" value={modifyMenu.menuName} onChange={onChangeHandler}/>
                <br/>
                <label>메뉴가격 : </label>
                <input type="number" name="menuPrice" value={modifyMenu.menuPrice} onChange={onChangeHandler}/>
                <br/>
                <label>카테고리 : </label>
                <select name="categoryName" value={modifyMenu.categoryName} onChange={onChangeHandler}>
                    <option>한식</option>
                    <option>일식</option>
                    <option>서양</option>
                    <option>동양</option>
                    <option>커피</option>
                    <option>쥬스</option>
                    <option>기타</option>
                </select>
                <br/>
                <label>판매여부 : </label>
                <select name="isOrderable" value={modifyMenu.isOrderable} onChange={onChangeHandler}>
                    <option value="true">판매 가능</option>
                    <option value="false">판매 불가</option>
                </select>
                <br/>
                <div className="">
                    <label>설명 : </label>&nbsp;
                    <br/>
                    <textarea name="description" value={modifyMenu.detail.description}
                              onChange={onChangeHandler}></textarea>
                </div>
                <br/>
                <label>사진 : </label>
                <input
                    type="file"
                    name="image"
                    accept='image/*'
                    onChange={fileChangeHandler}
                />
                <br/>
                <img src={modifyMenu.detail.image} style={{maxWidth: 500}} alt={modifyMenu.menuName}/>

            </div>

            <button className="button" onClick={onClickHandler}>메뉴 수정</button>
        </>
    )
}

export default MenuModifyPage;
