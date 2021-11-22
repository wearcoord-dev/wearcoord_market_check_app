import { Backdrop, Fade, Button, makeStyles, Modal, CircularProgress } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import coordImg from "../../../../../../../public/img/firstcoord/1.png";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { AppContext } from "../../../../providers/UserWear";
import { useGetBDCoordList } from "../../../../../hooks/bestdresser/useGetBDCoordList";
import { BDLikeBtn } from "./BDLikeBtn";
import { ShowBrand } from "./ShowBrand";
import { useHistory } from "react-router";
import { useGetTourInfo } from "../../../../../hooks/bestdresser/useGetTourInfo";
import moment from 'moment';
import sleepImg from "../../../../../../../public/img/others/bestdresser/sleep.png";


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    ul: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& li": {
            width: "40%",
            maxWidth: "150px",
            margin: "20px auto",
            background: "linear-gradient(154.8deg, #E5E5E5 2.25%, rgba(255, 255, 255, 0.74) 43.24%, #E5E5E5 99.58%)",
            boxShadow: "0px 0px 30px 1px rgb(53 53 53 / 3%)",
            borderRadius: "20px",
            "& figure": {
                textAlign: "center",
                position: "relative",
                "& i": {
                    position: "absolute",
                    right: "0",
                    padding: "10px",
                },
                "& img": {
                    height: "200px",
                }
            }
        }
    },
    figcap: {
        backgroundColor: "white",
        borderRadius: "0 0 20px 20px",
        "& figcaption": {
            lineHeight: "2",
            fontWeight: "bold",
        }
    },
    title: {
        fontSize: "14px",
        textAlign: "center",
        color: "#216496",
        fontWeight: "bold",
        padding: "20px 0",
    },
    bottom: {
        height: "100px",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: "#f9f9f9",
        borderRadius: "20px",
        padding: "10px",
        boxSizing: "border-box",
        width: "90%",
        boxShadow: "0px 0px 30px 1px rgb(53 53 53 / 3%)",
        position: "relative",
        "& figure": {
            textAlign: "center",
            "& img": {
                height: "50vh",
            }
        }
    },
    btnbox: {
        display: "flex",
        justifyContent: "space-around",
    },
    like: {
        width: "30%",
        backgroundColor: "#216496",
        borderRadius: "999px",
        padding: "6px",
        boxSizing: "border-box",
    },
    detail: {
        width: "50%",
        backgroundColor: "#216496",
        borderRadius: "999px",
        padding: "6px",
        boxSizing: "border-box",
        fontWeight: "bold",
        color: "#f9f9f9",
    },
    close: {
        width: "50px",
        height: "50px",
        position: "absolute",
        right: "10px",
        top: "-20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#216496",
        borderRadius: "50%",
    },
    brandBox: {
        textAlign: "left",
        fontSize: "18px",
        lineHeight: "1.6",
        fontWeight: "bold",
        width: "70%",
        margin: "20px auto"
    },
    figure: {
        textAlign: "center",
        "& img": {
            width: "50%",
            maxWidth: "300px",
        }
    },
    contentBox: {
        "& p": {
            textAlign: "center",
            lineHeight: "1.6",
            fontWeight: "bold",
        }
    }
});

export const ShowBDCoordList = memo(() => {
    const classes = useStyles();
    const [openModal, setOpen] = useState(false);
    const context = useContext(AppContext);
    const userCheck = context.contextName;
    const { GetBDCoordList, userCoordList, loadingBDCoordList, errorBDCoordList } = useGetBDCoordList();
    const { GetTourInfo, userTourInfo, loadingTourInfo, errorTourInfo } = useGetTourInfo();
    const today = moment();
    const history = useHistory();


    // モーダルデータ
    const [modalImg, setModalImg] = useState();
    const [modalItem, setModalItem] = useState();

    // 投票期間前の管理
    const [notPost, setNotPost] = useState();

    // 大会の情報を取得
    useEffect(() => {
        if (userCheck !== undefined) {
            GetTourInfo(context)
        }
    }, [userCheck]);

    useEffect(() => {
        if (userTourInfo !== null) {
            // 投票期間であれば表示
            if (userTourInfo.startPostCoord < today.format()) {
                GetBDCoordList(context)
                // 投票期間外であればセット
                if (userTourInfo.endPostCoord < today.format()) {
                    setNotPost(2);
                }
            } else {
                setNotPost(1);
            }
        }
    }, [userTourInfo]);

    const handleClose = () => {
        setOpen(false);
    };

    const onClickInfo = (item, img) => {
        setOpen(true);
        // console.log(id, img)
        setModalImg(img);
        setModalItem(item);
    }

    const onClickEndInfo = (item, img) => {
        setOpen(true);
        // console.log(id, img)
        setModalImg(img);
        setModalItem(item);
    }

    const onClickLinkDetail = () => {
        history.push({
            pathname: "show/detail",
            search: "?id=" + modalItem.id
        });
    }

    const items = (
        <>
            {userCoordList && userTourInfo && (
                <>
                    {userTourInfo.endPostCoord < today.format() ? (
                        <>
                            {userCoordList.map((item, index) => (
                                <li key={index}>
                                    <figure>
                                        <div onClick={onClickEndInfo.bind(this, item, item.img)}>
                                            <img src={item.img} alt="" />
                                            <div className={classes.figcap}>
                                                <ShowBrand type={'tops'} id={item.tops} />
                                                <ShowBrand type={'pants'} id={item.pants} />
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            ))}
                        </>

                    ) : (
                        <>
                            {userCoordList.map((item, index) => (
                                <li key={index}>
                                    <figure>
                                        <BDLikeBtn item={item} userData={context} />
                                        <div onClick={onClickInfo.bind(this, item, item.img)}>
                                            <img src={item.img} alt="" />
                                            <div className={classes.figcap}>
                                                <ShowBrand type={'tops'} id={item.tops} />
                                                <ShowBrand type={'pants'} id={item.pants} />
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            ))}
                        </>
                    )}
                </>
            )}

            {notPost == 1 && (
                <>
                    <div className={classes.contentBox}>
                        <figure className={classes.figure}>
                            <img src={sleepImg} alt="" />
                        </figure>
                        <p>投票期間前です。</p>
                        <p>投票開始までしばらくお待ちください！</p>
                    </div>
                </>
            )}
        </>
    )

    return (
        <>
            <div>
                {/* <p className={classes.title}>今このコーデをいいね！しています</p>
                <ul className={classes.ul}>
                    <li onClick={onClickInfo}>
                        <figure>
                            <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "hotpink" }} /></i>
                            <img src={coordImg} alt="" />
                            <div className={classes.figcap}>
                                <figcaption>Tops : Adidas</figcaption>
                                <figcaption>Pants : FILA</figcaption>
                            </div>
                        </figure>
                    </li>
                </ul> */}

                <p className={classes.title}>参加中のすべてのコーデ</p>
                {notPost == 2 && (
                    <div className={classes.contentBox}>
                        <p>投票期間が終了しました！</p>
                        <p>結果発表をお楽しみに！</p>
                    </div>
                )}
                <ul className={classes.ul}>
                    {items}
                </ul>
                <div className={classes.bottom}></div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.item}>
                        <i className={classes.close} onClick={handleClose}><CloseRoundedIcon style={{ fontSize: "20px", color: "#f9f9f9" }} /></i>
                        <figure>
                            <img src={modalImg} alt="" />
                        </figure>
                        {modalItem ? (
                            <div className={classes.brandBox}>
                                <ShowBrand type={'caps'} id={modalItem.caps} />
                                <ShowBrand type={'tops'} id={modalItem.tops} />
                                <ShowBrand type={'pants'} id={modalItem.pants} />
                                <ShowBrand type={'shoes'} id={modalItem.shoes} />
                            </div>
                        ) :
                            (
                                <div className={classes.root}>
                                    <CircularProgress size={40} />
                                </div>
                            )}
                        <div div className={classes.btnbox}>
                            {userTourInfo && (
                                <>
                                    {userTourInfo.endPostCoord < today.format() ? (
                                        <>
                                        </>
                                    ) : (
                                        <>
                                            <button className={classes.like}>
                                                <BDLikeBtn item={modalItem} userData={context} />
                                            </button>
                                        </>
                                    )}
                                </>
                            )}
                            {modalItem && (
                                <button onClick={onClickLinkDetail} className={classes.detail}>コーデの詳細を見る</button>
                            )}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
})