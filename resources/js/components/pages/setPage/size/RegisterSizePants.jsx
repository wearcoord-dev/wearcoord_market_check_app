import { Button, makeStyles, Snackbar } from "@material-ui/core";
import React, { useContext, useEffect } from 'react';
import { memo, useState } from "react";
import waistimg from "../../../../../../public/img/others/size/waist.jpg";
import hipimg from "../../../../../../public/img/others/size/hip.jpg";
import watarihabaimg from "../../../../../../public/img/others/size/watarihaba.jpg";
import matagamiimg from "../../../../../../public/img/others/size/matagami.jpg";
import matashitaimg from "../../../../../../public/img/others/size/matashita.jpg";
import susohabaimg from "../../../../../../public/img/others/size/susohaba.jpg";
import soutakeimg from "../../../../../../public/img/others/size/soutake.jpg";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MuiAlert from '@material-ui/lab/Alert';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../../providers/UserProvider";
import { useGetUserSize } from "../../../../hooks/size/useGetUserSize";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    li: {
        display: "flex",
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        margin: "30px auto",
        borderRadius: "30px",
        boxShadow: "0px 0px 12px rgb(72 72 72 / 25%)",
    },
    h2: {
        textAlign: 'center',
        padding: "30px 0 10px",
    },
    picture: {
        width: "40%",
        margin: "auto",
        display: "block",
        padding: "10px 0",
        textAlign: "center",
        "& img": {
            height: "70px",
        }
    },
    box: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    input: {
        width: "50%",
        padding: "6px 15px",
        fontSize: "16px",
        borderRadius: "3px",
        border: "2px solid #ddd",
        boxSizing: "border-box",
        marginRight: "10px",
    },
    h3: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "14px",
    },
    inputArea: {
        textAlign: "center",
    },
    p: {
        textAlign: "center",
        color: "darkred",
    },
    a: {
        display: "block",
        backgroundColor: "#0080E4",
        width: "70%",
        margin: "auto",
        textAlign: "center",
        padding: "10px",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "999px",
        margin: "0 auto",
        bottom: "20px",
    },
    error: {
        color: "red",
        paddingTop: "10px",
    },
    formbox: {
        overflow: "hidden",
        width: "50%",
        margin: "1em auto",
        textAlign: "center",
        position: "relative",
        border: "1px solid #bbbbbb",
        borderRadius: "2px",
        background: "#ffffff",
        "& select": {
            width: "100%",
            paddingRight: "1em",
            cursor: "pointer",
            textIndent: "0.01px",
            textOverflow: "ellipsis",
            border: "none",
            outline: "none",
            background: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            appearance: "none",
            padding: "8px 38px 8px 8px",
            color: "#666666",
        },
        '&::before': {
            position: "absolute",
            top: "0.8em",
            right: "0.9em",
            width: "0",
            height: "0",
            padding: "0",
            content: "''",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #666666",
            pointerEvents: "none",
        },
    },
    title: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formwrap: {
        display: "flex",
        width: "90%",
        margin: "auto",
        marginTop: "30px",
    },
});

export const RegisterSizePants = memo(() => {
    const classes = useStyles();
    const history = useHistory();
    const context = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { GetUserSize, userSize, loadingUserSize, errorUserSize } = useGetUserSize();
    const userCheck = context.contextName;


    // 既に登録したサイズデータを取得
    const [preWeist, setPreWeist] = useState();
    const [preHip, setPreHip] = useState();
    const [preWatarihaba, setPreWatarihaba] = useState();
    const [preMatagami, setPreMatagami] = useState();
    const [preMatashita, setPreMatashita] = useState();
    const [preSusohaba, setPreSusohaba] = useState();
    const [preSoutake, setPreSoutake] = useState();
    const [prePantsSize, setPrePantsSize] = useState();
    // 選んだサイズを保存
    const [selectPantsSize, setSelectPantsSize] = useState();

    useEffect(() => {
        if (userCheck !== undefined) {
            GetUserSize(userCheck.id);
        }
    }, [userCheck]);

    useEffect(() => {
        if (userSize !== null) {
            setPreWeist(userSize.waist);
            setPreHip(userSize.hip);
            setPreWatarihaba(userSize.watarihaba);
            setPreMatagami(userSize.matagami);
            setPreMatashita(userSize.matashita);
            setPreSusohaba(userSize.susohaba);
            setPreSoutake(userSize.soutake);

            // ウェアサイズのデフォルトを入れる
            if (userSize.pants_size !== null) {
                setPrePantsSize(userSize.pants_size);
            } else {
                setPrePantsSize('m');
            }
            setSelectPantsSize(prePantsSize);
        }
    }, [userSize]);

        // 既存のウェアサイズがあれば更新

        useEffect(() => {
            if (userSize !== null) {
                setSelectPantsSize(prePantsSize);
            }
        }, [prePantsSize]);

        const changePantsSize = (props) => {
            setSelectPantsSize(props)
        }

    const onSubmit = data => {
        let waistsize = preWeist;
        let hipsize = preHip;
        let watarihabasize = preWatarihaba;
        let matagamisize = preMatagami;
        let matashitasize = preMatashita;
        let susohabasize = preSusohaba;
        let soutakesize = preSoutake;

        if (!data.waist == '') {
            waistsize = data.waist;
        }
        if (!data.hip == '') {
            hipsize = data.hip;
        }
        if (!data.watarihaba == '') {
            watarihabasize = data.watarihaba;
        }
        if (!data.matagami == '') {
            matagamisize = data.matagami;
        }
        if (!data.matashita == '') {
            matashitasize = data.matashita;
        }
        if (!data.susohaba == '') {
            susohabasize = data.susohaba;
        }
        if (!data.soutake == '') {
            soutakesize = data.soutake;
        }

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            "waist": waistsize,
            "hip": hipsize,
            "watarihaba": watarihabasize,
            "matagami": matagamisize,
            "matashita": matashitasize,
            "susohaba": susohabasize,
            "soutake": soutakesize,
            "userid": context.contextName.id,
            "pants_size": selectPantsSize,

        }
        const url = '/registersize/pants';

        axios.post(url, setData, header).then((res) => {
            history.push('/main/mycoord');
        }).catch(() => {
        }).finally(() => {
        });
    }

    return (
        <>
            <h2 className={classes.h2}>パンツサイズを入力</h2>
            <p className={classes.p}>※半角数字で入力してください</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul>

                    <li className={classes.formwrap}>
                        <p className={classes.title}>普段のサイズ :</p>
                        <div className={classes.formbox}>
                            <select value={selectPantsSize} {...register("size", { required: true })} onChange={(value) => changePantsSize(event.target.value)}>
                                <option hidden>選択してください</option>
                                <option value="ss">SS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="ll">LL</option>
                            </select>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={waistimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>ウエスト</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preWeist}
                                    {...register("waist", { pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.waist && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={hipimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>ヒップ</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preHip}
                                    {...register("hip", { required: false, pattern: /^[0-9]+$/i })}
                                /><span>cm</span>
                                {errors.hip && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={watarihabaimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>ワタリ幅</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preWatarihaba}
                                    {...register("watarihaba", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.watarihaba && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={matagamiimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>股上</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preMatagami}
                                    {...register("matagami", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.matagami && <div className={classes.error}>半角英数3桁内で入力してください</div>}

                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={matashitaimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>股下</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preMatashita}
                                    {...register("matashita", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.matashita && <div className={classes.error}>半角英数3桁内で入力してください</div>}

                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={susohabaimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>裾幅</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preSusohaba}
                                    {...register("susohaba", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.susohaba && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={soutakeimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>総丈</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preSoutake}
                                    {...register("soutake", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.soutake && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>
                </ul>
                <input className={classes.a} type="submit" value="入力完了！" />
            </form>
            <div style={{ paddingBottom: "100px" }}></div>
        </>
    )
})