import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import tenezImg from "../../../../../../../../public/img/others/article/tenez/tenez_img.jpg"
import whiteWear from "../../../../../../../../public/img/lp/tenez/game_shirt_white.jpg"
import redWear from "../../../../../../../../public/img/lp/tenez/_MG_1083.png"

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

        "& img": {
            // width: "40%",
            objectFit: "contain",
            maxWidth: "250px",
        }
    },
    text_wrap: {
        width: "90%",
        margin: "auto",
        padding: "50px 0",
        lineHeight: 1.6,
        maxWidth: "1000px",
    },
    mb: {
        marginBottom: "20px",
    },
    smallTitle: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        color: "#216496",
        padding: "40px 0",
    },
    btn: {
        backgroundColor: "#216496",
        color: "white",
        padding: "8px 0px",
        display: "inline-block",
        borderRadius: "999px",
        width: "100%",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold",
        maxWidth: "300px",
    },
    tac: {
        textAlign: "center",
        margin: "50px 0",
    },
    tenezImg2: {
        height: "250px",
        width: "100%",
        objectFit: "cover",
        objectPosition: "bottom",
        maxWidth: "800px",
        "@media (min-width:1000px)": {
            height: "400px",
            width: "40%",
        },
    }
});

export const TenezLp = memo(() => {
    const classes = useStyles();

    return (
        <>
            <section className={classes.root}>
                <div className={classes.toptitle_wrap}>
                    <h2>wearcoord ?? 10EZ</h2>
                    <p>10EZ????????????????????????3D???????????????????????????????????????</p>
                </div>

                <figure style={{ textAlign: "center" }}>
                    <img style={{ height: "250px", width: "100%", objectFit: "cover", objectPosition: "top", maxWidth: "800px" }} src={tenezImg} alt="" />
                </figure>

                <div className={classes.text_wrap}>
                    <h3 className={classes.smallTitle}>about</h3>
                    <p className={classes.mb}>?????????????????????????????????????????????????????????????????????????????????????????????????????????10EZ????????????????????????3D?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                    <p className={classes.mb}>2021???11????????????????????????????????????????????????????????????10EZ????????????????????????????????????????????????????????????????????????????????????<br></br>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>

                    <figure style={{ textAlign: "center", padding: "50px 0" }}>
                        <img className={classes.tenezImg2} src={tenezImg} alt="" />
                    </figure>

                    <h3 className={classes.smallTitle}>???????????????????????????</h3>
                    <p className={classes.mb}>???????????????????????????????????????????????????????????????????????????3D????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                    <p className={classes.mb}>??????????????????????????????????????????????????????????????????????????????????????????3D????????????????????????????????????????????????????????????10EZ?????????????????????????????????</p>

                    <ul>
                        <li>
                            <h4 className={classes.smallTitle}>POLO WHT</h4>
                            <hr />
                            <div className={classes.imgbox}>
                                <img src={whiteWear} alt="" />
                            </div>

                            <div style={{ height: "400px" }}>
                                <iframe width={"100%"} height={"100%"} title="test_ten004" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e6db9b4ff95a4085bb4e76e567e4b841/embed"> </iframe>
                            </div>

                            <div className={classes.tac}>
                                <a className={classes.btn} href="https://10ezapparel.stores.jp/items/61420590a1027561a0e6c9ad" target="_brank">????????????????????????</a>
                            </div>
                        </li>
                        <li>
                            <h4 className={classes.smallTitle}>Game Wear 1.0</h4>
                            <hr />
                            <div className={classes.imgbox}>
                                <img src={redWear} alt="" />
                            </div>

                            <div style={{ height: "400px" }}>
                                <iframe width={"100%"} height={"100%"} title="test_ten001" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/94aeeb7c7b01446cbe09b7b6c0d0fd1a/embed"> </iframe>
                            </div>

                            <div className={classes.tac}>
                                <a className={classes.btn} href="https://10ezapparel.stores.jp/items/60ca9a19103986664d8c5682" target="_brank">????????????????????????</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    )
})