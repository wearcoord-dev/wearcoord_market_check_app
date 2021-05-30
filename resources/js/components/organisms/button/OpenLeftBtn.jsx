import { memo, useCallback, useContext } from "react";
import { useHistory } from "react-router";
import { useRemoveInner } from "../../../hooks/selectwear/useRemoveInner";
import { OpenBtnLeft } from "../../atoms/button/OpenBtnLeft";
import { UserContext } from "../../providers/UserProvider";

export const OpenLeftBtn = memo(() => {
    const { RemoveInner } = useRemoveInner();
    const history = useHistory();
    const context = useContext(UserContext);
    // console.log("表示してるぞお！！")
    // console.log(context.contextName);
    const user = context.contextName;

    const removeInner = () => {
        RemoveInner(user);
    };

    const toSelectInner = useCallback(() => history.push("/main/selectinner"));

    return (
        <>
            <div className="leftContainer">

                <details className="btnDesign left" id="btnBand">
                    <summary>
                        <span className="material-icons-outlined">
                            circle
            </span>
                        <p className="btnText" id="btnTitleBand">Band</p>
                    </summary>
                    <div className="detailsBottom">
                        <a href="" className="detailsBtn">
                            <p className="btnText">準備中</p>
                        </a>
                    </div>
                </details>

                <details className="btnDesign left" id="btnInner">
                    <summary>
                        <i className="fas fa-tshirt sideFontAwesome"></i>
                        <p className="btnText" id="btnTitleInner">Inner</p>
                    </summary>
                    <div className="detailsBottom">
                        <div onClick={removeInner} className="detailsBtn" id="innerRemoveBtn" method="post">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    accessibility
                    </span>
                                <p className="btnText">インナーを脱ぐ</p>
                                <input type="hidden" name="innerUrl" value="mannequin_done3.png" />
                                <input type="hidden" name="innerUrl" value="manekin_female_10001000.png" />
                            </button>
                        </div>
                        <hr />
                        <div onClick={toSelectInner} className="detailsBtn" method="get">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    screen_search_desktop
                </span>
                                <p className="btnText">選ぶ</p>
                                <input type="hidden" name="type" value="inner" />

                            </button>
                        </div>
                    </div>
                </details>

                <OpenBtnLeft name={'Socks'} icon={<i className="fas fa-socks sideFontAwesome"></i>} />
            </div>
        </>
    )
})