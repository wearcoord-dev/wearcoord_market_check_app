import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import mitakeimg from "../../../../../../public/img/others/size/mitake.jpg"
import mihabaimg from "../../../../../../public/img/others/size/mihaba.jpg"
import katahabaimgimg from "../../../../../../public/img/others/size/katahaba.jpg"

const useStyles = makeStyles({
    topmargin: {
        padding: "50px 0 0",
    },
    li: {
        width: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 0px 12px rgb(72 72 72 / 25%)",
        margin: "10px 0",
        "& img": {
            height: "120px",
            margin: "10px 0",
        }
    },
    ul: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    toptext: {
        textAlign: "center",
        padding: "20px 0",
    }
});


export const ShowTopsSize = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.topmargin}></div>
            <p className={classes.toptext}>このトップスはあなたのサイズと比較して. . .</p>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <img src={mitakeimg} alt="" />
                    <p>100cm</p>
                    <p>datadata</p>
                </li>
                <li className={classes.li}>
                    <img src={mihabaimg} alt="" />
                    <p>100cm</p>
                    <p>datadata</p>
                </li>
                <li className={classes.li}>
                    <img src={katahabaimgimg} alt="" />
                    <p>100cm</p>
                    <p>datadata</p>
                </li>
            </ul>
        </>
    )
})