import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import post1Img from "../../../../../../../public/img/others/bestdresser/ref/post1.png"
import post2Img from "../../../../../../../public/img/others/bestdresser/ref/post2.png"
import post3Img from "../../../../../../../public/img/others/bestdresser/ref/post3.png"
import post4Img from "../../../../../../../public/img/others/bestdresser/ref/post4.png"
import vote1Img from "../../../../../../../public/img/others/bestdresser/ref/vote1.png"
import vote2Img from "../../../../../../../public/img/others/bestdresser/ref/vote2.png"
import vote3Img from "../../../../../../../public/img/others/bestdresser/ref/vote3.png"
import vote4Img from "../../../../../../../public/img/others/bestdresser/ref/vote4.png"
import check1Img from "../../../../../../../public/img/others/bestdresser/ref/check1.png"

const useStyles = makeStyles({
    root: {
    },
    summary: {
        fontSize: "18px",
        color: "white",
        fontWeight: "bold",
        // border: "2px solid #216496",
        borderRadius: "10px",
        width: "80%",
        margin: "auto",
        display: "list-item",
        backgroundColor: "#216496",
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
    number: {
        display: "inline-block",
        backgroundColor: "#216496",
        color: "white",
        width: "24px",
        textAlign: "center",
        fontWeight: "bold",
        height: "24px",
        borderRadius: "4px",
        lineHeight: "2",
    },
    descSectUl: {
        "& li": {
            padding: "30px 0",
            width: "90%",
            margin: "auto",
            "& p": {
                lineHeight: "1.6",
            }
        }
    },
    descTitleBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center",
        "& h4": {
            fontSize: "16px",
            lineHeight: "1.4",
            color: "#216496",
            width: "80%",
            fontWeight: "bold",
        }
    },
    figureImg: {
        width: "80%",
        margin: "auto",
        padding: "30px 0",
        textAlign: "center",
        "& img": {
            width: "100%",
            maxWidth: "300px",
        }
    },
    details: {
        padding: "20px 0",
        maxWidth: "700px",
        margin: "auto",
    }
});

export const HowToUseBD = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.title}>
                    <p>アプリの使い方</p>
                </div>

                <details className={classes.details}>
                    <summary className={classes.summary}>コーデを投稿しよう</summary>
                    <div className={classes.detailsContent}>
                        {/* コーデを投稿しよう */}
                        <ul className={classes.descSectUl}>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>1</span>
                                    <h4>トップページで参加しているベストドレッサー賞の情報を見よう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={post1Img} alt="" />
                                </figure>
                                <p>トップページには参加しているベストドレッサー賞の情報を確認できます。投稿期間内であれば、コーデ作成可能です。</p>
                            </li>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>2</span>
                                    <h4>「コーデを作る」を選びウェアのコーディネートを作成しよう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={post2Img} alt="" />
                                </figure>
                                <p>上の青いタブにある「コーデを作る」を選択すると、コーディネートを作成できるページに移動します。</p>
                                <p style={{ paddingTop: "20px" }}>ページ内にある「マネキンを変更」を選択するとコーデを着せるマネキンを変更できます。</p>
                                <p>「着替える」を選択するとウェアを選択できます。</p>
                                <figure className={classes.figureImg}>
                                    <img src={post3Img} alt="" />
                                </figure>
                                <p>キャップス、トップス、パンツ、シューズのカテゴリそれぞれから、気に入ったウェアを探しましょう。</p>
                                <p>下部のリストから条件を選ぶと、マネキン上にウェアが表示されます。</p>
                                <p style={{ padding: "20px 0" }}>ウェアをマネキン上に乗せているものがあなたのコーデです！</p>
                                <p>コーデが決まったら「確定」を選択しましょう。</p>
                            </li>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>3</span>
                                    <h4>コーディネートを投稿しよう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={post4Img} alt="" />
                                </figure>
                                <p>「コーデを投稿する」を選択すると、あなたのコーデ画像が表示されます。</p>
                                <p>これで問題なければ「投稿する」を選択して投稿しましょう！</p>
                                <p style={{ padding: "20px 0" }}>これであなたのコーデは投稿完了です！</p>
                                <p>なお投稿したコーデは、他の参加者から「いいね！」されるまで修正可能です。参加者の皆さんから選ばれるようなコーデを目指しましょう！</p>
                            </li>
                        </ul>
                    </div>
                </details>

                <details className={classes.details}>
                    <summary className={classes.summary}>コーデに投票しよう</summary>
                    <div className={classes.detailsContent}>
                        {/* コーデに投票しよう */}
                        <ul className={classes.descSectUl}>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>1</span>
                                    <h4>トップページで参加しているベストドレッサー賞の情報を見よう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={post1Img} alt="" />
                                </figure>
                                <p>トップページには参加しているベストドレッサー賞の情報を確認できます。投票期間内であればコーデ投票可能です。</p>
                            </li>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>2</span>
                                    <h4>2. 「コーデを見る」を選び、他の参加者のコーデを見よう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={vote1Img} alt="" />
                                </figure>
                                <p>上の青いタブにある「コーデを見る」を選択すると、他の参加者が作成したコーデの一覧ページに移ります。</p>
                                <figure className={classes.figureImg} style={{ display: "flex" }}>
                                    <img style={{ width: "50%" }} src={vote2Img} alt="" />
                                    <img style={{ width: "50%" }} src={vote3Img} alt="" />
                                </figure>
                                <p>コーデをタップすると画像を拡大したり、着ているウェアのブランドを確認できます。</p>
                                <p style={{ paddingTop: "20px" }}>「コーデの詳細を見る」を選択すると、そのコーデが着ているウェアを自分のマネキンに着せたり、ECページに移動して購入もできます。</p>
                            </li>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>3</span>
                                    <h4>他の参加者のコーデに「いいね！」しよう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={vote4Img} alt="" />
                                </figure>
                                <p>お気に入りのコーデが見つかったら、ハートマークの箇所を選択して「いいね！」しましょう！</p>
                                <p>赤くなっているハートのコーデが、現在あなたが「いいね！」しているコーデです。</p>
                                <p style={{ padding: "20px 0" }}>ベストドレッサー賞では、参加者一人につき一つのコーデに対して「いいね！」が可能です。</p>
                                <p>なお投票期間内であれば他のコーデに「いいね！」し直すことができます。良いなと思うコーデが見つかったら、どんどん「いいね！」しましょう！</p>
                            </li>
                        </ul>
                    </div>
                </details>
                <details className={classes.details}>
                    <summary className={classes.summary}>受賞資格を確認しよう</summary>
                    <div className={classes.detailsContent}>
                        {/* コーデを投稿しよう */}
                        <ul className={classes.descSectUl}>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>1</span>
                                    <h4>トップページで参加しているベストドレッサー賞の情報を見よう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={post1Img} alt="" />
                                </figure>
                                <p>トップページには参加しているベストドレッサー賞の情報を確認できます。「コーデ未投稿」「コーデ未投票」とあれば、まだあなたは投稿や投票を完了していません。</p>
                            </li>
                            <li>
                                <div className={classes.descTitleBox}><span className={classes.number}>2</span>
                                    <h4>コーデを作成し、投票を完了しよう！</h4></div>
                                <figure className={classes.figureImg}>
                                    <img src={check1Img} alt="" />
                                </figure>
                                <p>「コーデ投稿済み！」「コーデ投票済み！」とあれば、「ベストドレッサー賞の受賞資格を取得済み！」と表示されます。</p>
                                <p style={{ paddingTop: "20px" }}>これでベストドレッサー賞の受賞資格を獲得しました！</p>
                                <p>結果をお楽しみに！</p>
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
        </>
    )
})