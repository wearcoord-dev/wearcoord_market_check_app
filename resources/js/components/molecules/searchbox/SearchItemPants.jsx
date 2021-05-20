import { memo, useState } from "react";
import { SearchBrand } from "./SearchBrand";
import { SearchColor } from "./SearchColor";

export const SearchItemPants = memo((props) => {
    const { onClickFetchPants } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    return (
        <>
            <form>
                <input type="hidden" wear="pants" />
                <input type="hidden" id="getbrand" value={value} />
                <input type="hidden" id="getcolor" value={valueColor} />
                <input type="hidden" id="getCategory" value="508772" />
                <input type="hidden" id="type" value="pants" />
                <SearchBrand setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />
                <button type="button"  onClick={onClickFetchPants}>送信</button>
            </form>
        </>
    )
})