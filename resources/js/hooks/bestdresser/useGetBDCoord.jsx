import axios from "axios";
import { useState } from "react";

export const useGetBDCoord = () => {
    const [userCoordBD, setUserCoordBD] = useState(null);
    const [loadingUserCoordBD, setLoadingUserCoordBD] = useState(false);
    const [errorUserCoordBD, setErrorUserCoordBD] = useState(false);



    const GetUserBDCoord = (coordid) => {
        setLoadingUserCoordBD(true);
        setErrorUserCoordBD(false);



        axios.get("/api/bestdresser/getuserBDcoord", {
            params: {
                id: coordid,
              }
        }).then((res) => {
            setUserCoordBD(res.data);
          }).catch(() => {
            setErrorUserCoordBD(true);
          }).finally(() => {
            setLoadingUserCoordBD(false);
          });
    }
    return { GetUserBDCoord,  userCoordBD, loadingUserCoordBD, errorUserCoordBD }

}