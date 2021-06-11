import axios from "axios";
import { useState } from "react";

export const useGetItem = () => {
    const [userItemInfo, setUserItemInfo] = useState(null);
    const [loadingItem, setLoadingItem] = useState(false);
    const [errorItem, setErrorItem] = useState(false);



    const GetItem = (type, item) => {
        setLoadingItem(true);
        setErrorItem(false);


        // console.log('OK');
        console.log(type);
        console.log(item);

        axios.get("/api/getitem", {
            params: {
                id: item,
                type: type,
              }
        }).then((res) => {
            console.log(res.data);
            setUserItemInfo(res.data);
          }).catch(() => {
            setErrorItem(true);
          }).finally(() => {
            setLoadingItem(false);
          });
    }
    return { GetItem,  userItemInfo, loadingItem, errorItem }

}