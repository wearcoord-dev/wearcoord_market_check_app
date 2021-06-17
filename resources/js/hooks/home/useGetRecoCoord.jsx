import axios from "axios";
import { useState } from "react";

export const useGetRecoCoord = () => {
    const [recoCoordList, setRecoCoordList] = useState(null);
    const [loadingRecoCoordList, setLoadingRecoCoordList] = useState(false);
    const [errorRecoCoordList, setErrorRecoCoordList] = useState(false);



    const GetRecoCoord = (gender) => {
        setLoadingRecoCoordList(true);
        setErrorRecoCoordList(false);


        // console.log('OK');

        axios.get("/api/getrecocoord", {
            params: {
                gender: gender,
              }
        }).then((res) => {
            console.log(res.data);
            setRecoCoordList(res.data);
          }).catch(() => {
            setErrorRecoCoordList(true);
          }).finally(() => {
            setLoadingRecoCoordList(false);
          });
    }
    return { GetRecoCoord,  recoCoordList, loadingRecoCoordList, errorRecoCoordList }

}