import { Backdrop, Button, Fade, Grid, makeStyles, Modal, Snackbar } from "@material-ui/core";
import { memo, useContext, useState } from "react";
import img1 from "../../../../../../public/img/others/size/DrawKit-Fashion-Illustration-01.svg";
import img2 from "../../../../../../public/img/others/size/character 5.svg";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetSizeWear } from "../../../../hooks/size/useGetSizeWear";
import { UserContext } from "../../../providers/UserProvider";
import CircularProgress from '@material-ui/core/CircularProgress';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { constant } from "lodash";
import { useRegisterSizeFromWear } from "../../../../hooks/size/useRegisterSizeFromWear";
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    info: {
        width: "90%",
        margin: " 10px auto",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        borderRadius: "20px",
        lineHeight: "1.2",
        boxShadow: "0px 0px 30px 1px rgba(153, 99, 99, 0.03)",
        padding: "20px",
        maxWidth: "600px",
    },
    formbox: {
        overflow: "hidden",
        width: "50%",
        margin: "1em auto",
        textAlign: "center",
        position: "relative",
        border: "1px solid #bbbbbb",
        borderRadius: "2px",
        background: "#ffffff",
        "& select": {
            width: "100%",
            paddingRight: "1em",
            cursor: "pointer",
            textIndent: "0.01px",
            textOverflow: "ellipsis",
            border: "none",
            outline: "none",
            background: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            appearance: "none",
            padding: "8px 38px 8px 8px",
            color: "#666666",
        },
        '&::before': {
            position: "absolute",
            top: "0.8em",
            right: "0.9em",
            width: "0",
            height: "0",
            padding: "0",
            content: "''",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #666666",
            pointerEvents: "none",
        },
    },
    title: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formwrap: {
        display: "flex",
        width: "90%",
        margin: "auto",
    },
    form: {
        width: "90%",
        margin: "auto",
        backgroundColor: "#ffffff",
        padding: "10px 0",
        boxSizing: "border - box",
        borderRadius: "20px",
        boxShadow: "0px 0px 30px 1px rgba(153, 99, 99, 0.03)",
        maxWidth: "600px",
    },
    searchinput: {
        textAlign: "center",
        display: "block",
        margin: "auto",
        fontSize: "14px",
        width: "50%",
        backgroundColor: "#ddd",
        borderRadius: "999px",
        padding: "4px 0",
    },
    root: {
        flexGrow: 1,
        paddingBottom: '150px',
        marginTop: '20px',
    },
    paper: {
        textAlign: 'center',
        maxWidth: '30%',
        margin: '4px !important',
        justifyContent: 'center',
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        borderRadius: '10px',
        position: 'relative',
        maxWidth: "150px",
    },
    first: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
    },
    modalbox: {
        width: '90%',
        margin: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        padding: '20px 0',
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        maxWidth: "300px",
    },
    imgbox: {
        width: '60%',
        margin: 'auto',
        padding: '20px 0',
    }

});

export const RegisterFromWearPants = memo(() => {
    const classes = useStyles();
    const history = useHistory();
    const context = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { GetUserSizeWear, userSizeWear, loadingUserSizeWear, errorUserSizeWear } = useGetSizeWear();
    const userCheck = context.contextName;
    const [openModal, setOpenModal] = useState(false);
    const [wearInfo, setWearInfo] = useState();
    const { RegisterSizeFromWear } = useRegisterSizeFromWear();

    // ???????????????????????????????????????
    const onClickInfo = (props) => {
        setWearInfo(props);
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    };


    const items = (
        <>
            {userSizeWear ? (loadingUserSizeWear ? (
                <>
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                </>
            ) : (<>
                <div className={classes.root}>
                    <Grid style={{ justifyContent: 'center', width: '100%', margin: '0', maxWidth: "700px", margin: "auto" }} container spacing={1}>

                        {userSizeWear.map((item) => (
                            <Grid className={classes.paper} key={item.db.id} container item xs={12} spacing={3} onClick={onClickInfo.bind(this, item)}>
                                <button>
                                    <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${item.category}/${item.url}`} alt="" />
                                </button>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </>)
            ) : (
                <>
                    <div className={classes.first}>??????????????????????????????????????????</div>
                </>
            )}
        </>
    )

    const onSubmit = data => {
        GetUserSizeWear(data, userCheck.gender);
    }

    const onClickWearItem = (props) => {
        const type = 'pants';
        RegisterSizeFromWear(props, userCheck, type);
        setOpen(true);

        // 3????????????????????????????????????
        setTimeout(function () {
            // history.push('/main/mycoord'); ?????????context?????????????????????
            window.location.href = "/main/mycoord";
        }, 3000);
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <p className={classes.info}>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>

            {/* ??????????????? */}
            { userCheck && (
            userCheck.gender == 'male' ? (
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
                        <div className={classes.formwrap}>
                            <p className={classes.title}>???????????? :</p>
                            <div className={classes.formbox}>
                                <select {...register("brand")}>
                                    <option value="nike">Nike</option>
                                    <option value="hydrogen">Hydrogen</option>
                                    <option value="lacoste">Lacoste</option>
                                    <option value="lecoq">lecoq</option>
                                    <option value="babolat">Babolat</option>
                                    <option value="ellesse">ellesse</option>
                                    <option value="fila">FILA</option>
                                    <option value="asics">Asics</option>
                                    <option value="marc_de_paw">Marc De Paw</option>
                                    <option value="10EZ">10EZ</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.formwrap}>
                            <p className={classes.title}>????????? :</p>
                            <div className={classes.formbox}>
                                <select {...register("size")}>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                </select>
                            </div>
                        </div>
                        <input type="hidden" {...register("type")} value="pants" />
                        <input className={classes.searchinput} type="submit" value="??????????????????" />
                    </form>
                </>
            ) : (

                // ???????????????
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
                        <div className={classes.formwrap}>
                            <p className={classes.title}>???????????? :</p>
                            <div className={classes.formbox}>
                                <select {...register("brand")}>
                                    <option value="yonex">Yonex</option>
                                    <option value="diadora">Diadora</option>
                                    <option value="babolat">Babolat</option>
                                    <option value="hydrogen">Hydrogen</option>
                                    <option value="lecoq">lecoq</option>
                                    <option value="prince">Prince</option>
                                    <option value="fila">FILA</option>
                                    <option value="ralosso">ralosso</option>
                                    {userCheck.id == 47 ? <option value="admiral">Admiral</option> : null}
                                </select>
                            </div>
                        </div>
                        <div className={classes.formwrap}>
                            <p className={classes.title}>????????? :</p>
                            <div className={classes.formbox}>
                                <select {...register("size")}>
                                    <option value="ss">SS</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="ll">LL</option>
                                </select>
                            </div>
                        </div>
                        <input type="hidden" {...register("type")} value="pants" />
                        <input className={classes.searchinput} type="submit" value="??????????????????" />
                    </form>
                </>
            ))}

            {items}

            <div style={{ marginBottom: "100px" }}></div>

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
                        {wearInfo ? (
                            <>
                                <div className={classes.modalbox}>
                                    <div className={classes.imgbox}>
                                        <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wearInfo.category}/${wearInfo.url}`} alt="" />
                                    </div>
                                    <Button style={{
                                        left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width:
                                            "200px", padding: "10px 0", color: "#fff", marginTop: "10px"
                                    }} variant="contained" onClick={onClickWearItem.bind(this, wearInfo)}>
                                        <AccessibilityNewIcon style={{ paddingRight: "6px" }} />
                                        ????????????????????????
                                    </Button>
                                </div>
                            </>
                        ) : <div></div>}
                    </div>
                </Fade>
            </Modal>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                    ????????????????????????????????????????????????????????????
                </Alert>
            </Snackbar>
        </>
    )
})