import axios from "axios";
import { useState } from "react";

export const useGetCalcSize = () => {
    const [userCalcSize, setUserCalcSize] = useState(null);
    const [loadingUserCalcSize, setLoadingUserCalcSize] = useState(false);
    const [errorUserCalcSize, setErrorUserCalcSize] = useState(false);



    const GetCalcSize = (props) => {
        setLoadingUserCalcSize(true);
        setErrorUserCalcSize(false);

        const userid = props.userid;
        const type = props.type;


        axios.get("/api/getcalcsize", {
            params: {
                userid: userid,
                type: type,
              }
        }).then((res) => {
            setUserCalcSize(res.data);
          }).catch(() => {
            setErrorUserCalcSize(true);
          }).finally(() => {
            setLoadingUserCalcSize(false);
          });
    }
    return { GetCalcSize,  userCalcSize, loadingUserCalcSize, errorUserCalcSize }

}