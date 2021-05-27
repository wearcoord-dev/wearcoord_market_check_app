import axios from "axios";
import { useState } from "react";

export const useGetUserWear = () => {
    const [userWearInfo, setUserWearInfo] = useState(null);
    const [loadingWear, setLoadingWear] = useState(false);
    const [errorWear, setErrorWear] = useState(false);



    const GetWear = (props) => {
        setLoadingWear(true);
        setErrorWear(false);


        console.log('OK');
        console.log(props);
        const userid = props.userData.id;

        axios.get("/getwear", {
            params: {
                id: userid,
              }
        }).then((res) => {
            // console.log(res.data);
            setUserWearInfo(res.data);
          }).catch(() => {
            setErrorWear(true);
          }).finally(() => {
            setLoadingWear(false);
          });
    }
    return { GetWear,  userWearInfo, loadingWear, errorWear }

}