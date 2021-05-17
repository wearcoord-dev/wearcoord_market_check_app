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
        console.log(res.data.DBitems);

      const data = res.data.DBitems.map((caps) => ({
        id: caps.id,
        url: caps.whiteImg,
        // color: caps.color,
      }));
      setUserCaps(data);
              console.log(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getCaps, userCaps, loading, error }
};
