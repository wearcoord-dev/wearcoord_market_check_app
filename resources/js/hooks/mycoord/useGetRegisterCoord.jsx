import axios from "axios";
import { useState } from "react";

export const useGetRegisterCoord = () => {
    const [userCoordData, setUserCoordData] = useState(null);
    const [loadingRegisterCoord, setLoadingRegisterCoord] = useState(false);
    const [errorRegisterCoord, setErrorRegisterCoord] = useState(false);



    const GetRegisterCoord = (props) => {
        setLoadingRegisterCoord(true);
        setErrorRegisterCoord(false);

        const userid = props.contextName.id;

        axios.get("/getregistercoord", {
            params: {
                id: userid,
              }
        }).then((res) => {
            setUserCoordData(res.data);
          }).catch(() => {
            setErrorRegisterCoord(true);
          }).finally(() => {
            setLoadingRegisterCoord(false);
          });
    }
    return { GetRegisterCoord,  userCoordData, loadingRegisterCoord, errorRegisterCoord }

}