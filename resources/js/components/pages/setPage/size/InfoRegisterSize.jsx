import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import img1 from "../../../../../../public/img/others/size/DrawKit-Fashion-Illustration-01.svg";
import img2 from "../../../../../../public/img/others/size/character 5.svg";

const useStyles = makeStyles({
    info: {
        width: "90%",
        margin: " 10px auto",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        borderRadius: "20px",
        lineHeight: "1.2",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        padding: "20px",
    },
    ul: {
        padding: "10px 0",
        display: "flex",
        width: "90%",
        margin: "auto",
    },
    li: {
        width: "50%",
        backgroundColor: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        margin: "10px",
        borderRadius: "30px",
        boxShadow: "0px 0px 12px rgb(72 72 72 / 25%)",
        position: "relative",
    },
    picture: {
        // width: "70%",
        margin: "auto",
        display: "block",
        padding: "30px 0",
        textAlign: "center",
        "& img": {
            height: "100px",
        }
    },
    h2: {
        fontWeight: "bold",
        lineHeight: "1.2",
    },
    p: {
        lineHeight: "1.2",
        paddingBottom: "70px",
    },
    a: {
        display: "block",
        backgroundColor: "#0080E4",
        width: "70%",
        margin: "auto",
        textAlign: "center",
        padding: "10px",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "999px",
        margin: "0 auto",
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
    }
});

export const InfoRegisterSize = memo(() => {
    const classes = useStyles();

    return (
        <>
            <p className={classes.info}>ご自身のピッタリなウェアサイズデータをアプリに登録することで、サイズの比較機能が使えるようになります。下のどちらかを選んでデータを登録しましょう！</p>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <h2 className={classes.h2}>ウェアを選択してウェアサイズデータを登録する</h2>
                    <picture className={classes.picture}>
                        <img src={img1} alt="" />
                    </picture>
                    <p className={classes.p}>身幅やウエストなど、ご自身のウェアサイズが分からない方はこちら</p>
                    <a className={classes.a} href="">Click</a>
                </li>
                <li className={classes.li}>
                    <h2 className={classes.h2}>直接ウェアサイズデータを記入して登録する</h2>
                    <picture className={classes.picture}>
                        <img src={img2} alt="" />
                    </picture>
                    <p className={classes.p}>身幅やウエストなど、ご自身にピッタリなウェアサイズ数値が分かる方はこちら</p>
                    <a className={classes.a} href="">Click</a>
                </li>
            </ul>
            <div style={{ marginBottom: "100px" }}></div>
        </>
    )
})