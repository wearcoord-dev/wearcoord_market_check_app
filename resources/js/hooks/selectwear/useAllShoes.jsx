import axios from "axios";
import { useState } from "react";

export const useAllShoes = () => {
  const [userShoes, setUserShoes] = useState([]);
  const [loadingShoes, setLoading] = useState(false);
  const [errorShoes, setError] = useState(false);

  const getShoes = () => {
    setLoading(true);
    setError(false);
    console.log("shoesだよ");


    axios.get("/api/shoes").then((res) => {
        console.log(res);
      const data = res.data.map((shoes) => ({
        id: shoes.id,
        url: shoes.url,
      }));
      setUserShoes(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getShoes, userShoes, loadingShoes, errorShoes }
};
