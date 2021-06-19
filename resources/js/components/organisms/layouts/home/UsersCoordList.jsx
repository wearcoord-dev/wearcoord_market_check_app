import { memo, useContext, useEffect } from "react";
import { useGetUserCoord } from "../../../../hooks/home/useGetUserCoord";
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from "../../../providers/UserProvider";
import { useHistory } from "react-router-dom";


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

export const UsersCoordList = memo(() => {
    const { GetUserCoord, userCoordList, loadingUserCoordList, errorUserCoordList } = useGetUserCoord();
    const classes = useStyles();
    const context = useContext(UserContext);
    const userData = context.contextName;
    const history = useHistory();

    useEffect(() => {
        if (userData !== undefined) {
            // console.log('useEffectが実行されました');
            const gender = userData.gender;
            GetUserCoord(gender);
        }
    }, [userData]);

    const onClickDetailCoord = (props) => {
        history.push({
            pathname: '/main/detail',
            state: { id: props }
        });
    }

    return (
        <>
        <div>
            <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>みんなの最新コーデ</h2>
            </div>
            <div>
                {userCoordList ? (errorUserCoordList ? (<p>データの取得に失敗しました</p>) : loadingUserCoordList ? (<p>Loading...</p>) : (
                    <>
                        <ul className={classes.ul}>
                            {userCoordList.map((item) => (
                                <li className={classes.li} key={item.id}
                                onClick={onClickDetailCoord.bind(this, item.id)}
                                >
                                    <img className={classes.img} src={item.img} alt="" />
                                </li>
                            ))}
                        </ul>
                    </>
                )) : loadingUserCoordList ? <p>Loading...</p> : <p>アイテムがありません</p>}
            </div>
        </div>
        </>
    )
})