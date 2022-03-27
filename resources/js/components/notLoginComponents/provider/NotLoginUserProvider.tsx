import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NotLoginUser } from "../types/NotLoginUser";

export type NotLoginUserContextType = {
    notLoginUser: NotLoginUser;
    setNotLoginUser: Dispatch<SetStateAction<NotLoginUser>>
}

const NotLoginUserContext = createContext<NotLoginUserContextType>({} as NotLoginUserContextType);

export const NotLoginUserProvider = (props: { children: ReactNode }) => {
    const { children } = props;
    const [notLoginUser, setNotLoginUser] = useState<NotLoginUser>(null);
    const search = useLocation().search;
    const getUrlParam = new URLSearchParams(search);

    // console.log(notLoginUser)
    // ローカルストレージに既に値があるか確認する

    useEffect(() => {
        if (localStorage.getItem("flg")) {
            // ブランドを管理
            let currentBrand;

            if (getUrlParam.get('brand')){
                // paramが存在しローカルストレージと異なる場合はparamを使い、合っていればそのままローカルストレージから取ってくる
                if (getUrlParam.get('brand') !== localStorage.getItem("brand")){
                    currentBrand = getUrlParam.get('brand');
                }else{
                    currentBrand = localStorage.getItem("brand");
                }
            }else{
                // paramが無ければローカルストレージに保存しているものを取ってくる
                currentBrand = localStorage.getItem("brand")
            }

            setNotLoginUser({
                ...notLoginUser,
                gender: localStorage.getItem("gender") ?? null,
                mannequin: localStorage.getItem("mannequin") ?? null,
                caps: localStorage.getItem("caps") ?? null,
                tops: localStorage.getItem("tops") ?? null,
                pants: localStorage.getItem("pants") ?? null,
                shoes: localStorage.getItem("shoes") ?? null,
                brand: currentBrand ?? null,
            })
        } else {
            setNotLoginUser({ ...notLoginUser, gender: null, mannequin: null, caps: null, tops: null, brand: getUrlParam.get('brand') })
            if (getUrlParam.get('brand')) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('brand', getUrlParam.get('brand'));
            }
        }
    }, [])

    // contextのそれぞれが更新される度にlocalstorageに保存

    useEffect(() => {
        if (notLoginUser) {
            if (notLoginUser.gender) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('gender', (notLoginUser.gender));
            }
            if (notLoginUser.mannequin) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('mannequin', (notLoginUser.mannequin));
            }
            if (notLoginUser.caps) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('caps', (notLoginUser.caps));
            }
            if (notLoginUser.tops) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('tops', (notLoginUser.tops));
            }
            if (notLoginUser.pants) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('pants', (notLoginUser.pants));
            }
            if (notLoginUser.shoes) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('shoes', (notLoginUser.shoes));
            }
            if (notLoginUser.brand) {
                localStorage.setItem('flg', ('true'));
                localStorage.setItem('brand', (notLoginUser.brand));
            }
        }
    }, [notLoginUser])

    return (
        <NotLoginUserContext.Provider value={{ notLoginUser, setNotLoginUser }}>
            {children}
        </NotLoginUserContext.Provider>
    )
}

export const useNotLoginUser = (): NotLoginUserContextType =>
    useContext(NotLoginUserContext);