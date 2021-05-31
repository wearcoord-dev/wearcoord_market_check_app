import { memo } from "react";
import  Logo  from "../../../../../public/img/logo/0080E4-long.png"

export const Header = memo(() => {
    return (
        <>
            <header className="header" >
                <a className="titleIcon" href="">
                    <img className="titleImg" src={Logo} alt="" />
                </a>
                <a className="settingIcon" href="/home">
                    <span className="material-icons-outlined">
                        settings
                    </span>
                </a>
            </header>
        </>
    )
})