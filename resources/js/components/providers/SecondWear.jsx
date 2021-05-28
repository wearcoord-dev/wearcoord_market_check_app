import React, { createContext, memo, useEffect, useState } from "react";
import { useGetUserInfo } from "../../hooks/user/useGetUserInfo";

export const ValueContext = createContext({});

export const SecondWear = ((props) => {
    const { children } = props;
    const { getUser, userInfo } = useGetUserInfo();
    // console.log('表示されてるぞ！');

    useEffect(() => getUser(),[]);

    const contextItem = userInfo;
    const contextName = contextItem.data;
    // console.log(`これは${contextName}`);

    return (
        <>
        <ValueContext.Provider value={{ contextName }}>
            {children}
        </ValueContext.Provider>
        </>
    )
})