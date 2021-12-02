import { makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import mitakeimg from "../../../../../../public/img/others/size/mitake.jpg"
import mihabaimg from "../../../../../../public/img/others/size/mihaba.jpg"
import katahabaimgimg from "../../../../../../public/img/others/size/katahaba.jpg"
import sodetakeimg from "../../../../../../public/img/others/size/sodetake.jpg"
import kyouiimg from "../../../../../../public/img/others/size/kyoui.jpg"
import kitakeimg from "../../../../../../public/img/others/size/kitake.jpg"
import commentimg from "../../../../../../public/img/others/size/b0782.png"
import { useGetCalcSize } from "../../../../hooks/size/useGetCalcSize";
import { UserContext } from "../../../providers/UserProvider";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCreateTopsComment } from "../../../../hooks/size/useCreateTopsComment";


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


export const ShowTopsSize = memo((props) => {
    const { } = props;
    const classes = useStyles();
    const context = useContext(UserContext);
    const userCheck = context.contextName;
    const { GetCalcSize, userCalcSize, loadingUserCalcSize, errorUserCalcSize } = useGetCalcSize();
    const { CreateTopsComment, topsComment } = useCreateTopsComment();


    useEffect(() => {
        if (userCheck !== undefined) {
            const data = {
                userid: userCheck.id,
                type: 'tops',
            }
            GetCalcSize(data);
        }
    }, [userCheck]);

    useEffect(() => {

        if (userCalcSize) {
            CreateTopsComment(userCalcSize[0].comment);
        }

    }, [userCalcSize]);

    const showComment = (
        <>
            {userCalcSize ? (
                <>
                    {topsComment ? (
                        <>
                            <div className={classes.comment}>
                                {topsComment}
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
                    <p className={classes.toptext}>このトップスはあなたのサイズと比較して. . .</p>
                    <ul className={classes.ul}>

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>身丈</h3>
                                <img src={mitakeimg} alt="" />
                                {userCalcSize[0].mitake.size ? (
                                    <p className={classes.p}>ウェアサイズ : {userCalcSize[0].mitake.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].mitake.calc == null ? (<p className={classes.nodata}>No Data</p>) : userCalcSize[0].mitake.calc || userCalcSize[0].mitake.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].mitake.calc}</span>cmの差があります</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>身幅</h3>
                                <img src={mihabaimg} alt="" />
                                {userCalcSize[0].mihaba.size ? (
                                    <p className={classes.p}>ウェアサイズ : {userCalcSize[0].mihaba.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].mihaba.calc == null ? (<p className={classes.nodata}>No Data</p>) : userCalcSize[0].mihaba.calc || userCalcSize[0].mihaba.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].mihaba.calc}</span>cmの差があります</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>肩幅</h3>
                                <img src={katahabaimgimg} alt="" />
                                {userCalcSize[0].katahaba.size ? (
                                    <p className={classes.p}>ウェアサイズ : {userCalcSize[0].katahaba.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].katahaba.calc == null ? (<p className={classes.nodata}>No Data</p>) : userCalcSize[0].katahaba.calc || userCalcSize[0].katahaba.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].katahaba.calc}</span>cmの差があります</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>袖丈</h3>
                                <img src={sodetakeimg} alt="" />
                                {userCalcSize[0].sodetake.size ? (
                                    <p className={classes.p}>ウェアサイズ : {userCalcSize[0].sodetake.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].sodetake.calc == null ? (<p className={classes.nodata}>No Data</p>) : userCalcSize[0].sodetake.calc || userCalcSize[0].sodetake.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].sodetake.calc}</span>cmの差があります</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>胸囲</h3>
                                <img src={kyouiimg} alt="" />
                                {userCalcSize[0].kyoui.size ? (
                                    <p className={classes.p}>ウェアサイズ : {userCalcSize[0].kyoui.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].kyoui.calc == null ? (<p className={classes.nodata}>No Data</p>) : userCalcSize[0].kyoui.calc || userCalcSize[0].kyoui.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].kyoui.calc}</span>cmの差があります</p>
                                ) : <p className={classes.p}>No data</p>}
                            </li>
                        ) : <li></li>}

                        {userCalcSize[0] ? (
                            <li className={classes.li}>
                                <h3 className={classes.h3}>着丈</h3>
                                <img src={kitakeimg} alt="" />
                                {userCalcSize[0].kitake.size ? (
                                    <p className={classes.p}>ウェアサイズ : {userCalcSize[0].kitake.size}cm</p>
                                ) : <p className={classes.p}>No data</p>}
                                {userCalcSize[0].kitake.calc == null ? (<p className={classes.nodata}>No Data</p>) : userCalcSize[0].kitake.calc || userCalcSize[0].kitake.calc == 0 ? (
                                    <p className={classes.p}><span className={classes.span}>{userCalcSize[0].kitake.calc}</span>cmの差があります</p>
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