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
});

export const BDLikeBtn = memo((props) => {
    const { item, userData } = props;
    const { GetBDLikeInfo, BDLikeInfo, loadingBDLikeInfo, errorBDLikeInfo } = useGetBDLikeInfo()
    const classes = useStyles();

    // console.log(userData.contextName.id)

    const userId = userData.contextName.id;

    useEffect(() => {
        GetBDLikeInfo(item, userId);
    }, []);

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
                        <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "silver" }} /></i>
                    ) : (
                        <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "red" }} /></i>
                    )}
                </>
            )
            }
        </>
    )
})