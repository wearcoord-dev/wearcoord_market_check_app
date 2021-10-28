import { makeStyles } from "@material-ui/core";
import { memo, useContext } from "react";
import { UserWear } from "../../../providers/UserWear";
import maleImg from "../../../../../../public/img/lp/2021/player_male.png";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../../providers/UserProvider";

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
    }
});


export const PassCheck = memo(() => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const context = useContext(UserContext);
    const userCheck = context.contextName;

    const onSubmit = (data) =>{
        console.log(data.codepass);
        console.log(userCheck);

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
            if(res.data){
                history.push('/main/bestdresser/main');
            }else{
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

    return (
        <>
            <UserWear>
                <div className={classes.info}>
                    <div>
                        <h2 className={classes.h2}>ベストドレッサー賞<br />認証ページ</h2>
                        <figure className={classes.img}>
                            <img src={maleImg} alt="" />
                        </figure>
                        <div className={classes.textBox}>
                            <p>既に参加中の</p>
                            <p>「ここに大会名が入ります」</p>
                            <p>のページを見る</p>
                        </div>
                        <button onClick={onClickBestDressPage} className={classes.a}>この大会を見る</button>
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