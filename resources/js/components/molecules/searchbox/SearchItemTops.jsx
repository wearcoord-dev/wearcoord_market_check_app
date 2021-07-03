import { memo, useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandTops } from "./searchBrand/SearchBrandTops";
import { SearchColor } from "./SearchColor";
import { SearchCategoryTops } from "./male/SearchCategoryTops";
import { SearchCategoryTopsFemale } from "./female/SearchCategoryTopsFemale";
import { SearchBrandTopsFemale } from "./female/SearchBrandTopsFemale";

export const SearchItemTops = memo((props) => {
    const { onClickFetchTops } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    const [valueCategory, setValueCategory] = useState("");

    const context = useContext(UserContext);

    useEffect((props) => {
        console.log(props);

        const data = {
            wear : "tops",
            brand : value,
            color : valueColor,
            category: valueCategory,
        }

        onClickFetchTops(data);
    }, [value, valueColor,valueCategory]);

    return (
        <>
            <div>
                {context.contextName.gender == 'male' ? <SearchBrandTops setValue={setValue} /> : <SearchBrandTopsFemale setValue={setValue} />}
                <SearchColor setValueColor={setValueColor} />

                {context.contextName.gender == 'male' ? <SearchCategoryTops setValueCategory={setValueCategory} /> : <SearchCategoryTopsFemale setValueCategory={setValueCategory} />}
            </div>
        </>
    )
})