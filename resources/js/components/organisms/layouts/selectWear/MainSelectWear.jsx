import { memo } from "react";
import { SelectWear } from "./SelectWear";

export const MainSelectWear = memo(() => {
    return (
        <>
            <div className="mannequinImg">
                <SelectWear />
            </div>
        </>
    )
})