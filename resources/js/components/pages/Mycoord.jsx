import { memo, useEffect } from "react";
import { useOpenBtnFunc } from "../../hooks/mycoord/useOpenBtnFunc";
import { OpenLeftBtn } from "../organisms/button/OpenLeftBtn";
import { OpenRightBtn } from "../organisms/button/OpenRightBtn";
import { Mannequin } from "../organisms/layouts/mycoord/Mannequin"

export const Mycoord = memo(() => {
    const { openBtnFunc } = useOpenBtnFunc();

    useEffect(() => openBtnFunc());

    return (
        <>
        <div className="displayFlex">
        <OpenLeftBtn />
        <Mannequin />
        <OpenRightBtn />
        </div>
        </>
    )
})