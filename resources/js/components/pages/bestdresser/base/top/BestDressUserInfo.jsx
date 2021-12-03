import { makeStyles } from "@material-ui/core";
import { memo, useEffect, useState } from "react";
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import maleImg from "../../../../../../../public/img/lp/2021/player_male.png";
import selectImg from "../../../../../../../public/img/others/bestdresser/select.png"
import axios from "axios";
import moment from 'moment';
import useSWR from 'swr';

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
        maxWidth: "1000px",
    },
    datebox: {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px auto",
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
                lineHeight: "1.6",
            }
        }
    }
}));

export const BestDressUserInfo = memo((props) => {
    const { tour_id, user_id } = props;
    const classes = useStyles();

    moment().format('YYYY-MM-DD HH:mm:ss.SSS');

    const [tourInfo, setTourInfo] = useState();
    const [startCreateCoord, setStartCreateCoord] = useState();
    const [endCreateCoord, setEndCreateCoord] = useState();
    const [startPostCoord, setStartPostCoord] = useState();
    const [endPostCoord, setEndPostCoord] = useState();
    const [endPostCoordTime, setEndPostCoordTime] = useState();
    const [showResult, setShowResult] = useState();
    const [bdUserInfo, setBDUserInfo] = useState(null);

    useEffect(() => {
        // getTourInfo();
        getBDUserInfo();
    }, [])

    const fetcher = url => axios.get(url, {
        params: {
            tour_id: tour_id,
        }
    }).then(res =>res.data);
    const { data, error } = useSWR('/api/bestdresser/tourinfo', fetcher);


    // 大会情報取得

    useEffect(() => {
        if (data) {
            const spc = moment(data.startPostCoord);
            setStartPostCoord(spc.format('M/D'));
            const epc = moment(data.endPostCoord);
            setEndPostCoord(epc.format('M/D'));
            const scc = moment(data.startCreateCoord);
            setStartCreateCoord(scc.format('M/D'));
            const ecc = moment(data.endCreateCoord);
            setEndCreateCoord(ecc.format('M/D'));
            setEndPostCoordTime(epc.format('HH:mm'));
            setShowResult(data.showResult);
        }
    }, [data])


    // ベストドレッサー参加ユーザー情報取得

    const getBDUserInfo = async () => {

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            "user_id": user_id,
            "tour_id": tour_id,
        }
        const url = '/bestdresser/bdUserInfo';

        await axios.post(url, setData, header).then((res) => {
            setBDUserInfo(res.data);
        }).catch(() => {
        }).finally(() => {
        });
    }

    return (
        <>
            {bdUserInfo && (
                <>
                    <div className={classes.root}>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <figure>
                                    <img src={maleImg} alt="" />
                                </figure>
                                <div className={classes.textArea}>
                                    {!bdUserInfo.isCreatedCoord ? (
                                        <>
                                            <p className={classes.boldblue}>コーデ未投稿</p>
                                            <p>「コーデを作る」からコーデを作りましょう！</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className={classes.boldblue}>コーデ投稿済み！</p>
                                            <p>「コーデを作る」からコーデを作りました！</p>
                                        </>
                                    )}
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
                                    {!bdUserInfo.isDoneVoting ? (
                                        <>
                                            <p className={classes.boldblue}>コーデ未投票</p>
                                            <p>「コーデを見る」からコーデに投票しましょう！</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className={classes.boldblue}>コーデ投票済み！</p>
                                            <p>「コーデを見る」からコーデに投票しました！</p>
                                        </>
                                    )}
                                </div>
                                <i>
                                    <ErrorOutlineRoundedIcon />
                                </i>
                            </li>
                        </ul>
                        {bdUserInfo.isCreatedCoord == false || bdUserInfo.isDoneVoting == false ? (
                                        <>
                        <p className={classes.mainbluetext}><span>ベストドレッサー賞の受賞資格がまだありません！</span></p>
                                        </>
                                    ) : (
                                        <>
                        <p className={classes.mainbluetext}><span>ベストドレッサー賞の受賞資格を取得済み！</span></p>
                                        </>
                                    )}

                        <div className={classes.datebox}>
                            <div>
                                <p className={classes.boldblue}>投稿期間</p>
                                <p><span>{startCreateCoord}</span>〜<span>{endCreateCoord}</span></p>
                            </div>
                            <div>
                                <p className={classes.boldblue}>投票期間</p>
                                <p><span>{startPostCoord}</span>〜</p>
                                <p><span>{endPostCoord}</span>  <span>{endPostCoordTime}</span></p>
                            </div>
                            <div>
                                <p className={classes.boldblue}>結果発表</p>
                                <p><span>{showResult}</span></p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
})