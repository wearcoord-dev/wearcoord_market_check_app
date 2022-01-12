import { memo, useContext, useEffect } from "react";
import { useGetUserCoord } from "../../../../hooks/home/useGetUserCoord";
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from "../../../providers/UserProvider";
import { useHistory } from "react-router-dom";
import logoImg from "../../../../../../public/img/logo/0080E4-short.png";
import tenezImg from "../../../../../../public/img/lp/tenez/tenez.jpeg";
import { fontWeight } from "@material-ui/system";


const useStyles = makeStyles({
    root: {

    },
    h2title: {
        // borderBottom: "1px solid #484848",
        paddingBottom: "2px",
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "16px",
    },
    h2parrent: {
        width: "90%",
        margin: "auto",
    },
    li: {
        backgroundColor: "#ffffff",
        width: "90%",
        margin: "10px auto",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        display: "flex",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "10px",
        padding: "10px 0",
        position: "relative",
        maxWidth: "500px",
        cursor: "pointer",
    },
    imgBox: {
        width: "35%",
        height: "80%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(209.96deg, #DCF3F7 -32.45%, rgba(243, 243, 243, 0.94) 27.17%, #E5ECEE 84.36%)",
        borderRadius: "5px",
        margin: "0 10px",
    },
    img: {
        height: "50px",
        padding: "10px 0",
    },
    date: {
        height: "40%",
        display: "flex",
        alignItems: "center",
        color: "#bdbdbd",
    },
    textBox: {
        height: "100%",
        width: "65%",
        margin: "0 10px",
    },
    text: {
        color: "#364A5C",
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "1.2",
    },
    triangle: {
        borderTop: "20px solid #216496",
        borderRight: "30px solid #216496",
        borderBottom: "12px solid transparent",
        borderLeft: "50px solid transparent",
        borderRadius: "0 10px 0 0",
        position: "absolute",
        top: "0",
        right: "0",
    },
    label: {
        position: "absolute",
        top: "6px",
        right: "6px",
        color: "white",
        fontWeight: "bold",
    }
});

export const NewsList = memo(() => {
    const classes = useStyles();
    const history = useHistory();

    const onClickBrand = () => {
        history.push({
            pathname: '/main/10ez',
        });
    }

    const onClickSize = () => {
        history.push({
            pathname: '/main/settings/size',
        });
    }

    const onClickBD = () => {
        history.push({
            pathname: '/main/bestdresser/login',
        });
    }

    return (
        <>
            <div>
                <div className={classes.h2parrent}>
                    <h2 className={classes.h2title}>お知らせ</h2>
                </div>
                <ul>
                    <li className={classes.li} onClick={onClickBrand}>
                        <div className={classes.imgBox}>
                            <img style={{ width: "100%", height: "70px", objectFit: "cover" }} src={tenezImg} alt="" />
                        </div>
                        <div className={classes.textBox}>
                            <p className={classes.date}>2022.1.12</p>
                            <p className={classes.text}>10EZ特集ページを開設しました！</p>
                        </div>
                        <div className={classes.triangle}>
                        </div>
                        <p className={classes.label}>NEW</p>
                    </li>
                    <li className={classes.li}
                        onClick={onClickBD}
                    >
                        <div className={classes.imgBox}>
                            <img className={classes.img} src={logoImg} alt="" />
                        </div>
                        <div className={classes.textBox}>
                            <p className={classes.date}>2021.11.1</p>
                            <p className={classes.text}>ベストドレッサー賞ページがOPENしました！</p>
                        </div>
                        <div className={classes.triangle}>
                        </div>
                        <p className={classes.label}>NEW</p>
                    </li>
                    <li className={classes.li}
                        onClick={onClickSize}
                    >
                        <div className={classes.imgBox}>
                            <img className={classes.img} src={logoImg} alt="" />
                        </div>
                        <div className={classes.textBox}>
                            <p className={classes.date}>2021.10.1</p>
                            <p className={classes.text}>体格サイズを登録する機能を搭載しました！</p>
                        </div>
                        <div className={classes.triangle}>
                        </div>
                        <p className={classes.label}>NEW</p>
                    </li>
                </ul>
            </div>
        </>
    )
})