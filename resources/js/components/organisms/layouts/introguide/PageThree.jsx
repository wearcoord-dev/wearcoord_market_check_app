import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import img from '../../../../../../public/img/others/intro/three.jpg'

const useStyles = makeStyles((theme) => ({
    img: {
        width: '250px',
    },
    root: {
        position: 'relative',
    },
    textbox: {
        position: 'absolute',
        top: '60%',
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

export const PageThree = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textbox}>
                <p className={classes.text}>左下の「着替える」からウェアを探しにいきます<br></br>(着替えたら右下の「ウェア確定」をタップ)</p>
            </div>
            <img className={classes.img} src={img} alt="" />
        </div>
    )
})