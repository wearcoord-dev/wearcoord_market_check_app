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
    const page = props.page;



    axios.get("/api/tops", {
        params: {
            brand: brand,
            color: color,
            category: category,
            type: type,
            page: page,
          }
    }).then((res) => {
        console.log(res.data.item);
        const getColor = res.data.color;
        const getBrand = res.data.brand;
        const getCategory = res.data.category;
        const count = res.data.count;

        const data = res.data.item.map((wear) => ({
            id: wear.db.id,
            dbbrand: wear.db.brand,
            url: wear.url,
            brand: getBrand,
            color: getColor,
            category: getCategory,
            count: count,
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
