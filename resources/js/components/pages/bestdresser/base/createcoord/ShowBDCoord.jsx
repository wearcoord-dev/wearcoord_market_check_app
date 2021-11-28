import { memo, useCallback, useContext, useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import { Button, Fade, makeStyles, Modal } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useHistory } from "react-router-dom";
import { useGetUserWear } from "../../../../../hooks/selectwear/useGetUserWear";
import { useRegisterCoord } from "../../../../../hooks/mycoord/useRegisterCoord";
import { AppContext } from "../../../../providers/UserWear";
import { useGetBDUserInfo } from "../../../../../hooks/bestdresser/useGetBDUserInfo";
import { useGetBDUserWear } from "../../../../../hooks/bestdresser/useGetBDUserWear";
import { useRegisterBDCoord } from "../../../../../hooks/bestdresser/useRegisterBDCoord";
import { useGetOwnLike } from "../../../../../hooks/bestdresser/useGetOwnLike";
import { useGetTourInfo } from "../../../../../hooks/bestdresser/useGetTourInfo";
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "10px",
        boxSizing: "border-box",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    bottomBtnRight: {
        position: "absolute",
        right: "0",
        bottom: "80px",
        display: "flex",
        width: "40%",
        height: "40px",
        minWidth: "150px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#216496",
        color: "#f0f0f0",
        lineHeight: "1.5",
        borderRadius: "10px 0px 0px 10px",
        "& p": {
            fontWeight: "bold",
            paddingLeft: "10px",
        }
    },
    bottomBtnRightNot: {
        position: "absolute",
        right: "0",
        bottom: "80px",
        display: "flex",
        width: "40%",
        height: "40px",
        minWidth: "150px",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#216496",
        color: "#216496",
        lineHeight: "1.5",
        borderRadius: "10px 0px 0px 10px",
        border: "2px solid #216496",
        borderRight: "none",
        "& p": {
            fontWeight: "bold",
            paddingLeft: "10px",
        }
    },
    bottomBtnLeft: {
        position: "absolute",
        left: "0",
        display: "flex",
        width: "40%",
        height: "40px",
        minWidth: "150px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#216496",
        color: "#f0f0f0",
        lineHeight: "1.5",
        borderRadius: "0px 10px 10px 0px",
        margin: "16px 0 0 0",
        "& p": {
            fontWeight: "bold",
            paddingLeft: "10px",
        }
    },
    searchBtn: {
        display: "flex",
        alignItems: "center",
    },
    btnBox: {
        position: "relative",
        // height: "100%",
    },
    bottom: {
        height: "100px",
    },
    btnWrapper: {
        position: "fixed",
        bottom: "0",
        width: "100%",
    },
    bold: {
        fontWeight: "bold",
        padding: "20px",
        boxSizing: "border-box",
        lineHeight: "1.6",
    }
}));


export const ShowBDCoord = memo(() => {
    const { GetBDUserWear, userBDWear, loadingBDUserWear, errorBDUserWear } = useGetBDUserWear();
    const [mannequinUrl, setUrl] = useState(null);
    const { RegisterCoord } = useRegisterBDCoord();
    const history = useHistory();
    const { GetOwnLike, userOwnLike, loadingOwnLike, errorOwnLike } = useGetOwnLike();
    const { GetTourInfo, userTourInfo, loadingTourInfo, errorTourInfo } = useGetTourInfo();
    const today = moment();

    const context = useContext(AppContext);
    const userCheck = context.contextName;

    const toSelectWear = () => {
        history.push({
            pathname: 'create/coord',
            state: { from: 'wear' }
        });
    }

    const toSelectInner = () => {
        history.push({
            pathname: 'create/coord',
            state: { from: 'inner' }
        });
    }

    // 最初にユーザーの選んでいるウェアを取得

    useEffect(() => {
        if (userCheck !== undefined) {
            GetBDUserWear(context)
            GetOwnLike(context)
            GetTourInfo(context)
        }
    }, [userCheck]);

    // ユーザーの選んでいるマネキンを表示

    useEffect(() => {
        if (userBDWear) {

            const url = { backgroundImage: 'url( ../../../img/mannequin/' + userBDWear.mannequin + ')' }
            setUrl(url);
        }
    }, [userBDWear]);

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    // HTMLから画像を生成

    const handleOpen = () => {
        html2canvas(document.querySelector("#centerContainer"), { backgroundColor: null }).then(function (canvas) {
            // document.body.appendChild(canvas);
            document.getElementById('canvas_img_url').setAttribute("value", canvas.toDataURL());
            document.getElementById('canvas_img_test').setAttribute("src", canvas.toDataURL());
        });

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const registerCoord = (props) => {
        RegisterCoord(props, context);
    }

    return (
        <>
            {userBDWear ? (errorBDUserWear ? (
                <p>error</p>
            ) : loadingBDUserWear ? (
                <p>loading</p>
            ) : (
                <div className="centerContainer" id="centerContainer">
                    {/* <div className="clickCover" onClick={toSelectWear} ></div> */}
                    {mannequinUrl ? (<div id="mannequinImgCanvas" className="mannequinImg" style={{
                        'backgroundImage': mannequinUrl.backgroundImage,
                        maxWidth: '200px',
                    }}>

                        <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} src={userCheck.faceImg} alt="" /></div>

                        <div style={{ display: "flex" }}>
                            {userBDWear ? (errorBDUserWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingBDUserWear ? (
                                <p>Loading...</p>
                            ) : (

                                // capsdataがnullなら代替
                                <>
                                    {userBDWear[0] ? <div style={{ textAlign: "center", margin: "auto", height: "50px" }}>
                                        <img style={{ width: "60px", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[0].capsData.category}/${userBDWear[0].capsData.url}`} alt="" />
                                    </div> : <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex" }}>
                            {userBDWear ? (errorBDUserWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingBDUserWear ? (
                                <p>Loading...</p>
                            ) : (

                                // topsdataがnullなら代替
                                <>
                                    {userBDWear[1] ? <div style={{ textAlign: "center", margin: "auto", height: "115px", marginTop: "16px" }}>
                                        <img style={{ width: "125px", height: "125px", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[1].topsData.category}/${userBDWear[1].topsData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex" }}>
                            {userBDWear ? (errorBDUserWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingBDUserWear ? (
                                <p>Loading...</p>
                            ) : (

                                // pantsdataがnullなら代替
                                <>
                                    {userBDWear[2] ? <div style={{ textAlign: "center", margin: "auto", height: "140px" }}>
                                        <img style={{ width: "90%", height: "170px", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[2].pantsData.category}/${userBDWear[2].pantsData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "170px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {userBDWear ? (errorBDUserWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingBDUserWear ? (
                                <p>Loading...</p>
                            ) : (

                                // shoesdataがnullなら代替
                                <>
                                    {userBDWear[3] ? <div style={{ textAlign: "center", margin: "auto" }}>
                                        <img style={{ width: "100px", height: "100px" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[3].shoesData.category}/${userBDWear[3].shoesData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                    </div>) : <p>ng</p>}

                </div>
            )) : <div style={{ width: "40%", height: "50vh" }}></div>}

            <div className={classes.btnWrapper}>
                <div className={classes.btnBox}>
                    <div onClick={toSelectInner} className={classes.bottomBtnLeft} style={{ bottom: "140px" }}>
                        <div className={classes.searchBtn}>
                            <AddBoxIcon style={{ color: '#f0f0f0', fontSize: 20 }} />
                            <p className="btnText">マネキンを変更</p>
                        </div>
                    </div>
                    <div onClick={toSelectWear} className={classes.bottomBtnLeft} style={{ bottom: "80px" }}>
                        <div className={classes.searchBtn}>
                            <AddBoxIcon style={{ color: '#f0f0f0', fontSize: 20 }} />
                            <p className="btnText">着替える</p>
                        </div>
                    </div>

                    {!loadingOwnLike && userTourInfo && (
                        // いいねされている場合
                        userOwnLike == true ? (
                            <>
                                <div onClick={handleOpen} className={classes.bottomBtnRightNot}>
                                    <div className={classes.searchBtn}>
                                        <AddBoxIcon style={{ color: '#216496', fontSize: 20 }} />
                                        <p className="btnText">いいねされています</p>
                                    </div>
                                </div>
                            </>
                        ) : userTourInfo.endCreateCoord < today.format('YYYY-MM-DD HH:mm:ss') ? (
                            // 投稿期間が終了した場合
                            <>
                                <div onClick={handleOpen} className={classes.bottomBtnRightNot}>
                                    <div className={classes.searchBtn}>
                                        <AddBoxIcon style={{ color: '#216496', fontSize: 20 }} />
                                        <p className="btnText">投稿期間が終了しました</p>
                                    </div>
                                </div>
                            </>
                        ) : userTourInfo.startCreateCoord > today.format('YYYY-MM-DD HH:mm:ss') ? (
                            // 投稿期間前の場合
                            <>
                                <div onClick={handleOpen} className={classes.bottomBtnRightNot}>
                                    <div className={classes.searchBtn}>
                                        <AddBoxIcon style={{ color: '#216496', fontSize: 20 }} />
                                        <p className="btnText">投稿期間前です</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div onClick={handleOpen} className={classes.bottomBtnRight}>
                                    <div className={classes.searchBtn}>
                                        <AddBoxIcon style={{ color: '#f0f0f0', fontSize: 20 }} />
                                        <p className="btnText">コーデを投稿する</p>
                                    </div>
                                </div>
                            </>
                        ))}

                </div>
            </div>

            <div className={classes.bottom}></div>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form className={classes.form}>
                            <img style={{ height: "200px", objectFit: "contain" }} id="canvas_img_test" src="" alt="" />
                            <input type="hidden" id="canvas_img_url" value=""></input>
                            <input type="hidden" name="userId" value={userCheck}></input>

                            {!loadingOwnLike && userTourInfo && (
                                // いいねされている場合
                                userOwnLike == true ? (
                                    <>
                                        <p className={classes.bold}>あなたのコーデは他の参加者から「いいね！」されているため変更できません。結果をお楽しみ！</p>
                                    </>
                                ) : userTourInfo.endCreateCoord < today.format('YYYY-MM-DD HH:mm:ss') ? (
                                    <>
                                        <p className={classes.bold}>コーデ投稿期間が過ぎたため投稿できません。</p>
                                    </>
                                ) : userTourInfo.startCreateCoord > today.format('YYYY-MM-DD HH:mm:ss') ? (
                                    <>
                                        <p className={classes.bold}>投稿期間前です。しばらくお待ちください！</p>

                                    </>
                                ) : (
                                    <>
                                        <button style={{
                                            backgroundColor: "#216496", width:
                                                "200px", padding: "10px 0", color: "#fff", marginTop: "10px", borderRadius: "4px"
                                        }} type="button" onClick={registerCoord}>投稿する</button>
                                    </>
                                ))}

                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    )
})