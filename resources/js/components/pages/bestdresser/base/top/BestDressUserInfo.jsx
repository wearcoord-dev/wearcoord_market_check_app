import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import maleImg from "../../../../../../../public/img/lp/2021/player_male.png";
import selectImg from "../../../../../../../public/img/others/bestdresser/select.png"


const useStyles = makeStyles(() => ({
    li: {
        display: "flex",
        width: "90%",
        margin: "10px auto",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        alignItems: "center",
        padding: "10px",
        boxSizing: "border-box",
        justifyContent: "center",
        "& figure": {
            width: "20%",
            textAlign: "center",
            "& img": {
                width: "70%",
            }
        },
        "& i": {
            textAlign: "center",
            width: "10%",
        }
    },
    ul: {
    },
    textArea: {
        textAlign: "center",
    },
    boldblue: {
        fontWeight: "bold",
        fontSize: "12px",
        color: "#216496",
        paddingBottom: "6px",
        textAlign: "center",
    },
    mainbluetext: {
        padding: "10px 0",
        fontSize: "12px",
        color: "#216496",
        textAlign: "center",
        "& span": {
            fontWeight: "bold",
            borderBottom: "1px dotted",
        }
    },
    root: {
        padding: "10px 0",
        backgroundColor: "white",
        borderRadius: "0 0 20px 20px",
        width: "100%",
        margin: "auto",
        boxShadow: "0px 0px 30px 1px rgb(53 53 53 / 3%)",
    },
    datebox: {
        display: "flex",
        justifyContent: "space-around",
        "& div": {
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            padding: "10px 0",
            boxSizing: "border-box",
            width: "30%",
            textAlign: "center",
            "& span": {
                color: "indianred",
                fontWeight: "bold",
            }
        }
    }
}));

export const BestDressUserInfo = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <figure>
                            <img src={maleImg} alt="" />
                        </figure>
                        <div className={classes.textArea}>
                            <p className={classes.boldblue}>コーデ未投稿</p>
                            <p>「コーデを作る」からコーデを作りましょう！</p>
                        </div>
                        <i>
                            <ErrorOutlineRoundedIcon />
                        </i>
                    </li>
                    <li className={classes.li}>
                        <figure>
                            <img src={selectImg} alt="" />
                        </figure>
                        <div className={classes.textArea}>
                            <p className={classes.boldblue}>コーデ未投票</p>
                            <p>「コーデを見る」からコーデに投票しましょう！</p>
                        </div>
                        <i>
                            <ErrorOutlineRoundedIcon />
                        </i>
                    </li>
                </ul>
                <p className={classes.mainbluetext}><span>ベストドレッサー賞の受賞資格がまだありません！</span></p>
                <div className={classes.datebox}>
                    <div>
                        <p className={classes.boldblue}>投稿期間</p>
                        <p><span>12/1</span>〜<span>12/30</span></p>
                    </div>
                    <div>
                        <p className={classes.boldblue}>投票期間</p>
                        <p><span>12/20</span>〜<span>12/30</span></p>
                    </div>
                    <div>
                        <p className={classes.boldblue}>結果発表</p>
                        <p><span>大会当日！</span></p>
                    </div>
                </div>
            </div>
        </>
    )
})