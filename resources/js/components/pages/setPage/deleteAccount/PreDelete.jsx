import { Backdrop, Button, Fade, makeStyles, Modal } from "@material-ui/core";
import axios from "axios";
import { memo, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import taskimg from "../../../../../../public/img/others/delete/task.png";
import buildimg from "../../../../../../public/img/others/delete/build.png";
import doorimg from "../../../../../../public/img/others/delete/door.png";
import { UserContext } from "../../../providers/UserProvider";

const useStyles = makeStyles({
    info: {
        width: "90%",
        margin: " 10px auto",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        borderRadius: "20px",
        lineHeight: "1.2",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        padding: "20px",
    },
    ul: {
        padding: "10px 0",
        // display: "flex",
        width: "90%",
        margin: "auto",
    },
    li: {
        width: "80%",
        backgroundColor: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        margin: "30px auto",
        borderRadius: "30px",
        boxShadow: "0px 0px 12px rgb(72 72 72 / 25%)",
        position: "relative",
        textAlign: "center",
        maxWidth: "400px",

        "& img": {
            width: "50%",
        }
    },
    bottom: {
        paddingBottom: "70px",
    },
    root: {
        lineHeight: "1.2",
        textAlign: "center",
        paddingBottom: "50px",
    },
    item: {
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "30px 0",
        boxSizing: "border-box",
        width: "90%",
        // textAlign: "center",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",

        "& img": {
            width: "50%",
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checktext: {
        fontSize: "20px",
        fontWeight: "bold",
    }
});

export const PreDelete = memo(() => {
    const history = useHistory();
    const classes = useStyles();
    const [openModal, setOpen] = useState(false);
    const context = useContext(UserContext);
    const user = context.contextName;


        // モーダル
        const onClickModal = () => {
            setOpen(true);
        }

        const handleClose = () => {
            setOpen(false);
        };

        const onClickDelete = () => {

            const header = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            }

            const setData = {
                id: user.id,
            }

            const url = '/api/deleteaccount';

            axios.post(url, setData, header).then(() => {
                    window.location.href = "/";
                })
                .catch((error) => {
                    console.error(error);
                });
        }


    return (
        <>
            <section className={classes.root}>
                <p className={classes.info}>現在ログインしているアカウントを削除して、wearcoordのアプリから退会します。以下の項目をご確認した上で退会へ進んで下さい。</p>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <p>wearcoordで作成したアカウントを削除すると、これまで作ったコーデやカートに入れたアイテムリストも全て消去されます</p>
                        <img src={taskimg} alt="" />
                    </li>
                    <li className={classes.li}>
                        <p>wearcoordのサービスをもう一度利用する時は、再度アカウントの作成が必要となります。</p>
                        <img src={buildimg} alt="" />
                    </li>
                </ul>

                <Button style={{ width: "80%", padding: "10px", maxWidth: "250px", backgroundColor: "#0080E4", color: "#fff" }} variant="contained" onClick={onClickModal}>
                    以上に同意してwearcoordを退会する
                </Button>
            </section>
            <div className={classes.bottom}></div>

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
                        <p className={classes.checktext}>本当に退会しますか？</p>
                        <img src={doorimg} alt="" />
                        <Button style={{
                            backgroundColor: "#0080E4", width:
                                "200px", padding: "10px 0", color: "#fff", marginTop: "10px"
                        }} variant="contained" onClick={onClickDelete}>
                            退会する
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </>
    )
})