import { CircularProgress, makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { useGetWcFavCoord } from "../../../../hooks/favorite/useGetWcFavCoord";
import { useOpenBtnFuncFav } from "../../../../hooks/favorite/useOpenBtnFuncFav";
import { BtnLeft } from "../../../atoms/button/BtnLeft";
import { UserContext } from "../../../providers/UserProvider";
import { OpenRightBtnFav } from "../../button/OpenRightBtnFav";
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

export const WcDetail = memo((props) => {
    const { coordid } = props;
    const { GetWcFavCoord, wcCoordList, loadingWcCoordList, errorWcCoordList } = useGetWcFavCoord(null);
    const classes = useStyles();
    const context = useContext(UserContext);
    const userCheck = context.contextName;
    const { openBtnFuncFav } = useOpenBtnFuncFav();

    const [capsIDValue, setCapsID] = useState(null);
    const [topsIDValue, setTopsID] = useState(null);
    const [pantsIDValue, setPantsID] = useState(null);
    const [shoesIDValue, setShoesID] = useState(null);

    useEffect(() => {
        if (userCheck !== undefined) {
            // console.log('useEffectが実行されました');
            GetWcFavCoord(coordid);
        }
    }, [userCheck]);

    useEffect(() => {
        if (wcCoordList) {

            // nullかどうか
            if (wcCoordList.caps) {
                let capsID = wcCoordList.caps;
                setCapsID(capsID);
            }
            let topsID = wcCoordList.tops;
            let pantsID = wcCoordList.pants;
            let shoesID = wcCoordList.shoes;

            setTopsID(topsID);
            setPantsID(pantsID);
            setShoesID(shoesID);
        }
    }, [wcCoordList]);

    useEffect(() => {
        if (wcCoordList) {
            openBtnFuncFav()
        }
    }, [wcCoordList]);

    return (
        <>
            {wcCoordList ? (
                <div className="displayFlex relative">
                    <div className={classes.leftbox}>
                        {wcCoordList ? (context ? <BtnLeft
                            icon={<AccessibilityIcon fontSize={"large"} />}
                            text={'着る'}
                            type={'wear'}
                            id={wcCoordList.id}
                            img={wcCoordList.img}
                            capsID={capsIDValue}
                            topsID={topsIDValue}
                            pantsID={pantsIDValue}
                            shoesID={shoesIDValue}
                            userid={context.contextName.id}
                        /> : <p></p>) : <p></p>}
                    </div>
                    <div className={classes.imgbox}>
                        <img className={classes.img} src={wcCoordList.img} alt="" />
                    </div>
                    <OpenRightBtnFav
                        capsID={capsIDValue}
                        topsID={topsIDValue}
                        pantsID={pantsIDValue}
                        shoesID={shoesIDValue}
                    />
                </div>
            ) : loadingWcCoordList ? <CircularProgress /> : (<p></p>)}
        </>
    )
})