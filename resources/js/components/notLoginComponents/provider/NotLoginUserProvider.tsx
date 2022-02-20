import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { NotLoginUser } from "../types/NotLoginUser";

export type NotLoginUserContextType = {
    notLoginUser: NotLoginUser;
    setNotLoginUser: Dispatch<SetStateAction<NotLoginUser>>
}

const NotLoginUserContext = createContext<NotLoginUserContextType>({} as NotLoginUserContextType);

export const NotLoginUserProvider = (props: { children: ReactNode }) => {
    const { children } = props;
    const [notLoginUser, setNotLoginUser] = useState<NotLoginUser>(null);
    return (
        <NotLoginUserContext.Provider value={{ notLoginUser, setNotLoginUser }}>
            {children}
        </NotLoginUserContext.Provider>
    )
}

export const useNotLoginUser = (): NotLoginUserContextType =>
    useContext(NotLoginUserContext);