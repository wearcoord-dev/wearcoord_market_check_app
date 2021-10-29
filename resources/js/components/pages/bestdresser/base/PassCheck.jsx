import { makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { UserWear } from "../../../providers/UserWear";
import maleImg from "../../../../../../public/img/lp/2021/player_male.png";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../../providers/UserProvider";
import { useGetUserInfo } from "../../../../hooks/user/useGetUserInfo";

const useStyles = makeStyles({
    info: {
        width: "90%",
        margin: " 10px auto",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        borderRadius: "20px",
        lineHeight: "1.2",
        boxShadow: "0px 0px 30px 1px rgba(153, 99, 99, 0.03)",
        padding: "20px",
        maxWidth: "600px",
    },
    a: {
        display: "block",
        backgroundColor: "#216496",
        width: "70%",
        margin: "20px auto",
        textAlign: "center",
        padding: "10px",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "999px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    },
    img: {
        textAlign: 'center',
        padding: "20px 0",
        "& img": {
            width: '120px',
        }
    },
    h2: {
        textAlign: "center",
        color: "#216496",
        fontSize: "20px",
        fontWeight: "bold",
        lineHeight: "1.4",
    },
    textBox: {
        textAlign: "center",
        lineHeight: "1.6",
    },
    input: {
        width: "70%",
        maxWidth: "300px",
        padding: "6px 15px",
        fontSize: "16px",
        borderRadius: "3px",
        border: "2px solid #ddd",
        boxSizing: "border-box",
        display: "block",
        margin: "30px auto",
    },
    text: {
        width: "70%",
        margin: "50px auto 20px",
    },
    bottom: {
        height: "100px",
    },
    red: {
        color: "indianred",
        fontWeight: "bold",
    }
});


export const PassCheck = memo(() => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const context = useContext(UserContext);
    const userCheck = context.contextName;
    const [tourId, setTourID] = useState();
    const [tourInfo, setTourInfo] = useState();
    const { getUser, userInfo } = useGetUserInfo();


    const onSubmit = (data) => {

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            "input_codepass": data.codepass,
            "userid": context.contextName.id,

        }
        const url = '/api/bestdresser/passcode';

        axios.post(url, setData, header).then((res) => {
            if (res.data) {
                history.push('/main/bestdresser/main');
            } else {
                alert('該当する大会がありません');
            }
        }).catch(() => {
        }).finally(() => {
        });

    }

    const onClickBestDressPage = () => {
        history.push({
            pathname: '/main/bestdresser/main',
        });
    }

    // 初回のレンダリング判定
    const isFirstRender = useRef(false)

    useEffect(() => {
        isFirstRender.current = true
        getUser();
    }, [])

    useEffect(async() => {
        if (userInfo.data) {
            if (userInfo.data.tour_id) {
                if (isFirstRender.current) {
                    const response = await axios.get('/api/bestdresser/tourinfo', {
                        params: {
                            tour_id: userInfo.data.tour_id,
                        }
                    });
                    setTourInfo(response.data);
                    isFirstRender.current = false
                }
            }
        }
    }, [userInfo.data]);

    return (
        <>
            <UserWear>
                <div className={classes.info}>
                    <div>
                        <h2 className={classes.h2}>ベストドレッサー賞<br />認証ページ</h2>
                        <figure className={classes.img}>
                            <img src={maleImg} alt="" />
                        </figure>
                        {userCheck && (userCheck.tour_id !== null && (
                            <>
                                <div className={classes.textBox}>
                                    <p>既に参加中の</p>
                                    { tourInfo && ( tourInfo.tour_name && <p className={classes.red}>{tourInfo.tour_name}</p> ) }
                                    <p>ページを見る</p>
                                </div>
                                <button onClick={onClickBestDressPage} className={classes.a}>この大会を見る</button>
                            </>
                        )
                        )}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className={classes.text}>参加するベストドレッサー賞の認証コードを送信してください。</p>
                        <input className={classes.input} {...register("codepass")} placeholder="ここに認証コードを記入" />
                        <input className={classes.a} type="submit" value="送信" />
                    </form>
                </div>
                <div className={classes.bottom}></div>
            </UserWear>
        </>
    )
})