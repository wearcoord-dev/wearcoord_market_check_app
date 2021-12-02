import axios from "axios";
import { useState } from "react";

export const useGetLarossoPants = () => {
  const [userPants, setGetLarossoPants] = useState([]);
  const [loadingLarossoPants, setLoadingLarossoPants] = useState(false);
  const [errorLarossoPants, setLarossoPantsError] = useState(false);

  const getLarossoPants = (data) => {
    setLoadingLarossoPants(true);
    setLarossoPantsError(false);
    const gender = data.gender;
    const type = data.type;

    axios.get("/api/getlarosso2021", {
        params: {
            gender: gender,
            type: type,
          }
    }).then((res) => {

        const data = res.data.map((wear) => ({
            id: wear.id,
            url: wear.img,
            brand: wear.brand,
            category: wear.category,
          }
      ));
      setGetLarossoPants(data);
    }).catch(() => {
        setLarossoPantsError(true);
    }).finally(() => {
        setLoadingLarossoPants(false);
    });
  };

  return { getLarossoPants, userPants, loadingLarossoPants, errorLarossoPants }
};
