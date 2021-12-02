import axios from "axios";
import { useState } from "react";

export const useGetLarossoItem = () => {
  const [userTops, setGetLarossoTops] = useState([]);
  const [loadingLarossoTops, setLoadingLarossoTops] = useState(false);
  const [errorLarossoTops, setLarossoTopsError] = useState(false);

  const getLarossoItem = (data) => {
    setLoadingLarossoTops(true);
    setLarossoTopsError(false);
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
      setGetLarossoTops(data);
    }).catch(() => {
        setLarossoTopsError(true);
    }).finally(() => {
        setLoadingLarossoTops(false);
    });
  };

  return { getLarossoItem, userTops, loadingLarossoTops, errorLarossoTops }
};
