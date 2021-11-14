import { CircularProgress, makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect, useRef, useState } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { useOpenBtnFuncFav } from "../../../../../hooks/favorite/useOpenBtnFuncFav";
import { UserContext } from "../../../../providers/UserProvider";
import { BtnLeft } from "../../../../atoms/button/BtnLeft";
import { useGetBDCoord } from "../../../../../hooks/bestdresser/useGetBDCoord";
import queryString from 'query-string';
import { useLocation } from "react-router";
import { OpenRightBtnFavBD } from "../../../../organisms/button/OpenRightBtnFavBD";



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

export const BDCoordDetail = memo(() => {
    const classes = useStyles();
    const context = useContext(UserContext);
    const userCheck = context.contextName;
    const { openBtnFuncFav } = useOpenBtnFuncFav();
    const { GetUserBDCoord, userCoordBD, loadingUserCoordBD, errorUserCoordBD } = useGetBDCoord();

    // パラメータ取得
    const search = useLocation().search;
    const coordid = queryString.parse(search);


    const [capsIDValue, setCapsID] = useState(null);
    const [topsIDValue, setTopsID] = useState(null);
    const [pantsIDValue, setPantsID] = useState(null);
    const [shoesIDValue, setShoesID] = useState(null);
    const [mannequinData, setInnerUrl] = useState(null);

    // 初回のレンダリング判定
    const isFirstRender = useRef(false)

    useEffect(() => {
        isFirstRender.current = true
    }, [])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            GetUserBDCoord(coordid.id);
        } else {
        }
    }, [coordid]);

    useEffect(() => {
        if (userCoordBD) {

            // nullかどうか
            if (userCoordBD.caps) {
                let capsID = userCoordBD.caps;
                setCapsID(capsID);
            }
            let topsID = userCoordBD.tops;
            let pantsID = userCoordBD.pants;
            let shoesID = userCoordBD.shoes;
            let mannequinUrlData = userCoordBD.mannequin;

            setTopsID(topsID);
            setPantsID(pantsID);
            setShoesID(shoesID);
            setInnerUrl(mannequinUrlData);
        }
    }, [userCoordBD]);

    useEffect(() => {
        if (userCoordBD) {
            openBtnFuncFav()
        }
    }, [userCoordBD]);

    // console.log(userCoordBD);

    return (
        <>
            {userCoordBD ? (
                <div className="displayFlex relative">
                    <div className={classes.leftbox}>

                        {/* {userCoordBD ? (context ? (userCoordBD.user_id == context.contextName.id ? <BtnLeft
                            icon={<DeleteForeverIcon fontSize={"large"} />}
                            text={'削除する'}
                            type={'delete'}
                            id={userCoordBD.id}
                            img={userCoordBD.img}
                        /> : <BtnLeft
                            icon={<AccessibilityIcon fontSize={"large"} />}
                            text={'着る'}
                            type={'wear'}
                            id={userCoordBD.id}
                            img={userCoordBD.img}
                            capsID={capsIDValue}
                            topsID={topsIDValue}
                            pantsID={pantsIDValue}
                            shoesID={shoesIDValue}
                            mannequin={mannequinData}
                            userid={context.contextName.id}
                        />) : <p></p>) : <p></p>} */}
                    </div>
                    <div className={classes.imgbox}>
                        <img className={classes.img} src={userCoordBD.img} alt="" />
                    </div>
                    <OpenRightBtnFavBD
                        capsID={capsIDValue}
                        topsID={topsIDValue}
                        pantsID={pantsIDValue}
                        shoesID={shoesIDValue}
                    />
                </div>
            ) : loadingUserCoordBD ? <CircularProgress /> : (<p></p>)}
        </>
    )
})