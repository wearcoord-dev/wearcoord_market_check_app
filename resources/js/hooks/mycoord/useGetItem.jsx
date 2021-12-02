import axios from "axios";
import { useState } from "react";

export const useGetItem = () => {
    const [userItemInfo, setUserItemInfo] = useState(null);
    const [loadingItem, setLoadingItem] = useState(false);
    const [errorItem, setErrorItem] = useState(false);



    const GetItem = (type, item) => {
        setLoadingItem(true);
        setErrorItem(false);

        axios.get("/api/getitem", {
            params: {
                id: item,
                type: type,
              }
        }).then((res) => {
            setUserItemInfo(res.data);
          }).catch(() => {
            setErrorItem(true);
          }).finally(() => {
            setLoadingItem(false);
          });
    }
    return { GetItem,  userItemInfo, loadingItem, errorItem }

}