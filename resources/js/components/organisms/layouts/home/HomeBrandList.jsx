import { memo } from "react";
import tenezImg from '../../../../../../public/img/lp/tenez/tenez.jpeg';
import larossoImg from '../../../../../../public/img/others/article/ralosso_logo.png';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    h2title: {
        paddingBottom: "2px",
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "16px",
    },
    h2parrent: {
        width: "90%",
        margin: "auto",
        padding: "30px 0",
    },
    ul: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "800px",
        margin: "auto",
        "& li": {
            width: "40%",
            maxWidth: "200px",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            "& a": {
                height: "100%",
                "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }
            }
        }
    }
});

export const HomeBrandList = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>ブランド特集ページ</h2>
            </div>
            <ul className={classes.ul}>
                <li><a href="/main/larosso"><img src={larossoImg} alt="" /></a></li>
                <li><a href="/main/10ez"><img src={tenezImg} alt="" /></a></li>
            </ul>
        </>
    )
})