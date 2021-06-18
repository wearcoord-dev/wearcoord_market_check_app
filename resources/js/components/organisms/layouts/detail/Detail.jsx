import { CircularProgress, makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import { useGetUserFavCoord } from "../../../../hooks/favorite/useGetUserFavCoord";
import { UserContext } from "../../../providers/UserProvider";
import { OpenRightBtn } from "../../button/OpenRightBtn";

const useStyles = makeStyles((theme) => ({
    imgbox: {
        height: "400px",
        width: "40%",
        maxWidth: "200px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    rightbox: {
        width: "30%",
    },
    img: {
        width: "100%",
    }
}));

export const Detail = memo((props) => {
    const { coordid } = props;
    const { GetUserFavCoord, userCoordList, loadingUserCoordList, errorUserCoordList } = useGetUserFavCoord(null);
    const classes = useStyles();
    const context = useContext(UserContext);
    const userCheck = context.contextName;

    useEffect(() => {
        if (userCheck !== undefined) {
            console.log('useEffectが実行されました');
            GetUserFavCoord(coordid);
        }
    }, [userCheck]);

    console.log(userCoordList);

    return (
        <>
            {userCoordList ? (
                <div className="displayFlex relative">
                    <div className={classes.rightbox}></div>
                    <div className={classes.imgbox}>
                        <img className={classes.img} src={userCoordList.img} alt="" />
                    </div>
                    <OpenRightBtn />
                </div>
            ) : loadingUserCoordList ? <CircularProgress /> : (<p></p>)}
        </>
    )
})