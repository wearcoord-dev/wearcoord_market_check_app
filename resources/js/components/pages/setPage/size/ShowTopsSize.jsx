import { makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import mitakeimg from "../../../../../../public/img/others/size/mitake.jpg"
import mihabaimg from "../../../../../../public/img/others/size/mihaba.jpg"
import katahabaimgimg from "../../../../../../public/img/others/size/katahaba.jpg"
import { useGetCalcSize } from "../../../../hooks/size/useGetCalcSize";
import { UserContext } from "../../../providers/UserProvider";

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
    },
    toptext: {
        textAlign: "center",
        padding: "20px 0",
    }
});


export const ShowTopsSize = memo((props) => {
    const { } = props;
    const classes = useStyles();
    const context = useContext(UserContext);
    const userCheck = context.contextName;
    const { GetCalcSize, userCalcSize, loadingUserCalcSize, errorUserCalcSize } = useGetCalcSize();

    useEffect(() => {
        if (userCheck !== undefined) {
            const data = {
                userid: userCheck.id,
                type: 'tops',
            }
            GetCalcSize(data);
        }
    }, [userCheck]);

    return (
        <>
            <div className={classes.topmargin}></div>
            <p className={classes.toptext}>このトップスはあなたのサイズと比較して. . .</p>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <h3>身丈</h3>
                    <img src={mitakeimg} alt="" />
                    <p>100cm</p>
                    <p>datadata</p>
                </li>
                <li className={classes.li}>
                    <h3>身幅</h3>
                    <img src={mihabaimg} alt="" />
                    <p>100cm</p>
                    <p>datadata</p>
                </li>
                <li className={classes.li}>
                    <h3>肩幅</h3>
                    <img src={katahabaimgimg} alt="" />
                    <p>100cm</p>
                    <p>datadata</p>
                </li>
            </ul>
        </>
    )
})