import { memo } from "react";
import { BestDressUserInfo } from "./BestDressUserInfo";

export const TopBase = memo(() => {
    return (
        <>
        <BestDressUserInfo />
            <p>topbaseです</p>
        </>
    )
})