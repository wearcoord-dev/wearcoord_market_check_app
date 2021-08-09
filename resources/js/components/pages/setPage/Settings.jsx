import axios from "axios";
import { memo, useCallback } from "react";
import { useHistory } from "react-router";

const styles = {
    btnWrap: {
        textAlign: "center",
        margin: "20px"
    },
    button: {
        fontSize: "20px",
        padding: "10px 0"
    },
    title: {
        textAlign: "center",
        padding: "30px 0",
        fontSize: "14px",
        fontWeight: "bold",
    }
};

export const Settings = memo(() => {
    const history = useHistory();

    const onClickFace = useCallback(() => history.push("/main/settings/face"), [history]);
    const onClickSize = useCallback(() => history.push("/main/settings/size"), [history]);
    const onClickDelete = useCallback(() => history.push("/main/settings/delete"), [history]);


    const onClickLogout = (e) => {
        e.preventDefault();
        const method = "POST";

        axios.post('/logout', {
            method,
        })
            .then(() => {
                window.location.href = "/";
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <p style={styles.title}>設定</p>
            <ul>
                <li style={styles.btnWrap}>
                    <button style={styles.button} onClick={onClickFace}>マネキン顔画像の変更</button>
                </li>
                <li style={styles.btnWrap}>
                    <button style={styles.button} onClick={onClickSize}>ウェア情報の変更</button>
                </li>
                <li style={styles.btnWrap} onClick={onClickDelete}>
                    <button style={styles.button}>退会する</button>
                </li>
                <li style={styles.btnWrap}>
                    <button style={styles.button} href="/logout" onClick={onClickLogout}>ログアウト</button>
                </li>
            </ul>
        </>
    )
})