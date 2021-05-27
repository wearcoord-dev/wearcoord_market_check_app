import { memo, useEffect } from "react";
import { useOpenBtnFunc } from "../../../../hooks/mycoord/useOpenBtnFunc";
import { UserWear } from "../../../providers/UserWear";
import { OpenLeftBtn } from "../../button/OpenLeftBtn";
import { OpenRightBtn } from "../../button/OpenRightBtn";
import { Mannequin } from "./Mannequin";

export const MainMycoord = memo(() => {
    const { openBtnFunc } = useOpenBtnFunc();

    useEffect(() => openBtnFunc());

    return (
        <>
            <OpenLeftBtn />
            <UserWear>
                <Mannequin />
            </UserWear>
            <OpenRightBtn />
        </>
    )
})