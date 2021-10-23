import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    root: {
        margin: "10px 0",
    },
});

export const ShowBDCoord = memo(() => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <p>ここはメインコーデです</p>
            <a href="create/coord">ボタンです</a>
        </>
    )
})