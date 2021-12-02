import axios from "axios";
import { useState } from "react";

export const useGetUserCoord = () => {
    const [userCoordList, setUserCoordList] = useState(null);
    const [loadingUserCoordList, setLoadingUserCoordList] = useState(false);
    const [errorUserCoordList, setErrorUserCoordList] = useState(false);



    const GetUserCoord = (gender) => {
        setLoadingUserCoordList(true);
        setErrorUserCoordList(false);



        axios.get("/api/getusercoord", {
            params: {
                gender: gender,
              }
        }).then((res) => {
            setUserCoordList(res.data);
          }).catch(() => {
            setErrorUserCoordList(true);
          }).finally(() => {
            setLoadingUserCoordList(false);
          });
    }
    return { GetUserCoord,  userCoordList, loadingUserCoordList, errorUserCoordList }

}