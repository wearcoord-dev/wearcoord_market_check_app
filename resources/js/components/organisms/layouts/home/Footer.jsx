import { memo } from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        // display: "flex",
        backgroundColor: "#ddd",
        padding: "30px 0",
    },
    iconul: {
        display: "flex",
        width: "90%",
        margin: "auto",
        justifyContent: "space-evenly",
        padding: "20px 0",
        "& a": {
            color: "#484848",
        }
    },
    linkul: {
        width: "90%",
        margin: "auto",
        "& li": {
            padding: "10px 0",
            borderBottom: "1px solid #f9f9f9",

            "& a": {
                color: "#484848",
            }
        }
    }
});

export const Footer = memo(() => {
    const classes = useStyles();

    return (
        <>
        <footer className={classes.footer}>
            <ul className={classes.linkul}>
                <li><a href="">企業情報</a></li>
                <li><a href="">プライバシーポリシー</a></li>
                <li><a href="">お問い合わせ</a></li>
            </ul>
            <ul className={classes.iconul}>
                <li><a href=""><TwitterIcon style={{ fontSize: 40 }} /></a></li>
                <li><a href=""><InstagramIcon style={{ fontSize: 40 }} /></a></li>
                <li><a href=""><PinterestIcon style={{ fontSize: 40 }} /></a></li>
            </ul>
        </footer>
        </>
    )
})