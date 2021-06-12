import { Card } from "@material-ui/core";
import { memo, useContext, useEffect } from "react";
import { useGetCartItem } from "../../../hooks/cart/useGetCartItem";
import { UserContext } from "../../providers/UserProvider";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: "10px 0",
    },
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
            {userItemCartInfo ? (
                <>
                    {userItemCartInfo.map((item) => (
                        <Card className={classes.root} key={item.id}>
                            <div style={{ display: "flex", justifyContent: "center" }} dangerouslySetInnerHTML={{ __html: item.moshimoLink }}></div>

                        </Card>
                    ))}
                </>
            ) : <p>ありません</p>}
        </>
    )
})