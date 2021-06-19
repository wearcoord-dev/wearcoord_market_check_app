import { memo, useContext, useEffect } from "react";
import { UserContext } from "../../../../../providers/UserProvider";


export const SearchLarossoTops = memo((props) => {
    const { onClickFetchTops } = props;
    const context = useContext(UserContext);

    useEffect(() => {
        if (context !== undefined) {
            // console.log('useEffectが実行されました');
            const gender = context.contextName.gender;
            onClickFetchTops(gender);
        };
    }, [context]);

    return (
        <>
            <div>
                <p>ラロッソのtops</p>
            </div>
        </>
    )
})