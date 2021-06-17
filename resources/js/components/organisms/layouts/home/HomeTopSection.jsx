import { memo } from "react";
import banner1 from "/img/banner/lalosso-banner.png";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
    },
    wrapper: {
        width: "80%",
        margin: "auto",
        padding: "20px 0",
        display: "block",
    },
    img: {
        width: "100%",
        borderRadius: "20px",
    },
    h2title: {
        borderBottom: "1px solid #484848",
        paddingBottom: "2px",
        display: "inline-block",
    },
    h2parrent: {
        width: "90%",
        margin: "auto",
    }
});


export const HomeTopSection = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>最新ラロッソウェア特集</h2>
            </div>
            <div>
                <a className={classes.wrapper}>
                    <img className={classes.img} src={banner1} alt="" />
                </a>
            </div>
        </>
    )
})