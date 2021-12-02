import axios from "axios";
import { useState } from "react";

export const useGetBDLikeInfo = () => {
    const [BDLikeInfo, setBDLikeInfo] = useState(null);
    const [loadingBDLikeInfo, setLoadingBDLikeInfo] = useState(false);
    const [errorBDLikeInfo, setErrorBDLikeInfo] = useState(false);


    const GetBDLikeInfo = async(props, userId) => {
        setLoadingBDLikeInfo(true);
        setErrorBDLikeInfo(false);

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            "user_id": userId,
            "coord": props.id,
        }
        const url = '/api/bestdresser/getLikeCoord';

        await axios.post(url, setData, header).then((res) => {
            setBDLikeInfo(res.data);
        }).catch(() => {
            setErrorBDLikeInfo(true);
        }).finally(() => {
            setLoadingBDLikeInfo(false);
        });
    }
    return { GetBDLikeInfo,  BDLikeInfo, loadingBDLikeInfo, errorBDLikeInfo }

}