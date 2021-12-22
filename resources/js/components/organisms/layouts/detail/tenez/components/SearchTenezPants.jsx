import { makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import tenezimg from "../../../../../../../../public/img/lp/tenez/tenez.jpeg"
import { UserContext } from "../../../../../providers/UserProvider";

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


export const SearchTenezPants = memo((props) => {
    const { onClickFetchPants } = props;
    const context = useContext(UserContext);
    const classes = useStyles();


    useEffect(() => {
        if (context !== undefined) {
            const gender = context.contextName.gender;
            onClickFetchPants(gender);
        };
    }, [context]);

    return (
        <>
            <div className={classes.wrap}>
                <img src={tenezimg} alt="" />
                <p>10EZのpants一覧</p>
            </div>
        </>
    )
})