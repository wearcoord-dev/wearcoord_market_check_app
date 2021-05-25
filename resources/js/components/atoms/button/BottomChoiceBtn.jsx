import { memo, useCallback } from "react"
import { useHistory } from "react-router";

export const BottomChoiceBtn = memo(() => {
    const history = useHistory();

    const toSelectWear =useCallback(() => history.push("/main/selectwear") );

    return (
        <>
            <div onClick={toSelectWear} className="bottomLeftBtn" method="get">
                <div className="searchBtn">
                    <span className="material-icons-outlined">
                        screen_search_desktop
                </span>
                    <p className="btnText">ウェアを選ぶ</p>
                </div>
            </div>
        </>
    )
})