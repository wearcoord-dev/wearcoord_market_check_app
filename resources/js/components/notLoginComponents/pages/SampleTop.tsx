import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { OpenBtn } from "../atoms/button/OpenBtn";
import { TopCoord } from "../organisms/coord/TopCoord";

export const SampleTop: FC = memo(() => {
    const history = useHistory();

    const onClickChangeMannequin = useCallback(() => history.push("/sample/mannequin"), []);

    return (
        <>
            <TopCoord />
        </>
    )
});