import { makeStyles } from "@material-ui/core";
import { memo, useContext } from "react";
import { AppContext } from "../../../../providers/UserWear";
import { ChainCup2021 } from "../../contents/ChainCup2021";
import { MainBestDresser } from "../../contents/MainBestDresser";
import { BestDressUserInfo } from "./BestDressUserInfo";

const useStyles = makeStyles({
    root: {
        margin: "10px 0",
    },
});

export const TopBase = memo(() => {
    const classes = useStyles();
    const context = useContext(AppContext);
    const userCheck = context.contextName;
    console.log(userCheck);

    return (
        <>
        { userCheck ?
        <>
            <BestDressUserInfo tour_id={userCheck.tour_id} />
            <section className={classes.root}>
                { userCheck.tour_id == 1 && <ChainCup2021 />}
                { userCheck.tour_id == 2 && <MainBestDresser />}
            </section>
        </>
         :  <p>ng</p> }
        </>
    )
})