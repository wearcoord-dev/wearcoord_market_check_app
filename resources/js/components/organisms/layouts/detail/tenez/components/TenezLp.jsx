import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import ralossoimg from "../../../../../../../../public/img/others/article/ralosso_logo.png"
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
    }
});

export const TenezLp = memo(() => {
    const classes = useStyles();

    return (
        <>
            <section className={classes.root}>
                <div className={classes.toptitle_wrap}>
                    <h2>wearcoord × 10EZ</h2>
                    <p>10EZのテニスウェアが3Dで触れるようになりました！</p>
                </div>

                <div className={classes.text_wrap}>
                    <h3 className={classes.smallTitle}>about</h3>
                    <p className={classes.mb}>テニスの歴史にインスパイアされた、プレーヤーのためのオシャレを追求する10EZのテニスウェアが3Dモデルになって登場。よりリアルに素材感やイメージを把握できるようになりました。</p>
                    <p className={classes.mb}>2021年11月にポップアップストアを銀座で開いていた10EZですが、これからはメインをネットショップにするとのこと。<br></br>ブランドを展開するのは、ツアーをまわる現役のテニスプレーヤーとしても活躍する冨田兄弟。そんな彼らだからこそ考えるテニスウェアの快適さが追求されたブランドです。</p>
                    <h3 className={classes.smallTitle}>手軽に細部まで確認</h3>
                    <p className={classes.mb}>画像の平置きでしかイメージが分からなかったものが、3Dモデルでは手に取るように自由に動かせます。ズームすることで生地がどんな素材なのかもわかりやすくなります。</p>
                    <p className={classes.mb}>気になってはいたけど現物を見る機会がなかったという方は、ぜひ3Dモデルを触ってみてよりリアルな体験に近い10EZを触れてみてください。</p>

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
                                <a className={classes.btn} href="https://10ezapparel.stores.jp/items/61420590a1027561a0e6c9ad" target="_brank">このウェアを買う</a>
                            </div>
                        </li>
                        <li>
                            <h4 className={classes.smallTitle}>Game Wear 1.0</h4>
                            <hr />
                            <div className={classes.imgbox}>
                                <img src={redWear} alt="" />
                            </div>

                            <div style={{ height: "400px" }}>
                                <iframe width={"100%"} height={"100%"}  title="test_ten001" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/94aeeb7c7b01446cbe09b7b6c0d0fd1a/embed"> </iframe>
                            </div>

                            <div className={classes.tac}>
                                <a className={classes.btn} href="https://10ezapparel.stores.jp/items/60ca9a19103986664d8c5682" target="_brank">このウェアを買う</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    )
})