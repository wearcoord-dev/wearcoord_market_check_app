import axios from "axios";
import { useState } from "react";

export const useGetBrandTops = () => {
  const [userTops, setGetBrandTops] = useState([]);
  const [loadingBrandTops, setLoadingBrandTops] = useState(false);
  const [errorBrandTops, setBrandTopsError] = useState(false);

  const getBrandTops = (data) => {
    setLoadingBrandTops(true);
    setBrandTopsError(false);
    const gender = data.gender;
    const type = data.type;
    const brand = data.brand;

    axios.get("/api/getbrandtops", {
        params: {
            gender: gender,
            type: type,
            brand: brand,
          }
    }).then((res) => {

        const data = res.data.map((wear) => ({
            id: wear.id,
            url: wear.img,
            brand: wear.brand,
            category: wear.category,
          }
      ));
      setGetBrandTops(data);
    }).catch(() => {
        setBrandTopsError(true);
    }).finally(() => {
        setLoadingBrandTops(false);
    });
  };

    return { getBrandTops, userTops, loadingBrandTops, errorBrandTops }
};
