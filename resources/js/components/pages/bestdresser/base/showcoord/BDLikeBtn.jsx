import { CircularProgress, makeStyles } from "@material-ui/core";
import { memo, useEffect } from "react";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { useGetBDLikeInfo } from "../../../../../hooks/bestdresser/useGetBDLikeInfo";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "right",
        height: "10px",
    },
    clickArea: {
        // width: "50px",
        // height: "50px",
        // position: "absolute",
        // right: "0",
    }
});

export const BDLikeBtn = memo((props) => {
    const { item, userData } = props;
    const { GetBDLikeInfo, BDLikeInfo, loadingBDLikeInfo, errorBDLikeInfo } = useGetBDLikeInfo()
    const classes = useStyles();


    const userId = userData.contextName.id;

    useEffect(() => {
        GetBDLikeInfo(item, userId);
    }, []);

    const postBDLike = async () => {
        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            coord: item.id,
            user_id: userId,
        }

        const setUrl = '/bestdresser/postBDCoord';

        await axios.post(setUrl, setData, header).then((res) => {
            window.location.href = "/main/bestdresser/main/show";
        }).catch(() => {
        }).finally(() => {
        });
    }

    const deleteBDLike = async () => {
        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            coord: item.id,
            user_id: userId,
        }

        const setUrl = '/bestdresser/deleteBDCoord';

        await axios.post(setUrl, setData, header).then((res) => {
            window.location.href = "/main/bestdresser/main/show";
        }).catch(() => {
        }).finally(() => {
        });
    }


    return (
        <>
            {loadingBDLikeInfo ? (
                <>
                    <div className={classes.root}>
                        <CircularProgress />
                    </div>
                </>
            ) : (
                <>
                    {BDLikeInfo == false ? (
                        <div className={classes.clickArea} onClick={postBDLike}>
                            <i ><FavoriteRoundedIcon style={{ fontSize: "30px", color: "silver" }} /></i>
                        </div>
                    ) : (
                        <div className={classes.clickArea} onClick={deleteBDLike}>
                        <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "orangered" }} /></i>
                        </div>
            )}
        </>
    )
}
        </>
    )
})