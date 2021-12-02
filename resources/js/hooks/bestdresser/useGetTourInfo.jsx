import axios from "axios";
import { useState } from "react";

export const useGetTourInfo = () => {
    const [userTourInfo, setUserTourInfo] = useState(null);
    const [loadingTourInfo, setLoadingTourInfo] = useState(false);
    const [errorTourInfo, setErrorTourInfo] = useState(false);


    const GetTourInfo = async(props) => {
        setLoadingTourInfo(true);
        setErrorTourInfo(false);

        axios.get("/api/bestdresser/getBDTourInfo", {
            params: {
                user_id: props.contextName.id,
              }
        }).then((res) => {
            setUserTourInfo(res.data);
        }).catch(() => {
            setErrorTourInfo(true);
        }).finally(() => {
            setLoadingTourInfo(false);
        });
    }
    return { GetTourInfo,  userTourInfo, loadingTourInfo, errorTourInfo }

}