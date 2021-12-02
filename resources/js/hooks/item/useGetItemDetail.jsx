import axios from "axios";
import { useState } from "react";

export const useGetItemDetail = () => {
    const [itemGetDetail, setItemGetDetail] = useState(null);
    const [loadingItemDetail, setLoadingItemDetail] = useState(false);
    const [errorItemDetail, setErrorItemDetail] = useState(false);



    const GetItemDetail = (props) => {
        setLoadingItemDetail(true);
        setErrorItemDetail(false);


        const id = props.id;
        const type = props.type;

        axios.get("/api/getitemdetail", {
            params: {
                id: id,
                type: type,
              }
        }).then((res) => {
            setItemGetDetail(res.data);
          }).catch(() => {
            setErrorItemDetail(true);
          }).finally(() => {
            setLoadingItemDetail(false);
          });
    }
    return { GetItemDetail, itemGetDetail, loadingItemDetail, errorItemDetail }

}