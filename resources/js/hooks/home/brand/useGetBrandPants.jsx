import axios from "axios";
import { useState } from "react";

export const useGetBrandPants = () => {
  const [userPants, setGetBrandPants] = useState([]);
  const [loadingBrandPants, setLoadingBrandPants] = useState(false);
  const [errorBrandPants, setBrandPantsError] = useState(false);

  const getBrandPants = (data) => {
    setLoadingBrandPants(true);
    setBrandPantsError(false);
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
      setGetBrandPants(data);
    }).catch(() => {
        setBrandPantsError(true);
    }).finally(() => {
        setLoadingBrandPants(false);
    });
  };

    return { getBrandPants, userPants, loadingBrandPants, errorBrandPants }
};
