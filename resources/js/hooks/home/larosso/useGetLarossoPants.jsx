import axios from "axios";
import { useState } from "react";

export const useGetLarossoPants = () => {
  const [userPants, setGetLarossoPants] = useState([]);
  const [loadingLarossoPants, setLoadingLarossoPants] = useState(false);
  const [errorLarossoPants, setLarossoPantsError] = useState(false);

  const getLarossoPants = (data) => {
    setLoadingLarossoPants(true);
    setLarossoPantsError(false);
    // console.log(data);
    const gender = data.gender;
    const type = data.type;

    axios.get("/api/getlarosso2021", {
        params: {
            gender: gender,
            type: type,
          }
    }).then((res) => {
        // console.log(res.data);

        const data = res.data.map((wear) => ({
            id: wear.id,
            url: wear.img,
            brand: wear.brand,
            category: wear.category,
          }
      ));
    //   console.log(data);
      setGetLarossoPants(data);
    }).catch(() => {
        setLarossoPantsError(true);
    }).finally(() => {
        setLoadingLarossoPants(false);
    });
  };

  return { getLarossoPants, userPants, loadingLarossoPants, errorLarossoPants }
};
