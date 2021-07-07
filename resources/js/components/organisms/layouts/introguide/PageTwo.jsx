import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import img from '../../../../../../public/img/others/intro/two.jpg'

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

export const PageTwo = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textbox}>
                <p className={classes.text}>メニューバーの「Myコーデ」よりウェアを選んでコーディネートするページへ飛びます<br></br>(マネキンの顔を変更したい場合は右上の歯車よりアップロード)</p>
            </div>
            <img className={classes.img} src={img} alt="" />
        </div>
    )
})