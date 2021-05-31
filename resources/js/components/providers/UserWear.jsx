import React, { createContext, memo, useEffect, useState } from "react";
import { useGetUserInfo } from "../../hooks/user/useGetUserInfo";

export const AppContext = createContext({});

export const UserWear = ((props) => {
    const { children } = props;
    const { getUser, userInfo } = useGetUserInfo();
    // console.log('表示されてるぞ！');

    useEffect(() => getUser(),[]);

    const contextItem = userInfo;
    const contextName = contextItem.data;
    console.log(`これは${contextName}`);

    return (
        <>
        <AppContext.Provider value={{ contextName }}>
            {children}
        </AppContext.Provider>
        </>
    )
})