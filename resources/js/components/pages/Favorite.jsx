import { CircularProgress, GridList, GridListTile, makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGetRegisterCoord } from "../../hooks/mycoord/useGetRegisterCoord";
import { UserContext } from "../providers/UserProvider";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        margin: '0 auto 70px',
    },
    gridList: {
        // width: 500,
        // height: 450,
        justifyContent: 'center',
    },
    gridListTile: {
        width: '150px !important',
        height: 'auto !important',
        backgroundColor: theme.palette.background.paper,
        margin: '10px',
    },
}));

export const Favorite = memo(() => {
    const classes = useStyles();
    const history = useHistory();

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

    const onClickDetailCoord = (props) => {
        // alert(id);
        // history.push("/main/detail");
        console.log(props);
        history.push({
            pathname: '/main/detail',
            state: { id: props }
        });
    }

    return (
        <>
        <p style={{ textAlign:'center' }}>お気に入り登録したコーデ一覧</p>
            {userCoordData ? (
                <div className={classes.root}>
                    <GridList cellHeight={160} className={classes.gridList}>
                        {userCoordData.map((data) => (

                            <GridListTile className={classes.gridListTile} key={data.id} onClick={onClickDetailCoord.bind(this, data.id)} >
                                <img style={{ height: '200px', objectFit: 'contain', }} src={data.img} alt="" />
                            </GridListTile>
                        ))};
                  </GridList>
                </div>
            ) : loadingRegisterCoord ? <CircularProgress /> : (<p></p>)}
        </>
    )
})