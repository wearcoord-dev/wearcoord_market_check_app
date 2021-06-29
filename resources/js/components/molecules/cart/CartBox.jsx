import { Card, IconButton } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import { useGetCartItem } from "../../../hooks/cart/useGetCartItem";
import { UserContext } from "../../providers/UserProvider";
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "10px auto",
        maxWidth: "300px",
    },
    cardwrap: {
        margin: "70px 0",
    }
});

export const CartBox = memo((props) => {
    const { type } = props;
    const { GetCartItem, userItemCartInfo } = useGetCartItem();
    const context = useContext(UserContext);
    const classes = useStyles();

    useEffect(() => {
        if (context.contextName) {
            const user = context.contextName;
            // console.log(user);
            GetCartItem(type, user);
        }
    }, [context])


    return (
        <>
            <div className={classes.cardwrap}>
                {userItemCartInfo ? (
                    <>
                        {userItemCartInfo.map((item) => (
                            <div key={item.id} style={{ display: "flex", maxWidth: "400px", margin: "auto" }}>
                                <Card className={classes.root}>
                                    <div style={{ display: "flex", justifyContent: "center" }} dangerouslySetInnerHTML={{ __html: item.moshimoLink }}></div>
                                </Card>
                                <IconButton color="secondary" aria-label="add an delete">
                                    <DeleteForeverIcon fontSize="large" />
                                </IconButton>
                            </div>
                        ))}
                    </>
                ) : <p>ありません</p>}
            </div>
        </>
    )
})