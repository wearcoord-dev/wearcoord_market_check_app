import axios from "axios";
import { useState } from "react";

export const useAllCaps = () => {

  const [userCaps, setUserCaps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCaps = (props) => {
    setLoading(true);
    setError(false);
    // console.log(props.target.attributes[0].value);
    // console.log(props.target.attributes[1].value);
    // console.log(props.target.children[0].attributes[1].value);
    // console.log(props.target.form[2].value);
    const brand = props.target.form[1].value;
    const color = props.target.form[2].value;


    axios.get("/api/caps",{
        params: {
            brand: brand,
            color: color,
          }
    }).then((res) => {
        console.log(res.data.item);
        const getColor = res.data.color;
        const getBrand = res.data.brand;
        const getCategory = res.data.category;

        if(!getColor){
            console.log('ng');
        }

      const data = res.data.item.map((caps) => ({
        id: caps.id,
        url: caps[getColor],
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
