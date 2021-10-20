import { makeStyles } from "@material-ui/core";
import { memo } from "react";

const useStyles = makeStyles({
    root: {
        padding: "10px 0",
        backgroundColor: "white",
        borderRadius: "20px",
        width: "96%",
        margin: "auto",
        boxShadow: "0px 0px 30px 1px rgb(53 53 53 / 3%)",
        height: "300px",
        },
});

export const MainBestDresser = memo(() => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
            <p>ここに説明が入ります</p>
        </div>
        </>
    )
})