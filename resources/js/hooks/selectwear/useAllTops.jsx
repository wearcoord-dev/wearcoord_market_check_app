import axios from "axios";
import { useState } from "react";

export const useAllTops = () => {
  const [userTops, setUserTops] = useState([]);
  const [loadingTops, setLoadingTops] = useState(false);
  const [errorTops, setError] = useState(false);

  const getTops = (props) => {
    setLoadingTops(true);
    setError(false);
    // console.log("topsだよ");
    const brand = props.brand;
    const color = props.color;
    const category = props.category;
    const type = props.wear;


    axios.get("/api/tops", {
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

        const data = res.data.item.map((wear) => ({
            id: wear.db.id,
            url: wear.url,
            brand: getBrand,
            color: getColor,
            category: getCategory,
          }
      ));
      console.log(data);
      setUserTops(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoadingTops(false);
    });
  };

  return { getTops, userTops, loadingTops, errorTops }
};
