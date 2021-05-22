import { memo, useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrand } from "./SearchBrand";
import { SearchColor } from "./SearchColor";
import { SearchCategoryTops } from "./male/SearchCategoryTops";
import { SearchCategoryTopsFemale } from "./female/SearchCategoryTopsFemale";

export const SearchItemTops = memo((props) => {
    const { onClickFetchTops } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    const [valueCategory, setValueCategory] = useState("");

    const context = useContext(UserContext);

    return (
        <>
            <form>
                <input type="hidden" wear="tops" />
                <input type="hidden" id="getbrand" value={value} />
                <input type="hidden" id="getcolor" value={valueColor} />
                <input type="hidden" id="getCategory" value={valueCategory} />
                <input type="hidden" id="type" value="tops" />
                <SearchBrand setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />

                {context.contextName.gender == 'male' ? <SearchCategoryTops  setValueCategory={setValueCategory} />  : <SearchCategoryTopsFemale   setValueCategory={setValueCategory} />}

                <button type="button"  onClick={onClickFetchTops}>送信</button>
            </form>
        </>
    )
})