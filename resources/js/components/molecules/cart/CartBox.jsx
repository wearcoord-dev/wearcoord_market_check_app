import { Backdrop, Button, Card, Fade, IconButton, Modal } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { useGetCartItem } from "../../../hooks/cart/useGetCartItem";
import { UserContext } from "../../providers/UserProvider";
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDeleteCartItem } from "../../../hooks/cart/useDeleteCartItem";


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: "10px auto",
        maxWidth: "300px",
    },
    cardwrap: {
        margin: "70px 0",
    },
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
    btn: {
        marginTop: '20px',
        width: '100%',
        padding: '10px 0',
        maxWidth: '300px',
        left: "50%",
        transform: "translateX(-50%)"
    },
    h2: {
        padding: '10px 0',
        textAlign: 'center',
        fontWeight: 'bold',
    }
}));

export const CartBox = memo((props) => {
    const { type } = props;
    const { GetCartItem, userItemCartInfo } = useGetCartItem();
    const context = useContext(UserContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [getid, setGetid] = useState('');
    const [getHtml, setGetHtml] = useState('');
    const { DeleteCartItem } = useDeleteCartItem();

    const handleOpen = (id, html) => {
        setOpen(true);
        setGetid(id);
        setGetHtml(html);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClickDelete = () => {
        const data = {
            'id': getid,
            'user': context.contextName.id,
            'type': type,
        };
        DeleteCartItem(data);
    }

    useEffect(() => {
        if (context.contextName) {
            const user = context.contextName;
            // console.log(user);
            GetCartItem(type, user);
        }
    }, [context])


    return (
        <>
            <div className={classes.cardwrap}>
                {userItemCartInfo ? (
                    <>
                        {userItemCartInfo.map((item) => (
                            <div key={item.id} style={{ display: "flex", maxWidth: "400px", margin: "auto" }}>
                                <Card className={classes.root}>
                                    <div style={{ display: "flex", justifyContent: "center" }} dangerouslySetInnerHTML={{ __html: item.moshimoLink }}></div>
                                </Card>
                                <IconButton color="secondary" aria-label="add an delete" onClick={handleOpen.bind(this, item.id, item.moshimoLink)}>
                                    <DeleteForeverIcon fontSize="large" />
                                </IconButton>
                            </div>
                        ))}
                    </>
                ) : <p>ありません</p>}
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
                        <h2 className={classes.h2} id="transition-modal-title">このアイテムをカートから削除しますか？</h2>
                        <div style={{ display: "flex", justifyContent: "center" }} dangerouslySetInnerHTML={{ __html: getHtml }}></div>
                        <Button className={classes.btn} variant="contained" color="primary" onClick={onClickDelete}>
                            <DeleteForeverIcon style={{ paddingRight: "6px" }} />
                            削除する
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </>
    )
})