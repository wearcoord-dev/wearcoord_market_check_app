import { makeStyles } from "@material-ui/core";
import { memo } from "react";

const useStyles = makeStyles({
    root: {
        margin: "10px 0",
    },
});

export const CreateBDCoord = memo(() => {
    const classes = useStyles();

    return (
        <>
            <p>ここはコーデクリエイトです</p>
        </>
    )
})