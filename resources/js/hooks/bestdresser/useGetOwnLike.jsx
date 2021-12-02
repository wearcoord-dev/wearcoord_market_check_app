import axios from "axios";
import { useState } from "react";

export const useGetOwnLike = () => {
    const [userOwnLike, setUserOwnLike] = useState(null);
    const [loadingOwnLike, setLoadingOwnLike] = useState(false);
    const [errorOwnLike, setErrorOwnLike] = useState(false);


    const GetOwnLike = async(props) => {
        setLoadingOwnLike(true);
        setErrorOwnLike(false);

        axios.get("/api/bestdresser/getOwnLike", {
            params: {
                user_id: props.contextName.id,
              }
        }).then((res) => {
            setUserOwnLike(res.data);
        }).catch(() => {
            setErrorOwnLike(true);
        }).finally(() => {
            setLoadingOwnLike(false);
        });
    }
    return { GetOwnLike,  userOwnLike, loadingOwnLike, errorOwnLike }

}