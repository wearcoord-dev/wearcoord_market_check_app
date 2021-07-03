import { memo, useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandPantsFemale } from "./female/SearchBrandPantsFemale";
import { SearchCategoryPantsFemale } from "./female/SearchCategoryPantsFemale";
import { SearchCategoryPants } from "./male/SearchCategoryPants";
import { SearchBrandPants } from "./searchBrand/SearchBrandPants";
import { SearchColor } from "./SearchColor";

export const SearchItemPants = memo((props) => {
    const { onClickFetchPants } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    const [valueCategory, setValueCategory] = useState("");

    const context = useContext(UserContext);

    useEffect((props) => {
        console.log(props);

        const data = {
            wear: "pants",
            brand: value,
            color: valueColor,
            category: valueCategory,
        }

        onClickFetchPants(data);
    }, [value, valueColor, valueCategory]);

    return (
        <>
            <div>
                {context.contextName.gender == 'male' ? <SearchBrandPants setValue={setValue} /> : <SearchBrandPantsFemale setValue={setValue} />}
                <SearchColor setValueColor={setValueColor} />

                {context.contextName.gender == 'male' ? <SearchCategoryPants setValueCategory={setValueCategory} /> : <SearchCategoryPantsFemale setValueCategory={setValueCategory} />}
            </div>
        </>
    )
})