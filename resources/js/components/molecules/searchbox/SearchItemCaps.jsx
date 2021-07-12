import { memo, useContext, useEffect, useState } from "react";
import { useAllCaps } from "../../../hooks/selectwear/useAllCaps";
import { UserContext } from "../../providers/UserProvider";
import { SearchCategoryCapsFemale } from "./female/SearchCategoryCapsFemale";
import { SearchCategoryCaps } from "./male/SearchCategoryCaps";
import { SearchBrandCaps } from "./searchBrand/SearchBrandCaps";
import { SearchColor } from "./SearchColor";

export const SearchItemCaps = memo((props) => {
    const { onClickFetchCaps, setCapsSel, capsSel } = props;
    const [value, setValue] = useState(capsSel.brand);
    const [valueColor, setValueColor] = useState(capsSel.color);
    const [valueCategory, setValueCategory] = useState(capsSel.category);

    const context = useContext(UserContext);

    useEffect((props) => {
        console.log(props);
        // if (props !== undefined) {
        //     let category = "";

        // if(context.contextName.gender == 'male'){
        //     category = "506269";
        // }else{
        //     category = "565818";
        // }

        const data = {
            wear : "caps",
            brand : value,
            color : valueColor,
            category: valueCategory,
        }

        setCapsSel(data);

        onClickFetchCaps(data);
        // }
    }, [value, valueColor, valueCategory]);

    return (
        <>
            <div>
                <SearchBrandCaps setValue={setValue}
                value={value}
                 />
                <SearchColor
                setValueColor={setValueColor}
                valueColor={valueColor}
                 />

                {context.contextName.gender == 'male' ? <SearchCategoryCaps setValueCategory={setValueCategory} valueCategory={valueCategory} /> : <SearchCategoryCapsFemale setValueCategory={setValueCategory} valueCategory={valueCategory} />}
            </div>
        </>
    )
})