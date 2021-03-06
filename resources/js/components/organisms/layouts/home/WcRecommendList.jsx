import { memo, useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from "../../../providers/UserProvider";
import { useGetRecoCoord } from "../../../../hooks/home/useGetRecoCoord";
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles({
    root: {

    },
    img: {
        width: "80px",
    },
    ul: {
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "0 0 10px 0",
        margin: "0 0 20px 0",
    },
    li: {
        display: "inline-block",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        margin: "10px",
        borderRadius: "10px",
        width: "100px",
        textAlign: "center",
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
    },
    h2title: {
        // borderBottom: "1px solid #484848",
        paddingBottom: "2px",
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "16px",
    },
    h2parrent: {
        width: "90%",
        margin: "auto",
        padding: "30px 0",
    },
    loading: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    }
});

export const WcRecommendList = memo(() => {
    const { GetRecoCoord,  recoCoordList, loadingRecoCoordList, errorRecoCoordList } = useGetRecoCoord();
    const classes = useStyles();
    const context = useContext(UserContext);
    const userData = context.contextName;
    const history = useHistory();

    useEffect(() => {
        if (userData !== undefined) {
            const gender = userData.gender;
            GetRecoCoord(gender);
        }
    }, [userData]);

    const onClickDetailCoord = (props) => {
        history.push({
            pathname: '/main/wcdetail',
            state: { id: props }
        });
    }

    return (
        <>
        <div>
            <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>???????????????????????? by wearcoord</h2>
            </div>
            <div>
                {recoCoordList ? (errorRecoCoordList ? (<p>???????????????????????????????????????</p>) : loadingRecoCoordList ? (<p>Loading...</p>) : (
                    <>
                        <ul className={classes.ul}>
                            {recoCoordList.map((item) => (
                                <li className={classes.li} key={item.id}
                                onClick={onClickDetailCoord.bind(this, item.id)}
                                >
                                    <img className={classes.img} src={item.img} alt="" />
                                </li>
                            ))}
                        </ul>
                    </>
                )) : loadingRecoCoordList ? <div className={classes.loading}><CircularProgress /></div> : <p>??????????????????????????????</p>}
            </div>
        </div>
        </>
    )
})