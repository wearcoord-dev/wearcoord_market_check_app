import axios from "axios";
import { useState } from "react";

export const useAllCaps = () => {

  const [userCaps, setUserCaps] = useState([]);
  const [loadingCaps, setLoadingCaps] = useState(false);
  const [errorCaps, setErrorCaps] = useState(false);

  const getCaps = (props) => {
    setLoadingCaps(true);
    setErrorCaps(false);
    console.log(props.wear);

    const brand = props.brand;
    const color = props.color;
    const category = props.category;
    const type = props.wear;


    axios.get("/api/caps",{
        params: {
            brand: brand,
            color: color,
            category: category,
            type: type,
          }
    }).then((res) => {
        console.log(res.data.item);
        const getColor = res.data.color;
        const getBrand = res.data.brand;
        const getCategory = res.data.category;

      const data = res.data.item.map((caps) => ({
        id: caps.db.id,
        url: caps.url,
        brand: getBrand,
        color: getColor,
        category: getCategory,
      }
      ));
      console.log(data);
      setUserCaps(data);
    }).catch(() => {
        setErrorCaps(true);
    }).finally(() => {
        setLoadingCaps(false);
    });
  };

  return { getCaps, userCaps, loadingCaps, errorCaps }
};
