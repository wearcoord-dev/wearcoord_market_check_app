import { memo, useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandTops } from "./searchBrand/SearchBrandTops";
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
                <SearchBrandTops setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />

                {context.contextName.gender == 'male' ? <SearchCategoryTops setValueCategory={setValueCategory} /> : <SearchCategoryTopsFemale setValueCategory={setValueCategory} />}

                <div className="divBtn">
                    <button className="submitBtn" type="button" onClick={onClickFetchTops}>送信</button>
                </div>
            </form>
        </>
    )
})