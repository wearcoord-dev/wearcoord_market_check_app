import { memo, useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useGetItem } from "../../../hooks/mycoord/useGetItem";
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Fade, Modal } from "@material-ui/core";
import { UserContext } from "../../providers/UserProvider";
import { usePostItemToCart } from "../../../hooks/mycoord/usePostItemToCart";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import nofFindImg from '../../../../../public/img/others/itemDetail/notfindpng.png'

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
    img: {
        width: '40%',
        width: '200px',
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    notFindText: {
        padding: '10px',
        fontWeight: 'bold',
    }
}));

export const OpenBtn = memo((props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { name, icon, item, type } = props;
    const { GetItem, userItemInfo, loadingItem, errorItem } = useGetItem();
    const { PostItemToCart } = usePostItemToCart();
    const [htmltext, sethtmltext] = useState();
    const context = useContext(UserContext);


    const onClickInfo = () => {
        GetItem(type, item);
        setOpen(true);
    }

    const onClickCart = () => {
        const user = context.contextName;
        PostItemToCart(type, item, user);
    }

    useEffect(() => {
        if (userItemInfo) {
            sethtmltext(userItemInfo[0].moshimoLink);
        }
    }, [userItemInfo])


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <details className="btnDesign right" id={"btn" + name} >
                    <summary id={"btnSummary" + name}>
                        {icon}
                        <p className="btnText" id={"btnTitle" + name}>{name}</p>
                    </summary>
                    {item !== null ? (
                        <>
                            <div className="detailsBottom">
                                <div className="detailsBtn">
                                    <button onClick={onClickCart} type="button">
                                        <span className="material-icons-outlined">
                                            shopping_cart
                                        </span>
                                        <p className="btnText">カートに入れる</p>
                                        <input type="hidden" name="type" value={name} />
                                    </button>
                                </div>
                                <hr />
                                <div className="detailsBtn2" >
                                    <button onClick={onClickInfo} className="searchBtn" type="button">
                                        <span className="material-icons-outlined">
                                            screen_search_desktop
                                        </span>
                                        <p className="btnText">情報を見る</p>
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="detailsBtn">
                            <p><RemoveCircleIcon fontSize={"large"} /></p>
                            <p>No Data</p>
                            </div>
                        </>
                    )}

                </details>
            </div>
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
                        {userItemInfo ? (
                            <>
                            {userItemInfo[0].availability ? (
                                <div dangerouslySetInnerHTML={{ __html: htmltext }}></div>
                            ) : (
                                <div className={classes.div}>
                                    <img className={classes.img} src={nofFindImg} alt="" />
                                    <p className={classes.notFindText}>こちらのアイテムは取り扱いを終了しました</p>
                                </div>
                            )}
                            </>
                        ) : <div></div>}
                    </div>
                </Fade>
            </Modal>
        </>
    )
})