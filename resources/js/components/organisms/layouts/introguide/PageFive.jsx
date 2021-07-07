import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import img from '../../../../../../public/img/others/intro/five.jpg'

const useStyles = makeStyles((theme) => ({
    img: {
        width: '250px',
    },
    root: {
        position: 'relative',
    },
    textbox: {
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        width: '50%',
        borderRadius: '10px',
    },
    text: {
        lineHeight: '1.4',
    }
}));

export const PageFive = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textbox}>
                <p className={classes.text}>着せたウェアは「カート追加」または「情報を見る」から購入が可能です</p>
            </div>
            <img className={classes.img} src={img} alt="" />
        </div>
    )
})