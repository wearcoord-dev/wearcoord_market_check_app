import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import wearimg from "../../../../../../public/img/others/size/wear.png";
import commentimg from "../../../../../../public/img/others/size/b0782.png";

const useStyles = makeStyles({
    topmargin: {
        padding: "50px 0 0",
    },
    info: {
        width: "90%",
        margin: " 10px auto",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        borderRadius: "20px",
        lineHeight: "1.2",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        padding: "20px",
        maxWidth: "600px",
    },
    ul: {
        padding: "10px 0",
        // display: "flex",
        width: "90%",
        margin: "auto",
        maxWidth: "600px",
    },
    li: {
        backgroundColor: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        borderRadius: "30px",
        boxShadow: "0px 0px 12px rgb(72 72 72 / 25%)",
        position: "relative",
        margin: "20px 0",
        "& picture": {
            // width: "70%",
            margin: "auto",
            display: "block",
            padding: "30px 0",
            textAlign: "center",
            "& img": {
                height: "100px",
            }
        },
    },
    p: {
        lineHeight: "1.2",
        padding: "10px 0",
        textAlign: "center",
    },
});

export const SizeTextPage = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.topmargin}></div>
            <p className={classes.info}>登録してある自分に合ったサイズと選んだウェアのサイズを比較を、ページ上部のタブを切り替えて見ることができます！</p>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <picture>
                        <img src={wearimg} alt="" />
                    </picture>
                    <p className={classes.p}>サイズの差が<span style={{ color: "red" }}>マイナス</span>であれば、今選んでいるウェアは小さいことを表しています。</p>
                    <p className={classes.p}>サイズの差が<span style={{ color: "red" }}>プラス</span>であれば、今選んでいるウェアは大きいことを表しています。</p>
                </li>
                <li className={classes.li}>
                    <picture>
                        <img src={commentimg} alt="" />
                    </picture>
                    <p className={classes.p}>最後に全体的なサイズ感を総括して、あなたに合ったウェアかどうかコメントします！</p>
                </li>
            </ul>
            <div style={{ marginBottom: "100px" }}></div>
        </>
    )
})