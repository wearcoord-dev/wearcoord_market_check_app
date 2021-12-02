import axios from "axios";
import { useState } from "react";

export const useGetBDCoordList = () => {
    const [userCoordList, setUserCoordList] = useState(null);
    const [loadingBDCoordList, setLoadingBDCoordList] = useState(false);
    const [errorBDCoordList, setErrorBDCoordList] = useState(false);


    const GetBDCoordList = async(props) => {
        setLoadingBDCoordList(true);
        setErrorBDCoordList(false);

        axios.get("/api/bestdresser/bdCoordList", {
            params: {
                user_id: props.contextName.id,

              }
        }).then((res) => {
            setUserCoordList(res.data);
        }).catch(() => {
            setErrorBDCoordList(true);
        }).finally(() => {
            setLoadingBDCoordList(false);
        });
    }
    return { GetBDCoordList,  userCoordList, loadingBDCoordList, errorBDCoordList }

}