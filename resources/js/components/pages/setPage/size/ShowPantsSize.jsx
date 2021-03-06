import { makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import waistimg from "../../../../../../public/img/others/size/waist.jpg"
import hipimg from "../../../../../../public/img/others/size/hip.jpg"
import watarihabaimg from "../../../../../../public/img/others/size/watarihaba.jpg"
import matagamiimg from "../../../../../../public/img/others/size/matagami.jpg"
import matashitaimg from "../../../../../../public/img/others/size/matashita.jpg"
import susohabaimg from "../../../../../../public/img/others/size/susohaba.jpg"
import soutakeimg from "../../../../../../public/img/others/size/soutake.jpg"
import commentimg from "../../../../../../public/img/others/size/b0783.png"
import { useGetCalcSize } from "../../../../hooks/size/useGetCalcSize";
import { UserContext } from "../../../providers/UserProvider";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCreatePantsComment } from "../../../../hooks/size/useCreatePantsComment";


const useStyles = makeStyles({
    topmargin: {
        padding: "50px 0 0",
    },
    li: {
        width: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 0px 12px rgb(72 72 72 / 25%)",
        margin: "10px 0",
        padding: "10px 0",
        "& img": {
            height: "120px",
            margin: "10px 0",
        }
    },
    ul: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "800px",
        margin: "auto",
    },
    toptext: {
        textAlign: "center",
        padding: "20px 0",
    },
    h3: {
        fontWeight: "bold",
        fontSize: "14px",
    },
    p: {
        padding: "6px 0",
    },
    bottommargin: {
        marginBottom: "70px",
    },
    span: {
        fontWeight: "bold",
        color: "orangered",
        padding: "0 4px",
    },
    nodata: {
        color: "lightblue",
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
    },
    comment: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 0px 12px rgb(72 72 72 / 25%)",
        margin: "10px auto",
        padding: "10px 0",
        maxWidth: "800px",
    },
    commentimg: {
        width: "30%",
        maxWidth: "150px",
    }
});


export const ShowPantsSize = memo((props) => {
    const { } = props;
    const classes = useStyles();
    const context = useContext(UserContext);
    const userCheck = context.contextName;
    const { GetCalcSize, userCalcSize, loadingUserCalcSize, errorUserCalcSize } = useGetCalcSize();
    const { CreatePantsComment, pantsComment } = useCreatePantsComment();


    useEffect(() => {
        if (userCheck !== undefined) {
            const data = {
                userid: userCheck.id,
                type: 'pants',
            }
            GetCalcSize(data);
        }
    }, [userCheck]);

    useEffect(() => {

        if (userCalcSize) {
            CreatePantsComment(userCalcSize[0].comment);
        }

    }, [userCalcSize]);

    const showComment = (
        <>
            {userCalcSize ? (
                <>
                    {pantsComment ? (
                        <>
                            <div className={classes.comment}>
                                {pantsComment}
                                <img className={classes.commentimg} src={commentimg} alt="" />
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </>
            ) : (
                <>
                </>
            )}
        </>
    )

    return (
        <>
            <div className={classes.topmargin}></div>
            {userCalcSize ? (
                <>
                    <p className={classes.toptext}>??????????????????????????????????????????????????????. . .</p>
                    <ul className={classes.ul}>

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>????????????</h3>
                                <img src={waistimg} alt="" />
                                {userCalcSize[0].waist.size ? (
                                    <p className={classes.p}>?????????????????? : {userCalcSize[0].waist.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].waist.calc == null ? (<p className={classes.nodata}>No data</p>) : userCalcSize[0].waist.calc || userCalcSize[0].waist.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].waist.calc}</span>cm?????????????????????</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>?????????</h3>
                                <img src={hipimg} alt="" />
                                {userCalcSize[0].hip.size ? (
                                    <p className={classes.p}>?????????????????? : {userCalcSize[0].hip.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].hip.calc == null ? (<p className={classes.nodata}>No data</p>) : userCalcSize[0].hip.calc || userCalcSize[0].hip.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].hip.calc}</span>cm?????????????????????</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>????????????</h3>
                                <img src={watarihabaimg} alt="" />
                                {userCalcSize[0].watarihaba.size ? (
                                    <p className={classes.p}>?????????????????? : {userCalcSize[0].watarihaba.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].watarihaba.calc == null ? (<p className={classes.nodata}>No data</p>) : userCalcSize[0].watarihaba.calc || userCalcSize[0].watarihaba.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].watarihaba.calc}</span>cm?????????????????????</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>??????</h3>
                                <img src={matagamiimg} alt="" />
                                {userCalcSize[0].matagami.size ? (
                                    <p className={classes.p}>?????????????????? : {userCalcSize[0].matagami.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].matagami.calc == null ? (<p className={classes.nodata}>No data</p>) : userCalcSize[0].matagami.calc || userCalcSize[0].matagami.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].matagami.calc}</span>cm?????????????????????</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>??????</h3>
                                <img src={matashitaimg} alt="" />
                                {userCalcSize[0].matashita.size ? (
                                    <p className={classes.p}>?????????????????? : {userCalcSize[0].matashita.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].matashita.calc == null ? (<p className={classes.nodata}>No data</p>) : userCalcSize[0].matashita.calc || userCalcSize[0].matashita.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].matashita.calc}</span>cm?????????????????????</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>??????</h3>
                                <img src={susohabaimg} alt="" />
                                {userCalcSize[0].susohaba.size ? (
                                    <p className={classes.p}>?????????????????? : {userCalcSize[0].susohaba.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].susohaba.calc == null ? (<p className={classes.nodata}>No data</p>) : userCalcSize[0].susohaba.calc || userCalcSize[0].susohaba.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].susohaba.calc}</span>cm?????????????????????</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>??????</h3>
                                <img src={soutakeimg} alt="" />
                                {userCalcSize[0].soutake.size ? (
                                    <p className={classes.p}>?????????????????? : {userCalcSize[0].soutake.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].soutake.calc == null ? (<p className={classes.nodata}>No data</p>) : userCalcSize[0].soutake.calc || userCalcSize[0].soutake.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].soutake.calc}</span>cm?????????????????????</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                    </ul>
                    {showComment}
                </>
            ) : (
                <>
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                </>
            )
            }
            <div className={classes.bottommargin}></div>
        </>
    )
})