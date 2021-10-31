import axios from "axios";
import { useState } from "react";

export const useGetBDUserWear = () => {
    const [userBDWear, setUserBDWear] = useState(null);
    const [loadingBDUserWear, setLoadingBDUserWear] = useState(false);
    const [errorBDUserWear, setErrorBDUserWear] = useState(false);


    const GetBDUserWear = async(props) => {
        setLoadingBDUserWear(true);
        setErrorBDUserWear(false);
        console.log(props)

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            "user_id": props.contextName.id,
            "tour_id": props.contextName.tour_id,
        }
        const url = '/api/bestdresser/bdUserWear';

        await axios.post(url, setData, header).then((res) => {
            setUserBDWear(res.data);
            console.log(res.data)
        }).catch(() => {
            setErrorBDUserWear(true);
        }).finally(() => {
            setLoadingBDUserWear(false);
        });
    }
    return { GetBDUserWear,  userBDWear, loadingBDUserWear, errorBDUserWear }

}