import { makeStyles } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../providers/UserProvider";
import { ItemShowSection } from "./ItemShowSection";

const useStyles = makeStyles((theme) => ({
    h2title: {
        padding: '16px 0',
        textAlign: 'center',
    },
    bottom: {
        paddingBottom: '150px',
    }
}));

export const ItemFirstPage = memo(() => {
    const classes = useStyles();
    const context = useContext(UserContext);

    const [gender, setGender] = useState();


    useEffect(() => {
        if (context.contextName) {
            const data = context.contextName.gender;
            setGender(data);
        }
    }, [context])

    return (
        <>
            <h2 className={classes.h2title}>新着アイテム</h2>
            {gender ? (
                <>
                    <ItemShowSection
                        gender={gender}
                        type={'caps'}
                    />
                    <ItemShowSection
                        gender={gender}
                        type={'tops'}
                    />
                    <div className={classes.bottom}></div>
                </>
            ) : <></>}
        </>
    )
})