import axios from "axios";
import { useState } from "react";

export const useGetLarossoItem = () => {
  const [userTops, setGetLarossoTops] = useState([]);
  const [loadingLarossoTops, setLoadingLarossoTops] = useState(false);
  const [errorLarossoTops, setLarossoTopsError] = useState(false);

  const getLarossoItem = (data) => {
    setLoadingLarossoTops(true);
    setLarossoTopsError(false);
    console.log(data);
    const gender = data.gender;
    const type = data.type;




    axios.get("/api/getlarosso2021", {
        params: {
            gender: gender,
            type: type,
          }
    }).then((res) => {
        console.log(res.data);
        // const getColor = res.data.color;
        // const getBrand = res.data.brand;
        // const getCategory = res.data.category;

        const data = res.data.map((wear) => ({
            id: wear.id,
            url: wear.img,
            brand: wear.brand,
            category: wear.category,
          }
      ));
      console.log(data);
      setGetLarossoTops(data);
    }).catch(() => {
        setLarossoTopsError(true);
    }).finally(() => {
        setLoadingLarossoTops(false);
    });
  };

  return { getLarossoItem, userTops, loadingLarossoTops, errorLarossoTops }
};
