import { memo, useCallback, useContext } from "react";
import { useHistory } from "react-router";
import { useRemoveInner } from "../../../hooks/selectwear/useRemoveInner";
import { OpenBtnLeft } from "../../atoms/button/OpenBtnLeft";
import { UserContext } from "../../providers/UserProvider";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
    const toSelectSocks = useCallback(() => history.push("/main/selectsocks"));
    const toShowSizeResult = useCallback(() => history.push("/main/settings/size/result"));

    return (
        <>
            <div className="leftContainer">

                <details className="btnDesign left" id="btnBand">
                    <summary id="btnSummaryBand">
                        <i className="fas fa-ruler sideFontAwesome"></i>
                        <p className="btnText" id="btnTitleBand">Size</p>
                    </summary>
                    <div className="detailsBottom">
                        <div onClick={toShowSizeResult} className="detailsBtn" id="innerRemoveBtn">
                            <button type="submit">
                                <CheckCircleOutlineIcon />
                                <p className="btnText">確認する</p>
                            </button>
                        </div>
                    </div>
                </details>

                <details className="btnDesign left" id="btnInner">
                    <summary id="btnSummaryInner">
                        <i className="fas fa-tshirt sideFontAwesome"></i>
                        <p className="btnText" id="btnTitleInner">Inner</p>
                    </summary>
                    <div className="detailsBottom">
                        <div onClick={removeInner} className="detailsBtn" id="innerRemoveBtn">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    accessibility
                                </span>
                                <p className="btnText">インナーを脱ぐ</p>
                            </button>
                        </div>
                        <hr />
                        <div onClick={toSelectInner} className="detailsBtn">
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

                <details className="btnDesign left" id="btnSocks" >
                    <summary id="btnSummarySocks">
                        <i className="fas fa-socks sideFontAwesome"></i>
                        <p className="btnText" id="btnTitleSocks">Socks</p>
                    </summary>
                    <div className="detailsBottom">
                        <div onClick={removeInner} className="detailsBtn" id="innerRemoveBtn">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    accessibility
                                </span>
                                <p className="btnText">ソックスを脱ぐ</p>
                            </button>
                        </div>
                        <hr />
                        <div onClick={toSelectSocks} className="detailsBtn">
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

            </div>
        </>
    )
})