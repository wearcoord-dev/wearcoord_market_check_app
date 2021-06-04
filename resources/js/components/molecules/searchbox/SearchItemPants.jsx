import { memo, useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
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

    return (
        <>
            <form>
                <input type="hidden" wear="pants" />
                <input type="hidden" id="getbrand" value={value} />
                <input type="hidden" id="getcolor" value={valueColor} />
                <input type="hidden" id="getCategory" value={valueCategory} />
                <input type="hidden" id="type" value="pants" />
                <SearchBrandPants setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />

                {context.contextName.gender == 'male' ? <SearchCategoryPants setValueCategory={setValueCategory} /> : <SearchCategoryPantsFemale setValueCategory={setValueCategory} />}

                <div className="divBtn">
                    <button  className="submitBtn" type="button" onClick={onClickFetchPants}>送信</button>
                </div>
            </form>
        </>
    )
})