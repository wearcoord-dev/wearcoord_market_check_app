import { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";


export const OpenBtn = memo((props) => {
    const { name, icon } = props;

    const history = useHistory();

    const toSelectWear =useCallback(() => history.push("/main/selectwear") );

    return (
        <>
            <div>
                <details className="btnDesign right" id={"btn" + name} >
                    <summary>
                        {icon}
                        <p className="btnText" id={"btnTitle" + name}>{name}</p>
                    </summary>
                    <div className="detailsBottom">
                        <form action="/main/home" className="detailsBtn" method="get">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    shopping_cart
                </span>
                                <p className="btnText">買う</p>
                                <input type="hidden" name="type" value={name} />
                            </button>

                        </form>
                        <hr />
                        <div onClick={toSelectWear} className="detailsBtn2" method="get">
                            <button className="searchBtn" type="submit">
                                <input type="hidden" name="type" value="caps" />
                                <span className="material-icons-outlined">
                                    screen_search_desktop
                </span>
                                <p className="btnText">選ぶ</p>
                            </button>
                        </div>
                    </div>
                </details>
            </div>
        </>
    )
})