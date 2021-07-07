import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import img from '../../../../../../public/img/others/intro/six.png'

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

export const PageSix = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textbox}>
                <p className={classes.text}>上記のように購入リンク先への画面が表示されます</p>
            </div>
            <img className={classes.img} src={img} alt="" />
        </div>
    )
})