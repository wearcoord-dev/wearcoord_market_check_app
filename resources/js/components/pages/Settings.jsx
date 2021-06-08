import axios from "axios";
import { memo } from "react";
import { useHistory } from "react-router";

export const Settings = memo(() => {
    const history = useHistory();

    const onClickLogout = (e) => {
        e.preventDefault();
        const method = "POST";

        axios.post('/logout', {
          method,
        })
          .then(() => {
            window.location.href = "/";
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    return (
        <>
            <p>settingsです</p>
            <a href="/logout" onClick={onClickLogout}>ログアウト</a>
        </>
    )
})