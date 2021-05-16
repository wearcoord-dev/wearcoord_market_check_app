import axios from "axios";
import { useState } from "react";

export const useAllTops = () => {
  const [userTops, setUserTops] = useState([]);
  const [loadingTops, setLoading] = useState(false);
  const [errorTops, setError] = useState(false);

  const getTops = () => {
    setLoading(true);
    setError(false);
    console.log("topsだよ");


    axios.get("/api/tops").then((res) => {
        console.log(res);
      const data = res.data.map((caps) => ({
        id: caps.id,
        url: caps.url,
      }));
      setUserTops(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getTops, userTops, loadingTops, errorTops }
};
