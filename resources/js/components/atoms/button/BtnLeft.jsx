import { Backdrop, Button, Fade, makeStyles, Modal } from "@material-ui/core";
import { memo, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDeleteCoord } from "../../../hooks/mycoord/useDeleteCoord";
import { useCopyCoord } from "../../../hooks/mycoord/useCopyCoord";

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
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "10px",
        boxSizing: "border-box",
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
}));


export const BtnLeft = memo((props) => {
    const classes = useStyles();
    const { text, icon, type, id, capsID, topsID, pantsID, shoesID, img, userid, mannequin } = props;

    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [openwear, setOpenWear] = useState(false);

    const { DeleteCoord } = useDeleteCoord();
    const { CopyCoord } = useCopyCoord();


    // const handleOpen = () => {
    //   setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseWear = () => {
        setOpenWear(false);
    };

    // const toSelectWear = useCallback(() => history.push("/main/selectwear"));

    const onClickWear = () => {

        if (type == 'delete') {
            setOpen(true);
        }
        if (type == 'wear') {
            setOpenWear(true);
        }
    }

    const onClickDelete = () => {
        const data = {
            'id': id,
        };
        DeleteCoord(data);
    }

    const onClickCopy = () => {
        const data = {
            'id': id,
            'userid': userid,
            'caps': capsID,
            'tops': topsID,
            'pants': pantsID,
            'shoes': shoesID,
            'mannequin': mannequin,
        };
        CopyCoord(data);
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
                        <h2 className={classes.h2} id="transition-modal-title">???????????????????????????????????????</h2>
                        <div className={classes.center}>
                            <img className={classes.img} src={img} alt="" />
                        </div>
                        <Button style={{
                            left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width:
                                "200px", padding: "10px 0", color: "#fff", marginTop: "10px"
                        }} variant="contained" onClick={onClickDelete}>
                            {icon}
                            ????????????
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
                    <h2 className={classes.h2} id="transition-modal-title">???????????????????????????????????????</h2>
                        <div className={classes.center}>
                            <img className={classes.img} src={img} alt="" />
                        </div>
                        <Button style={{
                            left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width:
                                "200px", padding: "10px 0", color: "#fff", marginTop: "10px"
                        }} variant="contained" onClick={onClickCopy}>
                            {icon}
                            ??????
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </>
    )
})