import { CircularProgress, makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { useGetUserFavCoord } from "../../../../hooks/favorite/useGetUserFavCoord";
import { useOpenBtnFuncFav } from "../../../../hooks/favorite/useOpenBtnFuncFav";
import { BtnLeft } from "../../../atoms/button/BtnLeft";
import { UserContext } from "../../../providers/UserProvider";
import { OpenRightBtn } from "../../button/OpenRightBtn";
import { OpenRightBtnFav } from "../../button/OpenRightBtnFav";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AccessibilityIcon from '@material-ui/icons/Accessibility';


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
    leftbox: {
        width: "30%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
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

    const [capsIDValue, setCapsID] = useState(null);
    const [topsIDValue, setTopsID] = useState(null);
    const [pantsIDValue, setPantsID] = useState(null);
    const [shoesIDValue, setShoesID] = useState(null);
    const [mannequinData, setInnerUrl] = useState(null);

    useEffect(() => {
        if (userCheck !== undefined) {
            // console.log('useEffectが実行されました');
            GetUserFavCoord(coordid);
        }
    }, [userCheck]);

    useEffect(() => {
        if (userCoordList) {

            // nullかどうか
            if (userCoordList.caps) {
                let capsID = userCoordList.caps;
                setCapsID(capsID);
            }
            let topsID = userCoordList.tops;
            let pantsID = userCoordList.pants;
            let shoesID = userCoordList.shoes;
            let mannequinUrlData = userCoordList.mannequin;

            setTopsID(topsID);
            setPantsID(pantsID);
            setShoesID(shoesID);
            setInnerUrl(mannequinUrlData);
        }
    }, [userCoordList]);

    useEffect(() => {
        if (userCoordList) {
            openBtnFuncFav()
        }
    }, [userCoordList]);

    console.log(userCoordList);

    return (
        <>
            {userCoordList ? (
                <div className="displayFlex relative">
                    <div className={classes.leftbox}>

                        {userCoordList ? (context ? (userCoordList.user_id == context.contextName.id ? <BtnLeft
                            icon={<DeleteForeverIcon fontSize={"large"} />}
                            text={'削除する'}
                            type={'delete'}
                            id={userCoordList.id}
                            img={userCoordList.img}
                        /> : <BtnLeft
                            icon={<AccessibilityIcon fontSize={"large"} />}
                            text={'着る'}
                            type={'wear'}
                            id={userCoordList.id}
                            img={userCoordList.img}
                            capsID={capsIDValue}
                            topsID={topsIDValue}
                            pantsID={pantsIDValue}
                            shoesID={shoesIDValue}
                            mannequin={mannequinData}
                            userid={context.contextName.id}
                        />) : <p></p>) : <p></p>}
                    </div>
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