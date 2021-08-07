import axios from "axios";
import { useState } from "react";

export const useAllShoes = () => {
    const [userShoes, setUserShoes] = useState([]);
    const [loadingShoes, setLoadingShoes] = useState(false);
    const [errorShoes, setErrorShoes] = useState(false);

    const getShoes = (props) => {
        setLoadingShoes(true);
        setErrorShoes(false);
        // console.log("shoesだよ");
        const brand = props.brand;
        const color = props.color;
        const category = props.category;
        const type = props.wear;
        const page = props.page;

        axios.get("/api/shoes", {
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
            }));
            console.log(data);
            setUserShoes(data);
        }).catch(() => {
            setErrorShoes(true);
        }).finally(() => {
            setLoadingShoes(false);
        });
    };

    return { getShoes, userShoes, loadingShoes, errorShoes }
};
