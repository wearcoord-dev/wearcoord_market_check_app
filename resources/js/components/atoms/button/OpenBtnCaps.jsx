import { memo, useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useRemoveCaps } from "../../../hooks/selectwear/useRemoveCaps";
import { UserContext } from "../../providers/UserProvider";
import { useGetItem } from "../../../hooks/mycoord/useGetItem";
import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";
import { usePostItemToCart } from "../../../hooks/mycoord/usePostItemToCart";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const OpenBtnCaps = memo((props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { name, icon, item, type } = props;
    const { RemoveCaps } = useRemoveCaps();
    const context = useContext(UserContext);
    const user = context.contextName;
    const { GetItem, userItemInfo, loadingItem, errorItem } = useGetItem();
    const [htmltext, sethtmltext] = useState();
    const { PostItemToCart } = usePostItemToCart();

    useEffect(() => {
        if (userItemInfo) {

            // capがあったら取得
            if (userItemInfo[0]) {
                sethtmltext(userItemInfo[0].moshimoLink);
            }
        }
    }, [userItemInfo])

    const removeCaps = () => {
        RemoveCaps(user);
    };

    const history = useHistory();

    const onClickInfo = () => {
        GetItem(type, item);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const onClickCart = () => {
        const user = context.contextName;
        if(item){
            PostItemToCart(type, item, user);
        }else{
            alert('capsがありません');
        }
    }

    return (
        <>
            <div>
                <details className="btnDesign right" id={"btn" + name} >
                    <summary id={"btnSummary" + name}>
                        {icon}
                        <p className="btnText" id={"btnTitle" + name}>{name}</p>
                    </summary>
                    <div className="detailsBottom">
                        <div onClick={removeCaps} className="detailsBtn" id="innerRemoveBtn" method="post">
                            <button type="submit">
                                <DeleteOutlineIcon style={{ fontSize: 20 }} />
                                <p className="btnText">Capsを脱ぐ</p>
                            </button>
                        </div>
                        <hr />
                        <div className="detailsBtn" >
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
                            <button onClick={onClickInfo} className="searchBtn" type="submit">
                                <span className="material-icons-outlined">
                                    screen_search_desktop
                </span>
                                <p className="btnText">情報を見る</p>
                            </button>
                        </div>
                    </div>
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
                                {userItemInfo[0] ? (
                                    <>
                                        <p>{userItemInfo[0].brand}</p>
                                        <div dangerouslySetInnerHTML={{ __html: htmltext }}></div>
                                    </>
                                ) : <p>ウェアがありません</p>}
                            </>
                        ) : <div></div>}
                    </div>
                </Fade>
            </Modal>
        </>
    )
})