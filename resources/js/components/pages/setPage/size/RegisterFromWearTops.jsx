import { Grid, makeStyles } from "@material-ui/core";
import { memo, useContext } from "react";
import img1 from "../../../../../../public/img/others/size/DrawKit-Fashion-Illustration-01.svg";
import img2 from "../../../../../../public/img/others/size/character 5.svg";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetSizeWear } from "../../../../hooks/size/useGetSizeWear";
import { UserContext } from "../../../providers/UserProvider";
import CircularProgress from '@material-ui/core/CircularProgress';


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
    },
    form: {
        width: "90%",
        margin: "auto",
        backgroundColor: "#ffffff",
        padding: "10px 0",
        boxSizing: "border - box",
        borderRadius: "20px",
        boxShadow: "0px 0px 30px 1px rgba(153, 99, 99, 0.03)",
    },
    searchinput: {
        textAlign: "center",
        display: "block",
        margin: "auto",
        fontSize: "14px",
        width: "50%",
        backgroundColor: "#ddd",
        borderRadius: "999px",
        padding: "4px 0",
    },
    root: {
        flexGrow: 1,
        paddingBottom: '150px',
        marginTop: '20px',
    },
    paper: {
        textAlign: 'center',
        maxWidth: '30%',
        margin: '4px !important',
        justifyContent: 'center',
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        borderRadius: '10px',
        position: 'relative',
    },
    first: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
    }

});

export const RegisterFromWearTops = memo(() => {
    const classes = useStyles();
    const history = useHistory();
    const context = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { GetUserSizeWear, userSizeWear, loadingUserSizeWear, errorUserSizeWear } = useGetSizeWear();
    const userCheck = context.contextName;

    const items = (
        <>
            {userSizeWear ? (loadingUserSizeWear ? (
                <>
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                </>
            ) : (<>
                <div className={classes.root}>
                    <Grid style={{ justifyContent: 'center', width: '100%', margin: '0' }} container spacing={1}>

                        {userSizeWear.map((item) => (
                            <Grid className={classes.paper} key={item.db.id} container item xs={12} spacing={3}>
                                <button>
                                    <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${item.category}/${item.url}`} alt="" />
                                </button>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </>)
            ) : (
                <>
                    <div className={classes.first}>ここに検索結果が表示されます</div>
                </>
            )}
        </>
    )

    const onSubmit = data => {
        // console.log(data);
        GetUserSizeWear(data, userCheck.gender);
    }

    console.log(userSizeWear);

    return (
        <>
            <p className={classes.info}>普段着ているトップスを選んで、ご自身の体格データとして登録します。以下の検索フォームからウェアを選んでください。</p>

            <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
                <div className={classes.formwrap}>
                    <p className={classes.title}>ブランド :</p>
                    <div className={classes.formbox}>
                        <select {...register("brand")}>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="asics">Asics</option>
                        </select>
                    </div>
                </div>
                <div className={classes.formwrap}>
                    <p className={classes.title}>サイズ :</p>
                    <div className={classes.formbox}>
                        <select {...register("size")}>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                        </select>
                    </div>
                </div>
                <input type="hidden" {...register("type")} value="tops" />
                <input className={classes.searchinput} type="submit" value="ウェアを検索" />
            </form>

            {items}

            <div style={{ marginBottom: "100px" }}></div>
        </>
    )
})