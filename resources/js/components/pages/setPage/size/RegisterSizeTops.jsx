import { Button, makeStyles, Snackbar } from "@material-ui/core";
import React from 'react';
import { memo, useState } from "react";
import mitakeimg from "../../../../../../public/img/others/size/mitake.jpg";
import mihabaimg from "../../../../../../public/img/others/size/mihaba.jpg";
import katahabaimg from "../../../../../../public/img/others/size/katahaba.jpg";
import sodetakeimg from "../../../../../../public/img/others/size/sodetake.jpg";
import kyouiimg from "../../../../../../public/img/others/size/kyoui.jpg";
import setakeimg from "../../../../../../public/img/others/size/setake.jpg";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MuiAlert from '@material-ui/lab/Alert';

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
    }
});

export const RegisterSizeTops = memo(() => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [mitake, setMitake] = useState('');
    const [mihaba, setMihaba] = useState('');
    const [katahaba, setKatahaba] = useState('');
    const [sodetake, setSodetake] = useState('');
    const [kyoui, setKyoui] = useState('');
    const [setake, setSetake] = useState('');

    const onChangeMitake = (e) => setMitake(e.target.value);
    const onChangeMihaba = (e) => setMihaba(e.target.value);
    const onChangeKatahaba = (e) => setKatahaba(e.target.value);
    const onChangeSodetake = (e) => setSodetake(e.target.value);
    const onChangeKyoui = (e) => setKyoui(e.target.value);
    const onChangeSetake = (e) => setSetake(e.target.value);


    const onClickRegisterTops = () => {
        console.log(mitake);
        console.log(mihaba);
        console.log(katahaba);
        console.log(sodetake);
        console.log(kyoui);
        console.log(setake);

        if (!mitake || !mihaba || !katahaba || !sodetake || !kyoui || !setake) {
            console.log("ありません");
            setOpen(true);
        } else {
            console.log("あります");
        }

    }

    return (
        <>
            <h2 className={classes.h2}>トップスサイズを入力</h2>
            <p className={classes.p}>※半角数字で入力してください</p>
            <form>
                <ul>
                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={mitakeimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>身丈</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="number"
                                    value={mitake}
                                    onChange={onChangeMitake}
                                /><span>cm</span>
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
                                    type="number"
                                    value={mihaba}
                                    onChange={onChangeMihaba}
                                /><span>cm</span>
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
                                    type="number"
                                    value={katahaba}
                                    onChange={onChangeKatahaba}
                                /><span>cm</span>
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
                                    type="number"
                                    value={sodetake}
                                    onChange={onChangeSodetake}
                                /><span>cm</span>
                            </div>
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
                                    type="number"
                                    value={kyoui}
                                    onChange={onChangeKyoui}
                                /><span>cm</span>
                            </div>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <picture className={classes.picture}>
                            <img src={setakeimg} alt="" />
                        </picture>
                        <div className={classes.box}>
                            <h3 className={classes.h3}>背丈</h3>
                            <div className={classes.inputArea}>
                                <input
                                    className={classes.input}
                                    type="number"
                                    value={setake}
                                    onChange={onChangeSetake}
                                /><span>cm</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <button type="button" className={classes.a} onClick={onClickRegisterTops}>パンツサイズを入力する<ArrowRightIcon style={{ fontSize: "20px", verticalAlign: "bottom" }} /></button>
                </div>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" style={{ lineHeight: "2" }}>
                    全ての項目を記入してください！
                </Alert>
            </Snackbar>
            <div style={{ marginBottom: "100px" }}></div>
        </>
    )
})