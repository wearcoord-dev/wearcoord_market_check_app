import { FC, memo } from "react";
import { CapsCategory } from "./category/CapsCategory";

const style = {
    wrapper: {
        position: "fixed",
        bottom: "20px",
        width: "100%",
        right: "0",
        flexDirection: 'column',
    },
    ul: {
        flexWrap: "nowrap",
        overflow: "auto",
    }
} as const;

export const SearchBox: FC = memo(() => {
    return (
        <>
            <CapsCategory />
        </>
    )
});