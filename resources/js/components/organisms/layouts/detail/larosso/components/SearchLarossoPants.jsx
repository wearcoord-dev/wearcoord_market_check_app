import { memo, useContext, useEffect } from "react";
import { UserContext } from "../../../../../providers/UserProvider";


export const SearchLarossoPants = memo((props) => {
    const { onClickFetchPants } = props;
    const context = useContext(UserContext);

    useEffect(() => {
        if (context !== undefined) {
            const gender = context.contextName.gender;
            onClickFetchPants(gender);
        };
    }, [context]);

    return (
        <>
            <div>
                <p>ラロッソのpants</p>
            </div>
        </>
    )
})