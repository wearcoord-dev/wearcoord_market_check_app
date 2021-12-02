import { memo, useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ColumnSize from "../../../../../../public/img/lp/2021/size.jpg"



const useStyles = makeStyles({
    root: {

    },
    ul: {
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "0 0 10px 0",
        margin: "0 0 20px 0",
    },
    li: {
        display: "inline-block",
        width: "80%",
        maxWidth: "300px",
        margin: "0 20px",
        borderRadius: "20px",
        boxShadow: "0px 0px 30px 1px rgb(53 53 53 / 3%)",

        "& a":{
            "& img":{
                width: "100%",
                borderRadius: "20px",
            }
        }
    },
    h2title: {
        // borderBottom: "1px solid #484848",
        paddingBottom: "2px",
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "16px",
    },
    h2parrent: {
        width: "90%",
        margin: "auto",
        padding: "30px 0",
    },
});

export const ColumnList = memo(() => {
    const classes = useStyles();

    return (
        <>
        <div>
            <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>wearcoordコラム</h2>
            </div>
            <div>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <a href="column/size">
                            <img src={ColumnSize} alt="" />
                        </a>
                    </li>
                    {/* <li className={classes.li}>
                        <a href="">
                            <img src={ColumnSize} alt="" />
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
        </>
    )
})