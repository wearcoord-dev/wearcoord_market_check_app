import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import img from '../../../../../../public/img/others/intro/one.jpg'

const useStyles = makeStyles((theme) => ({
    img: {
        width: '250px',
    },
    root: {
        position: 'relative',
    },
    textbox: {
        position: 'absolute',
        top: '50%',
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

export const PageOne = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textbox}>
                <p className={classes.text}>wearcoordへようこそ！<br></br>ここでは欲しいウェア・気になるウェアを自分の顔に合わせてオンラインで試着ができます！</p>
            </div>
            <img className={classes.img} src={img} alt="" />
        </div>
    )
})