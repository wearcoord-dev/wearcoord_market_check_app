import axios from "axios";
import { useState } from "react";

export const useAllShoes = () => {
    const [userShoes, setUserShoes] = useState([]);
    const [loadingShoes, setLoading] = useState(false);
    const [errorShoes, setError] = useState(false);

    const getShoes = (props) => {
        setLoading(true);
        setError(false);
        console.log("shoesだよ");
        const brand = props.target.form[1].value;
        const color = props.target.form[2].value;
        const category = props.target.form[3].value;
        const type = props.target.form[4].value;

        axios.get("/api/shoes", {
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

            const data = res.data.item.map((wear) => ({
                id: wear.db.id,
                url: wear.url,
                brand: getBrand,
                color: getColor,
                category: getCategory,
            }));
            console.log(data);
            setUserShoes(data);
        }).catch(() => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        });
    };

    return { getShoes, userShoes, loadingShoes, errorShoes }
};
