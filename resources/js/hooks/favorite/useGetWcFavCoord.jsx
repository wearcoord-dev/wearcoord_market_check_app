import axios from "axios";
import { useState } from "react";

export const useGetWcFavCoord = () => {
    const [wcCoordList, setWcCoordList] = useState(null);
    const [loadingWcCoordList, setLoadingWcCoordList] = useState(false);
    const [errorWcCoordList, setErrorWcCoordList] = useState(false);



    const GetWcFavCoord = (coordid) => {
        setLoadingWcCoordList(true);
        setErrorWcCoordList(false);


        // console.log('OK');

        axios.get("/api/getwcfavcoord", {
            params: {
                id: coordid,
              }
        }).then((res) => {
            console.log(res.data);
            setWcCoordList(res.data);
          }).catch(() => {
            setErrorWcCoordList(true);
          }).finally(() => {
            setLoadingWcCoordList(false);
          });
    }
    return { GetWcFavCoord,  wcCoordList, loadingWcCoordList, errorWcCoordList }

}