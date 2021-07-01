import { Backdrop, Button, Fade, makeStyles, Modal } from "@material-ui/core";
import { memo, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDeleteCoord } from "../../../hooks/mycoord/useDeleteCoord";

const useStyles = makeStyles((theme) => ({
    innerbox: {
        display: 'block',
        padding: '10px',
        textAlign: 'center',
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
    h2: {
        padding: '10px 0',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    img: {
        height: '200px',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        marginTop: '20px',
        width: '100%',
        padding: '10px 0',
        maxWidth: '300px',
        left: "50%",
        transform: "translateX(-50%)"
    },
}));


export const BtnLeft = memo((props) => {
    const classes = useStyles();
    const { text, icon, type, id, capsID, topsID, pantsID, shoesID, img } = props;

    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [openwear, setOpenWear] = useState(false);

    const { DeleteCoord } = useDeleteCoord();


    // const handleOpen = () => {
    //   setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseWear = () => {
        setOpenWear(false);
    };

    const toSelectWear = useCallback(() => history.push("/main/selectwear"));

    const onClickWear = () => {

        if (type == 'delete') {
            setOpen(true);
        }
        if (type == 'wear') {
            setOpenWear(true);
            console.log('試着です');
        }
    }

    const onClickDelete = () => {
        const data = {
            'id': id,
            // 'user': context.contextName.id,
            // 'type': type,
        };
        DeleteCoord(data);
    }

    return (
        <>
            <div className="btnDesign left" onClick={onClickWear}>
                <div className={classes.innerbox}>
                    {icon}
                    <p>{text}</p>
                </div>
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
                        <h2 className={classes.h2} id="transition-modal-title">このコーデを削除しますか？</h2>
                        <div className={classes.center}>
                            <img className={classes.img} src={img} alt="" />
                        </div>
                        <Button className={classes.btn} variant="contained" color="primary" onClick={onClickDelete}>
                            <DeleteForeverIcon style={{ paddingRight: "6px" }} />
                            削除する
                        </Button>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openwear}
                onClose={handleCloseWear}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openwear}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
        </>
    )
})