import { Backdrop, CircularProgress, Fade, makeStyles, Modal } from "@material-ui/core";
import axios from "axios";
import { memo, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useSWR from "swr";
import { ShowBrand } from "../../base/showcoord/ShowBrand";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    container: {
        width: "90%",
        margin: "auto",
        paddingBottom: "50px",
    },
    title: {
        color: "#216496",
        fontSize: "18px",
        textAlign: "center",
        lineHeight: "1.4",
        padding: "10px 0 40px",
        "& p": {
            fontWeight: "bold",
        }
    },
    mainText: {
        textAlign: "center",
        lineHeight: "1.6",
        "& span": {
            display: "inline-block",
        }
    },
    ul: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1000px",
        margin: "auto",
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
    brandBox: {
        textAlign: "left",
        fontSize: "18px",
        lineHeight: "1.6",
        fontWeight: "bold",
        width: "70%",
        margin: "20px auto"
    },
    btnbox: {
        display: "flex",
        justifyContent: "space-around",
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
    featureText: {
        fontSize: "14px",
        lineHeight: "1.6",
        textAlign: "center",
        "& p": {
            fontWeight: "bold",
        }
    },
    figcap: {
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: "0 0 20px 20px",
        padding: "16px 0",
        lineHeight: "2",
        fontWeight: "bold",
    },
});

export const ResultBD = memo((props) => {
    const { coord_id } = props;
    const classes = useStyles();
    const [openModalUserCoord, setOpenUserCoord] = useState(false);
    const history = useHistory();



    // モーダルデータ
    const [modalImg, setModalImg] = useState();
    const [modalItem, setModalItem] = useState();

    const onClickUserCoord = (item, img) => {
        setOpenUserCoord(true);
        setModalImg(img);
        setModalItem(item);
    }

    const onClickLinkDetail = () => {
        history.push({
            pathname: "main/show/detail",
            search: "?id=" + modalItem.id
        });
    }

    const handleCloseUserCoord = () => {
        setOpenUserCoord(false);
    };

    const fetcher = url => axios.get(url, {
        params: {
            coord_id: coord_id,
        }
    }).then(res => res.data);
    const { data, error } = useSWR('/bestdresser/resultCoord', fetcher);

    return (
        <>
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>結果発表</p>
                </div>
                <div className={classes.featureText}>
                    <p>今大会で最も多くの票を集めたコーデはこちら！</p>
                    <p>おめでとうございます！</p>
                </div>
                {data ? (error ? <>
                    <div className={classes.loading}>
                        <CircularProgress size={40} />
                    </div>
                </> : <>
                    {data && (
                        <>
                            <ul className={classes.ul}>
                                <li>
                                    <figure>
                                        <div onClick={onClickUserCoord.bind(this, data, data.img)}>
                                            <img src={data.img} alt="" />
                                            <figcaption className={classes.figcap}>
                                                    <ZoomInIcon style={{ fontSize:  "24px" }} />
                                            </figcaption>
                                        </div>
                                    </figure>
                                </li>
                            </ul>
                        </>
                    )}
                </>) :
                    <>
                    </>
                }
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModalUserCoord}
                onClose={handleCloseUserCoord}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModalUserCoord}>
                    <div className={classes.item}>
                        <i className={classes.close} onClick={handleCloseUserCoord}><CloseRoundedIcon style={{ fontSize: "20px", color: "#f9f9f9" }} /></i>
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