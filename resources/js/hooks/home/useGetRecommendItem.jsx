import axios from "axios";
import { useState } from "react";

export const useGetRecommendItem = () => {
    const [recommendItem, setRecommendItem] = useState(null);
    const [loadingRecommendItem, setLoadingRecommendItem] = useState(false);
    const [errorRecommendItem, setErrorRecommendItem] = useState(false);



    const GetRecommendItem = (props) => {
        setLoadingRecommendItem(true);
        setErrorRecommendItem(false);


        // console.log(props);

        axios.get("/api/getrecommenditem", {
            params: {
                userid: props.id,
                gender: props.gender
              }
        }).then((res) => {

            const data = res.data.map((wear) => ({
                id: wear.item.id,
                dbbrand: wear.item.brand,
                url: wear.url,
                category: wear.item.category,
              }
          ));
            // console.log(res.data);
            setRecommendItem(data);
          }).catch(() => {
            setErrorRecommendItem(true);
          }).finally(() => {
            setLoadingRecommendItem(false);
          });
    }
    return { GetRecommendItem,  recommendItem, loadingRecommendItem, errorRecommendItem }

}