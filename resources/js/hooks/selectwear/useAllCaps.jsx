import axios from "axios";
import { useState } from "react";

export const useAllCaps = () => {

  const [userCaps, setUserCaps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCaps = (props) => {
    setLoading(true);
    setError(false);
    
    const brand = props.target.form[1].value;
    const color = props.target.form[2].value;
    const category = props.target.form[3].value;
    const type = props.target.form[4].value;


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
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getCaps, userCaps, loading, error }
};
