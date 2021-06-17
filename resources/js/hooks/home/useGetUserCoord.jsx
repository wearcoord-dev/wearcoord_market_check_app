import axios from "axios";
import { useState } from "react";

export const useGetUserCoord = () => {
    const [userCoordList, setUserCoordList] = useState(null);
    const [loadingUserCoordList, setLoadingUserCoordList] = useState(false);
    const [errorUserCoordList, setErrorUserCoordList] = useState(false);



    const GetUserCoord = () => {
        setLoadingUserCoordList(true);
        setErrorUserCoordList(false);


        // console.log('OK');

        axios.get("/api/getusercoord", {
            params: {
              }
        }).then((res) => {
            console.log(res.data);
            setUserCoordList(res.data);
          }).catch(() => {
            setErrorUserCoordList(true);
          }).finally(() => {
            setLoadingUserCoordList(false);
          });
    }
    return { GetUserCoord,  userCoordList, loadingUserCoordList, errorUserCoordList }

}