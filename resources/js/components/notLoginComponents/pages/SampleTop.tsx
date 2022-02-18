import { FC, memo } from "react";
import { OpenBtn } from "../atoms/button/OpenBtn";
import { TopCoord } from "../organisms/coord/TopCoord";

export const SampleTop: FC = memo(() => {
    return (
        <>
            <TopCoord />
            <OpenBtn />
        </>
    )
});