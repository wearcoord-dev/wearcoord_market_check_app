import { memo, useContext, useEffect } from "react";
import { UserContext } from "../../../../../providers/UserProvider";
import ralossoimg from "../../../../../../../../public/img/others/article/ralosso_logo.png"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {

    },
    wrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 0",

        "& img": {
            height: "100px",
            objectFit: "contain",
            paddingBottom: "10px",
        }
    }
});


export const SearchLarossoTops = memo((props) => {
    const { onClickFetchTops } = props;
    const context = useContext(UserContext);
    const classes = useStyles();

    useEffect(() => {
        if (context !== undefined) {
            const gender = context.contextName.gender;
            onClickFetchTops(gender);
        };
    }, [context]);

    return (
        <>
            <div className={classes.wrap}>
                <img src={ralossoimg} alt="" />
                <p>ラロッソのtops一覧</p>
            </div>
        </>
    )
})