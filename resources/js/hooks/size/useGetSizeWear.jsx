import axios from "axios";
import { useState } from "react";

export const useGetSizeWear = () => {
    const [userSizeWear, setUserSizeWear] = useState(null);
    const [loadingUserSizeWear, setLoadingUserSizeWear] = useState(false);
    const [errorUserSizeWear, setErrorUserSizeWear] = useState(false);



    const GetUserSizeWear = (props, gender) => {
        setLoadingUserSizeWear(true);
        setErrorUserSizeWear(false);

        const brand = props.brand;
        const size = props.size;
        const type = props.type;


        axios.get("/api/getsizewear", {
            params: {
                brand: brand,
                size: size,
                type: type,
                gender: gender,
              }
        }).then((res) => {
            setUserSizeWear(res.data);
          }).catch(() => {
            setErrorUserSizeWear(true);
          }).finally(() => {
            setLoadingUserSizeWear(false);
          });
    }
    return { GetUserSizeWear,  userSizeWear, loadingUserSizeWear, errorUserSizeWear }

}