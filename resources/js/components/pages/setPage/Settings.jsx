import axios from "axios";
import { memo, useCallback } from "react";
import { useHistory } from "react-router";

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
            <p>settingsです</p>
            <div>
                <button onClick={onClickFace}>フェイス</button>
            </div>
            <div>
                <button >退会する</button>
            </div>
            <div>
                <button href="/logout" onClick={onClickLogout}>ログアウト</button>
            </div>
        </>
    )
})