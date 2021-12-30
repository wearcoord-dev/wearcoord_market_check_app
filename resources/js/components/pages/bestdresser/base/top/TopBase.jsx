import { CircularProgress, makeStyles } from "@material-ui/core";
import { memo, useContext } from "react";
import { AppContext } from "../../../../providers/UserWear";
import { ChainCup2021 } from "../../contents/ChainCup2021";
import { MainBestDresser } from "../../contents/MainBestDresser";
import { ChainCupNewYear2022 } from "../../contents/tour/ChainCupNewYear2022";
import { BestDressUserInfo } from "./BestDressUserInfo";


const useStyles = makeStyles({
    root: {
        margin: "10px 0",
    },
    progress: {
        display: "flex",
        justifyContent: "center",
        height: "50vh",
        alignItems: "center",
    },
    bottom: {
        paddingBottom: "100px",
    }
});

export const TopBase = memo(() => {
    const classes = useStyles();
    const context = useContext(AppContext);
    const userCheck = context.contextName;

    return (
        <>
        { userCheck ?
        <>
            <BestDressUserInfo tour_id={userCheck.tour_id} user_id={userCheck.id} />
            <section className={classes.root}>
                { userCheck.tour_id == 1 && <ChainCup2021 />}
                { userCheck.tour_id == 4 && <ChainCup2021 user={userCheck} />}
                { userCheck.tour_id == 2 && <MainBestDresser />}
                { userCheck.tour_id == 5 && <ChainCupNewYear2022 />}
                <div className={classes.bottom}></div>
            </section>
        </>
         :  (
            <div className={classes.progress}>
            <CircularProgress />
          </div>
         ) }
        </>
    )
})