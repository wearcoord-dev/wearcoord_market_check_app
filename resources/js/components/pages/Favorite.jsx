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
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        margin: '10px',
        borderRadius: '10px',
    },
    loading: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    }
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
        <h3 style={{ textAlign:'center', padding: "30px 0" }}>お気に入り登録したコーデ一覧</h3>
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
            ) : loadingRegisterCoord ? <div className={classes.loading}><CircularProgress /></div> : (<p></p>)}
        </>
    )
})