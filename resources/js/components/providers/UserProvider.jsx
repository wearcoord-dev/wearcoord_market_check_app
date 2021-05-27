import React, { createContext, memo, useEffect, useState } from "react";
import { useGetUserInfo } from "../../hooks/user/useGetUserInfo";

export const UserContext = createContext({});

export const UserProvider = memo((props) => {
    const { children } = props;
    const { getUser, userInfo } = useGetUserInfo();

    useEffect(() => getUser(),[]);

    const contextItem = userInfo;
    const contextName = contextItem.data;
    // console.log(`これは${contextName}`);

    return (
        <>
        <UserContext.Provider value={{ contextName }}>
            {children}
        </UserContext.Provider>
        </>
    )
})