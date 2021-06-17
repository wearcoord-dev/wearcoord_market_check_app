import { memo, useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from "../../../providers/UserProvider";
import { useGetRecoCoord } from "../../../../hooks/home/useGetRecoCoord";


const useStyles = makeStyles({
    root: {

    },
    img: {
        width: "80px",
    },
    ul: {
        overflowX: "auto",
        whiteSpace: "nowrap",
    },
    li: {
        display: "inline-block",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        margin: "10px",
        borderRadius: "10px",
        width: "100px",
        textAlign: "center",
    },
    h2title: {
        borderBottom: "1px solid #484848",
        paddingBottom: "2px",
        display: "inline-block",
    },
    h2parrent: {
        width: "90%",
        margin: "auto",
    }
});

export const WcRecommendList = memo(() => {
    const { GetRecoCoord,  recoCoordList, loadingRecoCoordList, errorRecoCoordList } = useGetRecoCoord();
    const classes = useStyles();
    const context = useContext(UserContext);
    const userData = context.contextName;

    useEffect(() => {
        if (userData !== undefined) {
            // console.log('useEffectが実行されました');
            const gender = userData.gender;
            GetRecoCoord(gender);
        }
    }, [userData]);

    return (
        <>
        <div>
            <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>オススメのコーデ by wearcoord</h2>
            </div>
            <div>
                {recoCoordList ? (errorRecoCoordList ? (<p>データの取得に失敗しました</p>) : loadingRecoCoordList ? (<p>Loading...</p>) : (
                    <>
                        <ul className={classes.ul}>
                            {recoCoordList.map((item) => (
                                <li className={classes.li} key={item.id}>
                                    <img className={classes.img} src={item.outfitSetImg} alt="" />
                                </li>
                            ))}
                        </ul>
                    </>
                )) : loadingRecoCoordList ? <p>Loading...</p> : <p>アイテムがありません</p>}
            </div>
        </div>
        </>
    )
})