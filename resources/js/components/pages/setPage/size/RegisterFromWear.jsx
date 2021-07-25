import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import img1 from "../../../../../../public/img/others/size/DrawKit-Fashion-Illustration-01.svg";
import img2 from "../../../../../../public/img/others/size/character 5.svg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    info: {
        width: "90%",
        margin: " 10px auto",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        borderRadius: "20px",
        lineHeight: "1.2",
        boxShadow: "0px 0px 30px 1px rgba(153, 99, 99, 0.03)",
        padding: "20px",
    },
    formbox: {
        overflow: "hidden",
        width: "50%",
        margin: "1em auto",
        textAlign: "center",
        position: "relative",
        border: "1px solid #bbbbbb",
        borderRadius: "2px",
        background: "#ffffff",
        "& select": {
            width: "100%",
            paddingRight: "1em",
            cursor: "pointer",
            textIndent: "0.01px",
            textOverflow: "ellipsis",
            border: "none",
            outline: "none",
            background: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            appearance: "none",
            padding: "8px 38px 8px 8px",
            color: "#666666",
        },
        '&::before': {
            position: "absolute",
            top: "0.8em",
            right: "0.9em",
            width: "0",
            height: "0",
            padding: "0",
            content: "''",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #666666",
            pointerEvents: "none",
        },
    },
    title: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formwrap: {
        display: "flex",
        width: "90%",
        margin: "auto",
    },
    form: {
        width: "90%",
        margin: "auto",
        backgroundColor: "#ffffff",
        padding: "10px 0",
        boxSizing: "border - box",
        borderRadius: "20px",
        boxShadow: "0px 0px 30px 1px rgba(153, 99, 99, 0.03)",
    },
    searchinput: {
        textAlign: "center",
        display: "block",
        margin: "auto",
        fontSize: "14px",
        width: "50%",
        backgroundColor: "#ddd",
        borderRadius: "999px",
        padding: "4px 0",
    }

});

export const RegisterFromWear = memo(() => {
    const classes = useStyles();
    const history = useHistory();


    return (
        <>
            <p className={classes.info}>普段着ているトップスを選んで、ご自身の体格データとして登録します。以下の検索フォームからウェアを選んでください。</p>

            <form className={classes.form} >
                <div className={classes.formwrap}>
                    <p className={classes.title}>ブランド :</p>
                    <div className={classes.formbox}>
                        <select>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="asics">Asics</option>
                        </select>
                    </div>
                </div>
                <div className={classes.formwrap}>
                    <p className={classes.title}>サイズ :</p>
                    <div className={classes.formbox}>
                        <select>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                        </select>
                    </div>
                </div>
                <input className={classes.searchinput} type="submit" value="ウェアを検索" />
            </form>

            <div style={{ marginBottom: "100px" }}></div>
        </>
    )
})