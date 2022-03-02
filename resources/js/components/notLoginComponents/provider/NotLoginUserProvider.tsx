import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { NotLoginUser } from "../types/NotLoginUser";

export type NotLoginUserContextType = {
    notLoginUser: NotLoginUser;
    setNotLoginUser: Dispatch<SetStateAction<NotLoginUser>>
}

const NotLoginUserContext = createContext<NotLoginUserContextType>({} as NotLoginUserContextType);

export const NotLoginUserProvider = (props: { children: ReactNode }) => {
    const { children } = props;
    const [notLoginUser, setNotLoginUser] = useState<NotLoginUser>(null);

    // ローカルストレージに既に値があるか確認する

    useEffect(() => {
        if (localStorage.getItem("flg")) {
            setNotLoginUser({
                ...notLoginUser,
                gender: localStorage.getItem("gender") ?? null,
                mannequin: localStorage.getItem("mannequin") ?? null,
                caps: localStorage.getItem("caps") ?? null,
                tops: localStorage.getItem("tops") ?? null,
                pants: localStorage.getItem("pants") ?? null,
            })
        } else {
            setNotLoginUser({ ...notLoginUser, gender: null, mannequin: null, caps: null, tops:null })
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
        }
    }, [notLoginUser])

    // useEffect(() => {
    //     if (notLoginUser) {
    //         if (notLoginUser.gender && notLoginUser.mannequin === null) {
    //             setNotLoginUser({ ...notLoginUser, gender: null, mannequin: null })
    //         }
    //     }
    // })

    // console.log(localStorage.getItem("gender"), localStorage.getItem("mannequin"));

    return (
        <NotLoginUserContext.Provider value={{ notLoginUser, setNotLoginUser }}>
            {children}
        </NotLoginUserContext.Provider>
    )
}

export const useNotLoginUser = (): NotLoginUserContextType =>
    useContext(NotLoginUserContext);