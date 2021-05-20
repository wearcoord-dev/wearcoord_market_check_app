import { memo, useState } from "react";
import { SearchBrand } from "./SearchBrand";
import { SearchColor } from "./SearchColor";

export const SearchItemTops = memo((props) => {
    const { onClickFetchTops } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    return (
        <>
            <form>
                <input type="hidden" wear="tops" />
                <input type="hidden" id="getbrand" value={value} />
                <input type="hidden" id="getcolor" value={valueColor} />
                <input type="hidden" id="getCategory" value="508759" />
                <input type="hidden" id="type" value="tops" />
                <SearchBrand setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />
                <button type="button"  onClick={onClickFetchTops}>送信</button>
            </form>
        </>
    )
})