import axios from "axios";
import { useState } from "react";

export const useGetUserWear = () => {
    const [userWearInfo, setUserWearInfo] = useState(null);
    const [loadingWear, setLoadingWear] = useState(false);
    const [errorWear, setErrorWear] = useState(false);



    const GetWear = (props) => {
        setLoadingWear(true);
        setErrorWear(false);

        const userid = props.contextName.id;

        axios.get("/getwear", {
            params: {
                id: userid,
              }
        }).then((res) => {
            setUserWearInfo(res.data);
          }).catch(() => {
            setErrorWear(true);
          }).finally(() => {
            setLoadingWear(false);
          });
    }
    return { GetWear,  userWearInfo, loadingWear, errorWear }

}