import React, { createContext, memo, useEffect, useState } from "react";
import { useGetUserInfo } from "../../hooks/user/useGetUserInfo";

export const ValueContext = createContext({});

export const SecondWear = ((props) => {
    const { children } = props;
    const { getUser, userInfo } = useGetUserInfo();

    useEffect(() => getUser(),[]);

    const contextItem = userInfo;
    const contextName = contextItem.data;

    return (
        <>
        <ValueContext.Provider value={{ contextName }}>
            {children}
        </ValueContext.Provider>
        </>
    )
})