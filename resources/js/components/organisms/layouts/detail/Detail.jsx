import { CircularProgress, makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { useGetUserFavCoord } from "../../../../hooks/favorite/useGetUserFavCoord";
import { useOpenBtnFuncFav } from "../../../../hooks/favorite/useOpenBtnFuncFav";
import { UserContext } from "../../../providers/UserProvider";
import { OpenRightBtn } from "../../button/OpenRightBtn";
import { OpenRightBtnFav } from "../../button/OpenRightBtnFav";

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
    const { openBtnFuncFav } = useOpenBtnFuncFav();

    const [ capsIDValue, setCapsID] = useState(null);
    const [ topsIDValue, setTopsID] = useState(null);
    const [ pantsIDValue, setPantsID] = useState(null);
    const [ shoesIDValue, setShoesID] = useState(null);

    useEffect(() => {
        if (userCheck !== undefined) {
            console.log('useEffectが実行されました');
            GetUserFavCoord(coordid);
        }
    }, [userCheck]);

    useEffect(() => {
        if (userCoordList) {

            // nullかどうか
            if(userCoordList.caps){
                let capsID = userCoordList.caps;
                setCapsID(capsID);
            }
            let topsID = userCoordList.tops;
            let pantsID = userCoordList.pants;
            let shoesID = userCoordList.shoes;

            setTopsID(topsID);
            setPantsID(pantsID);
            setShoesID(shoesID);
        }
    }, [userCoordList]);

    useEffect(() => {
        if (userCoordList) {
        openBtnFuncFav()
        }
    },[userCoordList]);

    return (
        <>
            {userCoordList ? (
                <div className="displayFlex relative">
                    <div className={classes.rightbox}></div>
                    <div className={classes.imgbox}>
                        <img className={classes.img} src={userCoordList.img} alt="" />
                    </div>
                    <OpenRightBtnFav
                        capsID={capsIDValue}
                        topsID={topsIDValue}
                        pantsID={pantsIDValue}
                        shoesID={shoesIDValue}
                    />
                </div>
            ) : loadingUserCoordList ? <CircularProgress /> : (<p></p>)}
        </>
    )
})