import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import { useGetRegisterCoord } from "../../hooks/mycoord/useGetRegisterCoord";
import { UserContext } from "../providers/UserProvider";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        // width: 500,
        // height: 450,
    },
    gridListTile: {
        // width: 500,
        height: 'auto !important',
        backgroundColor: theme.palette.background.paper,
    },
}));

export const Favorite = memo(() => {
    const classes = useStyles();

    const { GetRegisterCoord, userCoordData, loadingRegisterCoord, errorRegisterCoord } = useGetRegisterCoord();

    const context = useContext(UserContext);
    console.log(context);
    const userCheck = context.contextName;


    useEffect(() => {
        if (userCheck !== undefined) {
            console.log('useEffectが実行されました')
            GetRegisterCoord(context)
        }
    }, [userCheck]);

    return (
        <>
            <p>favoriteです</p>
            {userCoordData ? (
                <div className={classes.root}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {userCoordData.map((data) => (

                            <GridListTile className={classes.gridListTile} key={data.id}>
                                <p>{data.id}</p>
                                <img style={{ height: '200px' }} src={data.img} alt="" />
                            </GridListTile>
                        ))};
                  </GridList>
                </div>
            ) : <p>ありません</p>}

        </>
    )
})