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
  };

export const Settings = memo(() => {
    const history = useHistory();

    const onClickFace = useCallback(() => history.push("/main/settings/face"), [history]);


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
            <p style={{ textAlign: "center" }}>Settings</p>
            <div style={ styles.btnWrap }>
                <button style={ styles.button } onClick={onClickFace}>マネキン顔画像の変更</button>
            </div>
            <div style={ styles.btnWrap }>
                <button style={ styles.button }>退会する</button>
            </div>
            <div style={ styles.btnWrap }>
                <button style={ styles.button } href="/logout" onClick={onClickLogout}>ログアウト</button>
            </div>
        </>
    )
})