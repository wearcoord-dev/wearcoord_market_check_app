import axios from "axios";
import { useState } from "react";

export const useGetUserSize = () => {
    const [userSize, setUserSize] = useState(null);
    const [loadingUserSize, setLoadingUserSize] = useState(false);
    const [errorUserSize, setErrorUserSize] = useState(false);



    const GetUserSize = (props) => {
        setLoadingUserSize(true);
        setErrorUserSize(false);



        axios.get("/api/getusersize", {
            params: {
                id: props,
              }
        }).then((res) => {
            setUserSize(res.data);
          }).catch(() => {
            setErrorUserSize(true);
          }).finally(() => {
            setLoadingUserSize(false);
          });
    }
    return { GetUserSize,  userSize, loadingUserSize, errorUserSize }

}