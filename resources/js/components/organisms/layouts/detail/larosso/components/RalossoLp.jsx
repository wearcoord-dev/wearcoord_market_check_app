import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import ralossoimg from "../../../../../../../../public/img/others/article/ralosso_logo.png"
import wcimg from "../../../../../../../../public/img/logo/216496-long.png"

const useStyles = makeStyles({
    root: {
        color: "#364A5C",
        lineHeight: "1.2",
        backgroundColor: "#fff",
    },
    toptitle_wrap: {
        padding: "30px 0",
        textAlign: "center",
        backgroundColor: "#216496",
        color: "#fff",

        "& h2": {
            fontSize: "28px",
            paddingBottom: "10px",
        }
    },
    imgbox: {
        display: "flex",
        justifyContent: "space-around",
        width: "90%",
        margin: "auto",
        padding: "50px 0",

        "& img": {
            width: "40%",
            objectFit: "contain",
            maxWidth: "250px",
        }
    },
    text_wrap: {
        width: "90%",
        margin: "auto",
        padding: "50px 0",
    }
});

export const RalossoLp = memo(() => {
    const classes = useStyles();

    return (
        <>
            <section className={classes.root}>
                <div className={classes.toptitle_wrap}>
                    <h2>wearcoord × ralosso</h2>
                    <p>wearcoordとralossoが提携、スポーツウェアの新しい世界へ</p>
                </div>

                <div className={classes.text_wrap}>
                    <p>コーディネートアプリのwearcoordを運営する株式会社wearcoordは、スポーツアパレルブランドralosso（ラロッソ）と公式提携します。</p>
                    <div className={classes.imgbox}>
                        <img src={ralossoimg} alt="" />
                        <img src={wcimg} alt="" />
                    </div>
                    <p style={{ paddingTop: "50px" }}>これからの続報をお楽しみに！</p>
                </div>

            </section>
        </>
    )
})