import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import { HowToUseBD } from "./common/HowToUseBD";
import PlayerImg from "../../../../../../public/img/lp/2021/player_male.png"

const useStyles = makeStyles({
    root: {
        padding: "10px 0",
        backgroundColor: "#fcfcfc",
        borderRadius: "20px",
        width: "96%",
        margin: "auto",
        boxShadow: "0px 0px 30px 1px rgb(53 53 53 / 3%)",
    },
    container: {
        width: "90%",
        margin: "auto",
        paddingBottom: "50px",
    },
    title: {
        color: "#216496",
        fontSize: "18px",
        textAlign: "center",
        lineHeight: "1.4",
        padding: "10px 0 40px",
        "& p": {
            fontWeight: "bold",
        }
    },
    mainText: {
        textAlign: "center",
        lineHeight: "1.6",
        "& span": {
            display: "inline-block",
        }
    },
    figureImg: {
        width: "50%",
        margin: "auto",
        maxWidth: "120px",
        padding: "20px 0",
        "& img": {
            width: "100%",
        }
}
});

export const ChainCup2021 = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <p>ChainCup2021</p>
                        <p>12/30 大阪大会</p>
                    </div>
                    <div className={classes.mainText}>
                        <p>ベストドレッサー賞開催！</p>
                        <p style={{ paddingTop: "20px" }}><span>「コーデを作って」</span><span>「コーデに投票して」</span></p>
                        <p style={{ paddingBottom: "20px" }}>ベストドレッサー賞に参加しましょう！</p>
                        <p>見事ベストドレッサーに選ばれると、</p>
                        <p>オシャレウェアを手に入れられます。</p>
                    </div>
                    <figure className={classes.figureImg}>
                        <img src={PlayerImg} alt="" />
                    </figure>
                </div>
                <HowToUseBD />
            </div>
        </>
    )
})