import { memo, useCallback, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { useRemoveInner } from "../../../hooks/selectwear/useRemoveInner";
import { OpenBtnLeft } from "../../atoms/button/OpenBtnLeft";
import { UserContext } from "../../providers/UserProvider";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useGetUserWear } from "../../../hooks/selectwear/useGetUserWear";
import CircularProgress from '@material-ui/core/CircularProgress';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    alert: {
        position: "absolute",
        top: "-16px",
        left: "50px",
        fontSize: "30px",
        color: "lightskyblue",
    },
    details: {
        position: "relative",
    }
});

export const OpenLeftBtn = memo(() => {
    const { RemoveInner } = useRemoveInner();
    const classes = useStyles();
    const history = useHistory();
    const context = useContext(UserContext);
    const user = context.contextName;
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();

    useEffect(() => {
        if (user !== undefined) {
            GetWear(context)
        }
    }, [user]);

    const removeInner = () => {
        RemoveInner(user);
    };

    const toSelectInner = useCallback(() => history.push("/main/selectinner"));
    const toSelectSocks = useCallback(() => history.push("/main/selectsocks"));
    const toShowSizeResult = useCallback(() => history.push("/main/settings/size/result"));
    const toRegisterSize = useCallback(() => history.push("/main/settings/size"));


    return (
        <>
            <div className="leftContainer">

                {user ? (
                    <>
                        {userWearInfo ? (
                            <>
                                {userWearInfo[1].topsData.isSizeTopsDB || userWearInfo[2].pantsData.isSizePantsDB ? (
                                    <>
                                        <div style={{ position: "relative" }}>
                                            <NotificationsIcon className={classes.alert} />
                                            <details className="btnDesign left" id="btnBand">
                                                <summary id="btnSummaryBand">
                                                    <i className="fas fa-ruler sideFontAwesome"></i>
                                                    <p className="btnText" id="btnTitleBand">Size</p>
                                                </summary>
                                                {user.sizecheck === null ? (
                                                    <div className="detailsBottom">
                                                        <div onClick={toRegisterSize} className="detailsBtn" id="innerRemoveBtn">
                                                            <button type="submit">
                                                                <CheckCircleOutlineIcon />
                                                                <p className="btnText">????????????????????????</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="detailsBottom">
                                                        <div onClick={toShowSizeResult} className="detailsBtn" id="innerRemoveBtn">
                                                            <button type="submit">
                                                                <CheckCircleOutlineIcon />
                                                                <p className="btnText">????????????</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </details>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <details className="btnDesign left" id="btnBand">
                                            <summary id="btnSummaryBand">
                                                <i className="fas fa-ruler sideFontAwesome"></i>
                                                <p className="btnText" id="btnTitleBand">Size</p>
                                            </summary>
                                            {user.sizecheck == null ? (
                                                <>
                                                    <div className="detailsBottom">
                                                        <div onClick={toRegisterSize} className="detailsBtn" id="innerRemoveBtn">
                                                            <button type="submit">
                                                                <CheckCircleOutlineIcon />
                                                                <p className="btnText">????????????????????????</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="detailsBottom">
                                                        <div className="detailsBtn" id="innerRemoveBtn">
                                                            <button type="submit">
                                                                <CheckCircleOutlineIcon />
                                                                <p className="btnText">???????????????????????????</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </details>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <details className="btnDesign left" id="btnBand">
                                    <summary id="btnSummaryBand">
                                        <i className="fas fa-ruler sideFontAwesome"></i>
                                        <p className="btnText" id="btnTitleBand">Size</p>
                                    </summary>
                                    <div className="detailsBottom">
                                        <div className="detailsBtn" id="innerRemoveBtn">
                                            <button type="submit">
                                                <CheckCircleOutlineIcon />
                                                <p className="btnText">????????????</p>
                                            </button>
                                        </div>
                                    </div>
                                </details>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <>
                            <details className="btnDesign left" id="btnBand">
                                <summary id="btnSummaryBand">
                                    <i className="fas fa-ruler sideFontAwesome"></i>
                                    <p className="btnText" id="btnTitleBand">Size</p>
                                </summary>
                                <div className="detailsBottom">
                                    <div className="detailsBtn" id="innerRemoveBtn">
                                        <button type="submit">
                                            <CheckCircleOutlineIcon />
                                            <p className="btnText">????????????</p>
                                        </button>
                                    </div>
                                </div>
                            </details>
                        </>
                    </>
                )}



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
                                <p className="btnText">?????????????????????</p>
                            </button>
                        </div>
                        <hr />
                        <div onClick={toSelectInner} className="detailsBtn">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    screen_search_desktop
                                </span>
                                <p className="btnText">??????</p>
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
                                <p className="btnText">?????????????????????</p>
                            </button>
                        </div>
                        <hr />
                        <div onClick={toSelectSocks} className="detailsBtn">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    screen_search_desktop
                                </span>
                                <p className="btnText">??????</p>
                                <input type="hidden" name="type" value="inner" />

                            </button>
                        </div>
                    </div>
                </details>

            </div>
        </>
    )
})