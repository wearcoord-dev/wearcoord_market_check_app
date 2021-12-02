import { memo, useCallback } from "react";
import { useHistory } from "react-router";
import  Logo  from "../../../../../public/img/logo/216496-long.png"

export const Header = memo(() => {
    const history = useHistory();

    const onClickSettings = useCallback(() => history.push("/main/settings"), [history]);
    const onClickHome = useCallback(() => history.push("/main"), [history]);


    return (
        <>
            <header className="header" >
                <a className="titleIcon" href="">
                    <img className="titleImg" src={Logo} alt="" onClick={onClickHome} />
                </a>
                <a className="settingIcon" onClick={onClickSettings}>
                    <span className="material-icons-outlined">
                        settings
                    </span>
                </a>
            </header>
        </>
    )
})