import { Button, makeStyles, Snackbar } from "@material-ui/core";
import React, { useContext, useEffect } from 'react';
import { memo, useState } from "react";
import mitakeimg from "../../../../../../public/img/others/size/mitake.jpg";
import mihabaimg from "../../../../../../public/img/others/size/mihaba.jpg";
import katahabaimg from "../../../../../../public/img/others/size/katahaba.jpg";
import sodetakeimg from "../../../../../../public/img/others/size/sodetake.jpg";
import kyouiimg from "../../../../../../public/img/others/size/kyoui.jpg";
import kitakeimg from "../../../../../../public/img/others/size/kitake.jpg";
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

export const RegisterSizeTops = memo(() => {
    const classes = useStyles();
    const history = useHistory();
    const context = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors }, required } = useForm();
    const { GetUserSize, userSize, loadingUserSize, errorUserSize } = useGetUserSize();
    const userCheck = context.contextName;

    // 既に登録したサイズデータを取得
    const [preKyoui, setPreKyoui] = useState();
    const [preMitake, setPreMitake] = useState();
    const [preMihaba, setPreMihaba] = useState();
    const [preKatahaba, setPreKatahaba] = useState();
    const [preSodetake, setPreSodetake] = useState();
    const [preKitake, setPreKitake] = useState();
    const [preTopsSize, setPreTopsSize] = useState();
    // 選んだサイズを保存
    const [selectTopSize, setSelectTopSize] = useState();

    useEffect(() => {
        if (userCheck !== undefined) {
            GetUserSize(userCheck.id);
        }
    }, [userCheck]);

    useEffect(() => {
        if (userSize !== null) {
            setPreKyoui(userSize.kyoui);
            setPreMitake(userSize.mitake);
            setPreMihaba(userSize.mihaba);
            setPreKatahaba(userSize.katahaba);
            setPreSodetake(userSize.sodetake);
            setPreKitake(userSize.kitake);

            // ウェアサイズのデフォルトを入れる
            if(userSize.tops_size !== null){
                setPreTopsSize(userSize.tops_size);
            }else{
                setPreTopsSize('m');
            }
            setSelectTopSize(preTopsSize);
        }
    }, [userSize]);

    // 既存のウェアサイズがあれば更新

    useEffect(() => {
        if (userSize !== null) {
            setSelectTopSize(preTopsSize);
        }
    }, [preTopsSize]);

    const changeTopsSize = (props) => {
        setSelectTopSize(props)
    }

    const onSubmit = data => {
        let kyouisize = preKyoui;
        let mitakesize = preMitake;
        let mihabasize = preMihaba;
        let katahabasize = preKatahaba;
        let sodetakesize = preSodetake;
        let kitakesize = preKitake;

        if (!data.kyoui == '') {
            kyouisize = data.kyoui;
        }
        if (!data.mitake == '') {
            mitakesize = data.mitake;
        }
        if (!data.mihaba == '') {
            mihabasize = data.mihaba;
        }
        if (!data.katahaba == '') {
            katahabasize = data.katahaba;
        }
        if (!data.sodetake == '') {
            sodetakesize = data.sodetake;
        }
        if (!data.kitake == '') {
            kitakesize = data.kitake;
        }

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        }

        const setData = {
            "kyoui": kyouisize,
            "mitake": mitakesize,
            "mihaba": mihabasize,
            "katahaba": katahabasize,
            "sodetake": sodetakesize,
            "kitake": kitakesize,
            "userid": context.contextName.id,
            "tops_size": selectTopSize,
        }
        const url = '/api/registersize/tops';

        axios.post(url, setData, header).then((res) => {
            console.log(res);
            history.push('/main/settings/size/pants');
        }).catch(() => {
        }).finally(() => {
        });
    }

    return (
        <>
            <h2 className={classes.h2}>トップスサイズを入力</h2>
            <p className={classes.p}>※半角数字で入力してください</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul>

                    <li className={classes.formwrap}>
                        <p className={classes.title}>普段のサイズ :</p>
                        <div className={classes.formbox}>
                            <select value={selectTopSize} {...register("size", { required: true })} onChange={(value)=> changeTopsSize(event.target.value)}>
                                <option hidden>選択してください</option>
                                <option value="ss">SS</option>
                                <option value="s">S</option>
                                <option value="xs">XS</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="ll">LL</option>
                            </select>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={kyouiimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>胸囲</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preKyoui}
                                    {...register("kyoui", { pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.kyoui && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={mitakeimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>身丈</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preMitake}
                                    name="mitake"
                                    {...register("mitake", { required: false, pattern: /^[0-9]+$/i })}
                                /><span>cm</span>
                                {errors.mitake && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={mihabaimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>身幅</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preMihaba}
                                    name="mihaba"
                                    {...register("mihaba", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.mihaba && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={katahabaimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>肩幅</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preKatahaba}
                                    {...register("katahaba", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.katahaba && <div className={classes.error}>半角英数3桁内で入力してください</div>}

                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={sodetakeimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>袖丈</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preSodetake}
                                    {...register("sodetake", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.sodetake && <div className={classes.error}>半角英数3桁内で入力してください</div>}

                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={kitakeimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>着丈</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="tel"
                                    placeholder={preKitake}
                                    {...register("kitake", { required: false, pattern: /^[0-9]+$/i, maxLength: 3 })}
                                /><span>cm</span>
                                {errors.kitake && <div className={classes.error}>半角英数3桁内で入力してください</div>}
                            </div>
                        </div>
                    </li>
                </ul>
                {/* <div>
                    <input type="submit" className={classes.a}>パンツサイズを入力する<ArrowRightIcon style={{ fontSize: "20px", verticalAlign: "bottom" }} /></input>
                </div> */}
                <input className={classes.a} type="submit" value="パンツサイズを入力する" />
            </form>
            <div style={{ paddingBottom: "100px" }}></div>
        </>
    )
})