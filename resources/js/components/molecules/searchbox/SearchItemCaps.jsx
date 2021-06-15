import { memo, useContext, useEffect, useState } from "react";
import { useAllCaps } from "../../../hooks/selectwear/useAllCaps";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandCaps } from "./searchBrand/SearchBrandCaps";
import { SearchColor } from "./SearchColor";

export const SearchItemCaps = memo((props) => {
    const { onClickFetchCaps } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    const context = useContext(UserContext);
    // console.log(context.contextName.id);
    // console.log('表示してるぞ！！');

    useEffect((props) => {
        console.log(props);
        // if (props !== undefined) {
            let category = "";

        if(context.contextName.gender){
            category = "506269";
        }else{
            category = "565818";
        }

        const data = {
            wear : "caps",
            brand : value,
            color : valueColor,
            category: category,
        }

        onClickFetchCaps(data);
        // }
    }, [value, valueColor]);

    return (
        <>
            <div>
                <SearchBrandCaps setValue={setValue}
                 />
                <SearchColor setValueColor={setValueColor} />
            </div>
        </>
    )
})