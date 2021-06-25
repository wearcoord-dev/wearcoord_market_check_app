import axios from "axios";
import { useState } from "react";

export const useGetItemDetail = () => {
    const [itemGetDetail, setItemGetDetail] = useState(null);
    const [loadingItemDetail, setLoadingItemDetail] = useState(false);
    const [errorItemDetail, setErrorItemDetail] = useState(false);



    const GetItemDetail = (props) => {
        setLoadingItemDetail(true);
        setErrorItemDetail(false);

        console.log(props);

        const id = props.id;
        const type = props.type;

        axios.get("/api/getitemdetail", {
            params: {
                id: id,
                type: type,
              }
        }).then((res) => {
            console.log(res);
            setItemGetDetail(res.data);
          }).catch(() => {
            setErrorItemDetail(true);
          }).finally(() => {
            setLoadingItemDetail(false);
          });
    }
    return { GetItemDetail, itemGetDetail, loadingItemDetail, errorItemDetail }

}