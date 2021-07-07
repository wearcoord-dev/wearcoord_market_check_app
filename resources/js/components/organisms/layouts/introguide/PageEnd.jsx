import { Button, makeStyles } from "@material-ui/core";
import { memo } from "react";
import img from '../../../../../../public/img/others/intro/end.png'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '250px',
    },
    root: {
        position: 'relative',
    },
    textbox: {
        // position: 'absolute',
        // top: '80%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        width: '50%',
        borderRadius: '10px',
        margin: 'auto',
    },
    text: {
        lineHeight: '1.4',
    },
    btn: {
        width: '100%',
        margin: '20px 0',
    }
}));

export const PageEnd = memo((props) => {
    const classes = useStyles();
    const { handleClose } = props;

    const onClose = () => {
        handleClose();
    }

    return (
        <div className={classes.root}>
            <img className={classes.img} src={img} alt="" />
            <div className={classes.textbox}>
                <p className={classes.text}>さっそくwearcoordでコーディネートを楽しんでみましょう！</p>
                <div>
                    <Button className={classes.btn} variant="outlined" color="primary"
                    endIcon={<EmojiPeopleIcon />
                    }
                    onClick={onClose}
                    >
                        wearcoordをはじめる
                    </Button>
                </div>
            </div>
        </div>
    )
})