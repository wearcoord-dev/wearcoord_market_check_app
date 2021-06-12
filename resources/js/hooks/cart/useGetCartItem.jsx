import axios from "axios";
import { useState } from "react";

export const useGetCartItem = () => {
    const [userItemCartInfo, setUserCartItemInfo] = useState(null);
    const [loadingCartItem, setLoadingCartItem] = useState(false);
    const [errorCartItem, setErrorCartItem] = useState(false);



    const GetCartItem = (type, user) => {
        setLoadingCartItem(true);
        setErrorCartItem(false);

        const userId = user.id;

        axios.get("/api/getcartitem", {
            params: {
                id: userId,
                type: type,
              }
        }).then((res) => {
            console.log(res.data);
            setUserCartItemInfo(res.data);
          }).catch(() => {
            setErrorCartItem(true);
          }).finally(() => {
            setLoadingCartItem(false);
          });
    }
    return { GetCartItem, userItemCartInfo }

}