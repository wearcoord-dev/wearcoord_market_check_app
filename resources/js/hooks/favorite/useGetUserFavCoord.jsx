import axios from "axios";
import { useState } from "react";

export const useGetUserFavCoord = () => {
    const [userCoordList, setUserCoordList] = useState(null);
    const [loadingUserCoordList, setLoadingUserCoordList] = useState(false);
    const [errorUserCoordList, setErrorUserCoordList] = useState(false);



    const GetUserFavCoord = (coordid) => {
        setLoadingUserCoordList(true);
        setErrorUserCoordList(false);



        axios.get("/api/getuserfavcoord", {
            params: {
                id: coordid,
              }
        }).then((res) => {
            setUserCoordList(res.data);
          }).catch(() => {
            setErrorUserCoordList(true);
          }).finally(() => {
            setLoadingUserCoordList(false);
          });
    }
    return { GetUserFavCoord,  userCoordList, loadingUserCoordList, errorUserCoordList }

}