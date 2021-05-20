import axios from "axios";
import { useState } from "react";

export const useAllPants = () => {
    const [userPants, setUserPants] = useState([]);
    const [loadingPants, setLoading] = useState(false);
    const [errorPants, setError] = useState(false);

    const getPants = (props) => {
        setLoading(true);
        setError(false);
        console.log("pantsだよ");
        const brand = props.target.form[1].value;
        const color = props.target.form[2].value;
        const category = props.target.form[3].value;
        const type = props.target.form[4].value;


        axios.get("/api/pants", {
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
            setUserPants(data);
        }).catch(() => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        });
    };

    return { getPants, userPants, loadingPants, errorPants }
};
