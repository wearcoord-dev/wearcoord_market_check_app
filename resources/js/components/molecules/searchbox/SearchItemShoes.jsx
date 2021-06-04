import { memo, useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandShoes } from "./searchBrand/SearchBrandShoes";
import { SearchColor } from "./SearchColor";

export const SearchItemShoes = memo((props) => {
    const { onClickFetchShoes } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    const context = useContext(UserContext);

    return (
        <>
            <form>
                <input type="hidden" wear="shoes" />
                <input type="hidden" id="getbrand" value={value} />
                <input type="hidden" id="getcolor" value={valueColor} />
                {context.contextName.gender == 'male' ? <input type="hidden" id="getCategory" value="208025" /> : <input type="hidden" id="getCategory" value="565819" />}
                <input type="hidden" id="type" value="shoes" />
                <SearchBrandShoes setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />
                <div className="divBtn">
                    <button className="submitBtn" type="button" onClick={onClickFetchShoes}>送信</button>
                </div>
            </form>
        </>
    )
})