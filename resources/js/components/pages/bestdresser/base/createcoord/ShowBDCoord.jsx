import { memo, useCallback, useContext, useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import { Button, Fade, makeStyles, Modal } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useHistory } from "react-router-dom";
import { useGetUserWear } from "../../../../../hooks/selectwear/useGetUserWear";
import { useRegisterCoord } from "../../../../../hooks/mycoord/useRegisterCoord";
import { AppContext } from "../../../../providers/UserWear";


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
        bottom: "0",
        display: "flex",
        width: "40%",
        height: "60px",
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
    bottomBtnLeft: {
        left: "0",
        display: "flex",
        width: "40%",
        height: "60px",
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
    },
    bottom: {
        height: "100px",
    }
}));


export const ShowBDCoord = memo(() => {
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const [mannequinUrl, setUrl] = useState(null);
    const { RegisterCoord } = useRegisterCoord();
    const history = useHistory();


    const context = useContext(AppContext);
    const userCheck = context.contextName;
    // console.log(userCheck);

    const toSelectWear = useCallback(() => history.push("create/coord"));

    useEffect(() => {
        if (userCheck !== undefined) {
            // console.log('useEffectが実行されました')
            GetWear(context)
        }
    }, [userCheck]);


    useEffect(() => {
        if (userWearInfo) {

            const url = { backgroundImage: 'url( ../../../img/mannequin/' + userWearInfo.mannequin + ')' }
            setUrl(url);
        }
    }, [userWearInfo]);

    // console.log(mannequinUrl);
    // console.log(`ここが${userWearInfo}だぞ！`);

    const classes = useStyles();
    const [open, setOpen] = useState(false);

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
        // console.log("OK");
        RegisterCoord(props, context);
    }


    return (
        <>
            {userWearInfo ? (errorWear ? (
                <p>error</p>
            ) : loadingWear ? (
                <p>loading</p>
            ) : (
                <div className="centerContainer" id="centerContainer">
                    <div className="clickCover" onClick={toSelectWear} ></div>
                    {mannequinUrl ? (<div id="mannequinImgCanvas" className="mannequinImg" style={{
                        'backgroundImage': mannequinUrl.backgroundImage,
                        maxWidth: '200px',
                    }}>

                        <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} src={userCheck.faceImg} alt="" /></div>

                        <div style={{ display: "flex" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // capsdataがnullなら代替
                                <>
                                    {userWearInfo[0] ? <div style={{ textAlign: "center", margin: "auto", height: "50px" }}>
                                        <img style={{ width: "60px", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`} alt="" />
                                    </div> : <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // topsdataがnullなら代替
                                <>
                                    {userWearInfo[1] ? <div style={{ textAlign: "center", margin: "auto", height: "115px", marginTop: "16px" }}>
                                        <img style={{ width: "125px", height: "125px", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // pantsdataがnullなら代替
                                <>
                                    {userWearInfo[2] ? <div style={{ textAlign: "center", margin: "auto", height: "140px" }}>
                                        <img style={{ width: "90%", height: "170px", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[2].pantsData.category}/${userWearInfo[2].pantsData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "170px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // shoesdataがnullなら代替
                                <>
                                    {userWearInfo[3] ? <div style={{ textAlign: "center", margin: "auto" }}>
                                        <img style={{ width: "100px", height: "100px" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[3].shoesData.category}/${userWearInfo[3].shoesData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                    </div>) : <p>ng</p>}

                </div>
            )) : <div style={{ width: "40%", height: "50vh" }}></div>}
            <div><input type="hidden" id="mannequinImgCanvas" name="canvas_img" value=""></input></div>

            <div className={classes.btnBox}>
                <div onClick={toSelectWear} className={classes.bottomBtnLeft}>
                    <div className={classes.searchBtn}>
                        <AddBoxIcon style={{ color: '#f0f0f0', fontSize: 20 }} />
                        <p className="btnText">マネキンを変更</p>
                    </div>
                </div>
                <div onClick={toSelectWear} className={classes.bottomBtnLeft}>
                    <div className={classes.searchBtn}>
                        <AddBoxIcon style={{ color: '#f0f0f0', fontSize: 20 }} />
                        <p className="btnText">着替える</p>
                    </div>
                </div>

                <div onClick={handleOpen} className={classes.bottomBtnRight}>
                    <div className={classes.searchBtn}>
                        <AddBoxIcon style={{ color: '#f0f0f0', fontSize: 20 }} />
                        <p className="btnText">コーデを投稿する</p>
                    </div>
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

                            <button style={{
                                backgroundColor: "#0080E4", width:
                                    "200px", padding: "10px 0", color: "#fff", marginTop: "10px", borderRadius: "4px"
                            }} type="button" onClick={registerCoord}>投稿する</button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    )
})