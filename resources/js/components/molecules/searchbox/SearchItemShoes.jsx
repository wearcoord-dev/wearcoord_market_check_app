import { memo, useState } from "react";
import { SearchBrand } from "./SearchBrand";
import { SearchColor } from "./SearchColor";

export const SearchItemShoes = memo((props) => {
    const { onClickFetchShoes } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    return (
        <>
            <form>
                <input type="hidden" wear="shoes" />
                <input type="hidden" id="getbrand" value={value} />
                <input type="hidden" id="getcolor" value={valueColor} />
                <input type="hidden" id="getCategory" value="208025" />
                <input type="hidden" id="type" value="shoes" />
                <SearchBrand setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />
                <div className="divBtn">
                    <button className="submitBtn" type="button" onClick={onClickFetchShoes}>送信</button>
                </div>
            </form>
        </>
    )
})