import axios from "axios";
import { useState } from "react";

export const useGetBDMyPostCoord = () => {
    const [userBDMyPostCoord, setBDMyPostCoord] = useState(null);
    const [loadingBDMyPostCoord, setLoadingBDMyPostCoord] = useState(false);
    const [errorBDMyPostCoord, setErrorBDMyPostCoord] = useState(false);


    const GetBDMyPostCoord = async(props) => {
        setLoadingBDMyPostCoord(true);
        setErrorBDMyPostCoord(false);
        console.log(props)

        axios.get("/api/bestdresser/bdMyPostCoord", {
            params: {
                user_id: props.contextName.id,

              }
        }).then((res) => {
            setBDMyPostCoord(res.data);
            console.log(res.data)
        }).catch(() => {
            setErrorBDMyPostCoord(true);
        }).finally(() => {
            setLoadingBDMyPostCoord(false);
        });
    }
    return { GetBDMyPostCoord,  userBDMyPostCoord, loadingBDMyPostCoord, errorBDMyPostCoord }

}