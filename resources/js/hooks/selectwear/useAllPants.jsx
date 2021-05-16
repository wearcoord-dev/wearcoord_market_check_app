import axios from "axios";
import { useState } from "react";

export const useAllPants = () => {
  const [userPants, setUserPants] = useState([]);
  const [loadingPants, setLoading] = useState(false);
  const [errorPants, setError] = useState(false);

  const getPants = () => {
    setLoading(true);
    setError(false);
    console.log("pantsだよ");


    axios.get("/api/pants").then((res) => {
        console.log(res);
      const data = res.data.map((pants) => ({
        id: pants.id,
        url: pants.url,
      }));
      setUserPants(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getPants, userPants, loadingPants, errorPants }
};
