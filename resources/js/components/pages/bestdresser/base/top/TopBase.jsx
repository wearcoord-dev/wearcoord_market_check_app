import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import { MainBestDresser } from "../../contents/MainBestDresser";
import { BestDressUserInfo } from "./BestDressUserInfo";

const useStyles = makeStyles({
    root: {
        margin: "10px 0",
    },
});

export const TopBase = memo(() => {
    const classes = useStyles();

    return (
        <>
            <BestDressUserInfo />
            <section className={classes.root}>
            <MainBestDresser />
            </section>
        </>
    )
})