import axios from "axios";
import { useState } from "react";

export const useGetBDUserInfo = () => {
    const [userBDInfo, setUserBDInfo] = useState(null);
    const [loadingBDUserInfo, setLoadingBDUserInfo] = useState(false);
    const [errorBDUserInfo, setErrorBDUserInfo] = useState(false);


    const GetBDUserInfo = async(props) => {
        setLoadingBDUserInfo(true);
        setErrorBDUserInfo(false);

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            "user_id": props.contextName.id,
            "tour_id": props.contextName.tour_id,
        }
        const url = '/api/bestdresser/bdUserInfo';

        await axios.post(url, setData, header).then((res) => {
            setUserBDInfo(res.data);
        }).catch(() => {
            setErrorBDUserInfo(true);
        }).finally(() => {
            setLoadingBDUserInfo(false);
        });
    }
    return { GetBDUserInfo,  userBDInfo, loadingBDUserInfo, errorBDUserInfo }

}