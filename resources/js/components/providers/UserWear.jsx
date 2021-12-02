import React, { createContext, memo, useEffect, useState } from "react";
import { useGetUserInfo } from "../../hooks/user/useGetUserInfo";

export const AppContext = createContext({});

export const UserWear = ((props) => {
    const { children } = props;
    const { getUser, userInfo } = useGetUserInfo();

    useEffect(() => getUser(),[]);

    const contextItem = userInfo;
    const contextName = contextItem.data;

    return (
        <>
        <AppContext.Provider value={{ contextName }}>
            {children}
        </AppContext.Provider>
        </>
    )
})