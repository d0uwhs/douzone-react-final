import React, {useEffect, useState} from "react";
import useNavigateGuard from "../../hooks/useNavigateGuard";
import {useDispatch, useSelector} from "react-redux";
import {postRegistermenuApi} from "../../store/middlewares/thunks/apis/menulistApi";
import {useNavigate} from "react-router-dom";
import {StickyBottomButton} from "../../components/style/styledButtons";
import {StyledTextarea} from "../../components/style/styledTextarea";
import {StyledInput, StyledSelect} from "../../components/style/styledInput";
import {Wrapper} from "../../components/style/styledWrapper";

const MenuRegisterPage = () => {
    const userSelector = useSelector((state) => state.userReducer)
    const menuSelector = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

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
        const base64 = await convertBase64(file);
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
            if (menuSelector.regist) {
                alert('메뉴 등록');
                navigate(`/menu`);
            }
        },
        [menuSelector, navigate]
    );

    const onClickHandler = () => {
        dispatch(postRegistermenuApi(registerMenu)).then(() => {
            alert('메뉴 등록');
            navigate(`/menu`);
        })
    };


    return (

        <>
            <StickyBottomButton textColor="black" btnSize="100%" bgColor="#FFFFFF" border="1px solid #AAAAAA"
                                className="button" onClick={onClickHandler}>메뉴 등록</StickyBottomButton>

                <label>메뉴 이름 : </label>
                <StyledInput type="text" name="menuName" value={registerMenu.menuName} onChange={onChangeHandler}/>
                <br/>
                <label>메뉴 가격 : </label>
                <StyledInput type="number" name="menuPrice" value={registerMenu.menuPrice} onChange={onChangeHandler}/>
                <br/>
                <label>카테고리 : </label>
                <StyledSelect name="categoryName" value={registerMenu.categoryName} onChange={onChangeHandler}>
                    <option>한식</option>
                    <option>일식</option>
                    <option>서양</option>
                    <option>동양</option>
                    <option>커피</option>
                    <option>쥬스</option>
                    <option>기타</option>
                </StyledSelect>
                <br/>
                <label>판매 여부 : </label>
                <StyledSelect name="isOrderable" value={registerMenu.isOrderable} onChange={onChangeHandler}>
                    <option value="true">판매 가능</option>
                    <option value="false">판매 불가</option>
                </StyledSelect>
                <br/>
                <div>
                    <label>설명 : </label>&nbsp;
                    <br/>
                    <StyledTextarea name="description" value={registerMenu.detail.description}
                                    onChange={onChangeHandler}></StyledTextarea>
                </div>
                <br/>

                <label>사진 : </label>
                <input
                    type="file"
                    name="image"
                    accept='image/*'
                    onChange={fileChangeHandler}/>
                <br/>

        </>

    );
}

export default MenuRegisterPage;
